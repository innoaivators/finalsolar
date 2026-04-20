import { useState, useRef, useEffect, FC, useCallback } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export interface MasonryItem {
  image: string;
  title: string;
  category?: string;
}

/* ─── Single card with pixel-block reveal animation ─── */
interface PixelCardProps {
  item: MasonryItem;
  index: number;
  onClick: () => void;
}

const GRID_COLS = 8;
const GRID_ROWS = 6;

const PixelCard: FC<PixelCardProps> = ({ item, index, onClick }) => {
  const [revealed, setRevealed] = useState(false);
  const [hovering, setHovering] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fire pixel reveal when card enters viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Global stagger delay based on index so columns cascade
          setTimeout(() => setRevealed(true), (index % 4) * 100);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [index]);

  const totalTiles = GRID_COLS * GRID_ROWS;

  return (
    <div
      ref={ref}
      className="relative rounded-xl overflow-hidden cursor-pointer shadow-lg group"
      style={{ aspectRatio: index % 3 === 0 ? "4/3" : index % 3 === 1 ? "3/4" : "1/1" }}
      onClick={onClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {/* Actual image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovering ? "scale(1.07)" : "scale(1)" }}
        loading="lazy"
      />

      {/* Pixel overlay tiles — initially covering, then disappear one by one */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: totalTiles }).map((_, i) => {
          // Randomise each tile's delay within a wave
          const col = i % GRID_COLS;
          const row = Math.floor(i / GRID_COLS);
          const waveDelay = (col + row) * 40; // diagonal wave
          const randomJitter = (Math.sin(i * 7.3) * 0.5 + 0.5) * 60;
          const delay = waveDelay + randomJitter;

          return (
            <div
              key={i}
              style={{
                backgroundColor: "hsl(220 30% 12%)",
                opacity: revealed ? 0 : 1,
                transform: revealed ? "scaleY(0)" : "scaleY(1)",
                transformOrigin: "top",
                transition: revealed
                  ? `opacity 0.25s ease ${delay}ms, transform 0.35s ease ${delay}ms`
                  : "none",
              }}
            />
          );
        })}
      </div>

      {/* Image scale effect only, hover details removed */}
    </div>
  );
};

/* ─── Masonry grid ─── */
interface MasonryGalleryProps {
  items: MasonryItem[];
  columns?: number;
}

const MasonryGallery: FC<MasonryGalleryProps> = ({ items, columns = 4 }) => {
  const [lightbox, setLightbox] = useState<MasonryItem | null>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Distribute into columns
  const columnArrays: MasonryItem[][] = Array.from({ length: columns }, () => []);

  if (columns === 3) {
    // In tablet view, column 1 items are always tall (3/4 aspect ratio) while column 0 
    // are short (4/3) and column 2 are square (1/1). To prevent the center column 
    // from growing much longer than others, we dynamically place items into the shortest column.
    const colWeights = [0, 0, 0];
    items.forEach((item) => {
      let minCol = 0;
      if (colWeights[1] < colWeights[minCol]) minCol = 1;
      if (colWeights[2] < colWeights[minCol]) minCol = 2;
      
      const rowIdx = columnArrays[minCol].length;
      const globalIdx = minCol + rowIdx * 3;
      const aspectMod = globalIdx % 3;
      const heightVal = aspectMod === 0 ? 0.75 : aspectMod === 1 ? 1.333 : 1;

      columnArrays[minCol].push(item);
      colWeights[minCol] += heightVal;
    });
  } else {
    items.forEach((item, i) => columnArrays[i % columns].push(item));
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "12px",
          alignItems: "start",
        }}
      >
        {columnArrays.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-3">
            {col.map((item, rowIdx) => {
              const globalIdx = colIdx + rowIdx * columns;
              return (
                <PixelCard
                  key={globalIdx}
                  item={item}
                  index={globalIdx}
                  onClick={() => setLightbox(item)}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Lightbox via Portal */}
      {mounted && lightbox && createPortal(
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            style={{ animation: "fadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-navy/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img
                src={lightbox.image}
                alt={lightbox.title}
                className="w-full max-h-[85vh] object-contain"
              />
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 sm:-top-4 -right-2 sm:-right-16 w-12 h-12 rounded-full flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 transition-all border border-white/20"
              style={{ backdropFilter: "blur(4px)" }}
            >
              <X size={28} />
            </button>
          </div>
        </div>,
        document.body
      )}

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:scale(0.95); } to { opacity:1; transform:scale(1); } }
      `}</style>
    </>
  );
};

export default MasonryGallery;

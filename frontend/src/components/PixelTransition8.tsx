import { useState, useRef, useEffect, FC, useCallback } from "react";

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

  // Distribute into columns
  const columnArrays: MasonryItem[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => columnArrays[i % columns].push(item));

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

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            style={{ animation: "fadeIn 0.25s ease" }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white"
              style={{ background: "rgba(0,0,0,0.5)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity:0; transform:scale(0.97); } to { opacity:1; transform:scale(1); } }
      `}</style>
    </>
  );
};

export default MasonryGallery;

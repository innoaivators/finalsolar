import { useEffect, useRef, useState } from "react";
import PageBanner from "@/components/PageBanner";

interface ServicePageTemplateProps {
  title: string;
  image: string;
  description: string;
  details?: string[];
  children?: React.ReactNode;
  imageCompanion?: React.ReactNode;
  sectionStyle?: React.CSSProperties;
  backgroundImg?: string;
  layout?: 'default' | 'side-by-side';
}

/* ─── tiny reusable hook ─────────────────────────────────────────── */
function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current as unknown as Element);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const ServicePageTemplate = ({ title, image, description, details, children, imageCompanion, sectionStyle, backgroundImg, layout = 'default' }: ServicePageTemplateProps) => {
  const imgReveal = useInView<HTMLDivElement>(0.1);
  const textReveal = useInView<HTMLDivElement>(0.15);
  const listReveal = useInView<HTMLUListElement>(0.1);

  return (
    <>
      <PageBanner title={title} breadcrumb={title} />

      <section className={`relative overflow-hidden ${layout === 'side-by-side' ? '' : 'bg-background'}`} style={sectionStyle}>

        {/* Full-page Background Image with Opacity */}
        {backgroundImg && (
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-fixed pointer-events-none"
            style={{
              backgroundImage: `url(${backgroundImg})`,
              opacity: 0.18,
              filter: 'grayscale(0.2) blur(1px)'
            }}
          />
        )}

        {layout === 'side-by-side' ? (
          /* ── Side-by-Side Layout ── */
          <div className="container mx-auto px-4 md:px-10 py-16 md:py-24 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">

              {/* Left Column: Animation or Image */}
              <div
                ref={imgReveal.ref}
                className="w-full md:w-1/2"
                style={{
                  opacity: imgReveal.visible ? 1 : 0,
                  transform: imgReveal.visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
                  transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <div className="h-[300px] sm:h-[400px] md:h-[500px] w-full flex items-center justify-center bg-white/90 backdrop-blur-md rounded-3xl border border-white/20 shadow-lg">
                  {imageCompanion ? (
                    imageCompanion
                  ) : (
                    image && (
                      <div className="w-full h-full p-4 md:p-8">
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                          <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Right: Text Content */}
              <div
                ref={textReveal.ref}
                className="w-full md:w-1/2"
                style={{
                  opacity: textReveal.visible ? 1 : 0,
                  transform: textReveal.visible ? "translateX(0)" : "translateX(36px)",
                  transition: "opacity 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s",
                }}
              >
                <h2 className="section-heading mb-6">{title}</h2>
                <p className="text-muted-foreground leading-relaxed font-body mb-8 text-base sm:text-lg">
                  {description}
                </p>

                {/* Detail bullet list */}
                {details && details.length > 0 && (
                  <ul className="space-y-4 mb-10" ref={listReveal.ref}>
                    {details.map((d, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-4 text-foreground font-body"
                        style={{
                          opacity: listReveal.visible ? 1 : 0,
                          transform: listReveal.visible ? "translateX(0)" : "translateX(36px)",
                          transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.08}s,
                                       transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.08}s`,
                        }}
                      >
                        <span
                          className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0 shadow-sm"
                          style={{ background: sectionStyle ? '#e86432' : 'var(--color-gold, #c9a84c)' }}
                        />
                        <span className="text-navy font-medium leading-tight">{d}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            {children}
          </div>
        ) : (
          /* ── Default Layout (Stacked) ── */
          <>
            {/* Full-width hero image row */}
            <div
              ref={imgReveal.ref}
              className="w-full px-4 md:px-10 pt-10 pb-6 relative z-10"
              style={{
                opacity: imgReveal.visible ? 1 : 0,
                transform: imgReveal.visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
                transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <div className="flex flex-col md:flex-row gap-6 h-[300px] sm:h-[400px] md:h-[500px]">
                {imageCompanion && (
                  <div className={`h-full ${image ? 'w-full md:w-1/2' : 'w-full'}`}>
                    <div className="h-full w-full">
                      {imageCompanion}
                    </div>
                  </div>
                )}
                {image && (
                  <div className={`rounded-2xl overflow-hidden shadow-2xl h-full ${imageCompanion ? 'w-full md:w-1/2' : 'w-full'}`}>
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Text + details (constrained) */}
            <div className="container mx-auto max-w-4xl section-padding relative z-10">
              <div
                ref={textReveal.ref}
                style={{
                  opacity: textReveal.visible ? 1 : 0,
                  transform: textReveal.visible ? "translateX(0)" : "translateX(-36px)",
                  transition: "opacity 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s, transform 0.75s cubic-bezier(0.22,1,0.36,1) 0.1s",
                }}
              >
                <h2 className="section-heading mb-6">{title}</h2>
                <p className="text-muted-foreground leading-relaxed font-body mb-6">{description}</p>
              </div>

              {details && details.length > 0 && (
                <ul className="space-y-3 mb-10" ref={listReveal.ref}>
                  {details.map((d, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-foreground font-body text-sm"
                      style={{
                        opacity: listReveal.visible ? 1 : 0,
                        transform: listReveal.visible ? "translateX(0)" : "translateX(36px)",
                        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.08}s,
                                     transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.05 + i * 0.08}s`,
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: sectionStyle ? '#e86432' : 'var(--color-gold, #c9a84c)' }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              {children}
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ServicePageTemplate;

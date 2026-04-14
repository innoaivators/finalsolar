import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import DynamicLottie from "@/components/DynamicLottie";
import cityConstructionUrl from "@/assets/animations/city_building_construction.json?url";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(213 63% 10%) 0%, hsl(213 55% 17%) 50%, hsl(220 50% 12%) 100%)",
      }}
    >
      {/* ── Decorative blurred orbs ── */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: "-80px", left: "-80px",
          width: "360px", height: "360px", borderRadius: "50%",
          background: "radial-gradient(circle, hsla(37,90%,55%,0.18) 0%, transparent 70%)",
          filter: "blur(48px)", pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute", bottom: "-100px", right: "-60px",
          width: "420px", height: "420px", borderRadius: "50%",
          background: "radial-gradient(circle, hsla(213,80%,55%,0.14) 0%, transparent 70%)",
          filter: "blur(64px)", pointerEvents: "none",
        }}
      />

      {/* ── Content ── */}
      <div
        ref={ref}
        className={`container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 ${visible ? "animate-fade-up" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        {/* Lottie animation — sky tinted to match dark navy background */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            position: "relative",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.40)",
            /* match the section's base navy so the sky area is invisible */
            background: "hsl(213, 63%, 10%)",
          }}
        >
          {/* The Lottie itself — only render when visible for performance */}
          {visible && (
            <DynamicLottie
              animationUrl={cityConstructionUrl}
              loop={true}
              className="w-full h-auto max-h-[500px] block"
            />
          )}

          {/* Top sky overlay — covers the light sky with the section's dark navy */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0, left: 0, right: 0,
              height: "55%",          /* covers the sky / upper half */
              background: "linear-gradient(to bottom, hsl(213,63%,10%) 0%, hsl(213,60%,13%) 55%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Bottom edge fade — softly blends the base of the buildings */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "18%",
              background: "linear-gradient(to top, hsl(213,63%,10%) 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Left edge fade */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0, bottom: 0, left: 0,
              width: "6%",
              background: "linear-gradient(to right, hsl(213,63%,10%) 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          {/* Right edge fade */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              top: 0, bottom: 0, right: 0,
              width: "6%",
              background: "linear-gradient(to left, hsl(213,63%,10%) 0%, transparent 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        </div>

        {/* Text content */}
        <div>
          <p className="section-title">ABOUT US</p>

          <h2
            className="mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-heading"
            style={{ color: "#ffffff" }}
          >
            We Build Everything That You Need
          </h2>

          <p className="leading-relaxed mb-6 font-body" style={{ color: "rgba(255,255,255,0.70)" }}>
            The group has always worked on the guiding principles of Honesty, Integrity, Mutual Respect and Foresightedness, and hence the family has great acceptance in The State of Kuwait among Natives and Expats.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Professional engineering team",
              "Reliable project delivery",
              "Customer-focused solutions",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3" style={{ color: "rgba(255,255,255,0.90)" }}>
                <CheckCircle size={20} className="text-gold flex-shrink-0" />
                <span className="font-body">{item}</span>
              </li>
            ))}
          </ul>

          <div
            className="pt-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
          >
            <p className="font-heading font-bold text-lg" style={{ color: "#ffffff" }}>
              KHALED A.T ALSHAMMARI
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              Chairman &amp; Founder
            </p>
            <div className="mt-3 font-heading italic text-2xl gold-text">
              K. Alshammari
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

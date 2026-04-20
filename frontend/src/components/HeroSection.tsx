import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import teslaPowerImg from "@/assets/tesla_power.png";
import petFoodImg from "@/assets/pet_food_bg.png";
import contractingServicesImg from "@/assets/contracting_services_bg.png";
import renewableSolarImg from "@/assets/renewable_solar_daytime.png";

interface Slide {
  image: string;
  subtitle: string;
  highlight: string;
  description: string;
  highlightSuffix?: string;
}

const slides: Slide[] = [
  {
    image: renewableSolarImg,
    subtitle: "Renewable",
    highlight: "Solar Energy",
    description: "Clean energy solutions for a brighter future. High-performance solar photovoltaic systems tailored to reduce operational costs and promote environmental stewardship.",
  },
  {
    image: hero1,
    subtitle: "We Build",
    highlight: "Your Dreams",
    description: "Your Partner in Success in the Oil & Gas Industry. We provide state-of-the-art infrastructure solutions that empower businesses to reach their full potential through excellence and innovation.",
  },
  {
    image: teslaPowerImg,
    subtitle: "Tesla Power",
    highlight: "Energy Storage",
    description: "Revolutionizing how we power our world. Specialized energy storage solutions designed for efficiency, sustainability, and long-term reliability in industrial and commercial sectors.",
  },
  {
    image: contractingServicesImg,
    subtitle: "Professional",
    highlight: "Contracting Services",
    description: "Engineering excellence across every project. From conceptual design to final delivery, our expert team manages complex infrastructure projects in the most challenging environments with precision.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Preload all hero images for smoother transitions
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });

    // Trigger initial slide-in animation
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const goTo = useCallback((index: number) => {
    setFade(false);
    // Snappier transition for a more responsive feel
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => {
        setFade(true);
      }, 50);
    }, 400);
  }, []);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 7000); // Slightly slower auto-rotate for better readability
    return () => clearInterval(timer);
  }, [next]);

  const isLeft = current % 2 === 0;

  // Use a refined charcoal grey for the panel
  const panelBg = "rgba(40, 44, 52, 0.95)";

  return (
    <section className="relative h-screen min-h-[700px] lg:min-h-[800px] overflow-hidden bg-black">
      {/* Full Background Image */}
      <div
        key={`bg-${current}`}
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-800 ${fade && !isInitialLoad ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="absolute inset-0 bg-black/30" /> {/* Subtle overlay to help text legibility */}
      </div>

      {/* Side Panel Overlay */}
      <div
        key={`panel-${current}`}
        className={`absolute inset-y-0 ${isLeft ? "left-0" : "right-0"} w-full md:w-[50%] z-10 transition-all duration-700 ease-in-out ${isInitialLoad || !fade
          ? (isLeft ? "-translate-x-full" : "translate-x-full")
          : "translate-x-0"
          }`}
        style={{ backgroundColor: panelBg }}
      />

      {/* Content */}
      <div key={`content-${current}`} className={`relative z-10 mx-auto h-full px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col justify-center pt-[120px] sm:pt-[160px] md:pt-[220px] pb-10 sm:pb-16 ${isLeft ? "items-start" : "items-end"}`}>
        <div className={`w-full md:w-[60%] lg:w-[45%] flex flex-col justify-center ${isLeft ? "items-start text-left" : "items-end text-right"} transition-all duration-700 ease-out delay-100 ${isInitialLoad || !fade
          ? (isLeft ? "opacity-0 -translate-x-12" : "opacity-0 translate-x-12")
          : "opacity-100 translate-x-0"
          }`}>
          <div className={`flex items-center gap-2 mb-6 ${isLeft ? "" : "flex-row-reverse"}`}>
            <div className="w-1 h-5 bg-[#3b82f6] rounded-full"></div>
            <p className="text-[10px] md:text-sm tracking-[0.25em] font-bold text-white/80 font-heading">
              WELCOME TO METALLICA
            </p>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-heading leading-tight mb-2 drop-shadow-lg">
            {slides[current].subtitle}
          </h1>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#facc15] mb-6 font-heading leading-tight drop-shadow-xl">
            {slides[current].highlight}
            {slides[current].highlightSuffix && (
              <span className="text-white"> {slides[current].highlightSuffix}</span>
            )}
          </h1>

          <p className="text-white/80 text-xs sm:text-base lg:text-lg max-w-2xl mb-10 font-body leading-relaxed">
            {slides[current].description}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto ${isLeft ? "items-start" : "items-end sm:items-start"} ${isLeft ? "justify-start" : "justify-end"}`}>
            <Link to="/services/import-and-export" className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white text-[10px] sm:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-center">
              Our Services
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-6 sm:px-10 py-3 sm:py-4 bg-[#3b82f6] text-white text-[10px] sm:text-sm font-bold uppercase tracking-widest hover:bg-[#2563eb] shadow-lg shadow-blue-500/20 transition-all duration-300 text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Edge Arrows */}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-8 h-12 md:w-10 md:h-16 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors text-white/70 hover:text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-8 h-12 md:w-10 md:h-16 flex items-center justify-center bg-black/40 hover:bg-black/60 transition-colors text-white/70 hover:text-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === current ? "bg-[#facc15] w-8" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;

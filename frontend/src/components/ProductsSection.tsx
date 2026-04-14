import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import catnjoy from "@/assets/product-catnjoy.jpg";
import dognjoy from "@/assets/product-dognjoy.jpg";
import perfecta from "@/assets/product-perfecta.jpg";
import Stack from "./PixelTransition5";

const products = [
  { image: perfecta, title: "Perfecta", desc: "Premium Life & Quality Comfort", path: "/services/perfecta" },
  { image: dognjoy, title: "Dog n Joy", desc: "Happiness in every bite", path: "/services/dog-n-joy" },
  { image: catnjoy, title: "Cat n Joy", desc: "Joy for your feline friends", path: "/services/cat-n-joy" },
];

const ProductsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const productCards = products.map((p) => (
    <div key={p.title} className="w-full h-full relative group">
      <img
        src={p.image}
        alt={p.title}
        className="w-full h-full object-cover rounded-2xl shadow-2xl"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent rounded-2xl flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-heading font-bold text-2xl mb-2">{p.title}</h3>
        <p className="text-white/80 text-sm font-body">{p.desc}</p>
        <div className="w-12 h-1 bg-gold mt-4 transform origin-left"></div>
      </div>
    </div>
  ));

  return (
    <section id="products" className="section-padding overflow-hidden relative" style={{ background: "hsl(var(--gray-light))" }}>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="section-title">OUR PRODUCTS</p>
          <h2 className="section-heading">Pet Food Brands</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-body">
            Discover our premium range of pet food brands, trusted by pet owners across Kuwait for quality and nutrition.
          </p>
        </div>

        <div className={`flex justify-center items-center transition-all duration-1000 delay-300 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="w-[320px] h-[450px] sm:w-[400px] sm:h-[500px] md:w-[450px] md:h-[550px] relative">
            <Stack
              cards={productCards}
              autoplay={true}
              autoplayDelay={2000}
              pauseOnHover={true}
              sensitivity={150}
              randomRotation={true}
              sendToBackOnClick={true}
              onCardClick={(index) => navigate(products[index].path)}
            />
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground font-body italic">
            Swipe or click to browse through our exclusive brands
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;

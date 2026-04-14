import { Phone } from "lucide-react";
import ctaBg from "@/assets/cta-bg.jpg";

const CTASection = () => {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${ctaBg})` }} />
      <div className="overlay-dark" />
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground font-heading mb-4">
          GET A FREE ESTIMATE
        </h2>
        <p className="text-primary-foreground/80 text-base sm:text-lg font-body mb-4 sm:mb-2">
          Our online scheduling and payment system is safe.
        </p>
        <div className="flex flex-col gap-2 mb-8 items-center text-lg sm:text-2xl md:text-3xl font-bold gold-text font-heading">
          <span>+965 9898 8281</span>
          <span>+965 6002 6630</span>
        </div>
        <a href="tel:+96598988281" className="btn-primary rounded inline-flex items-center gap-2">
          <Phone size={18} />
          Call Now
        </a>
      </div>
    </section>
  );
};

export default CTASection;

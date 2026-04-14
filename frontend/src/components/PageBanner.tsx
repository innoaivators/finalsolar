import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import heroBg from "@/assets/hero-1.jpg";

interface PageBannerProps {
  title: string;
  breadcrumb: string;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => {
  return (
    <section className="relative h-48 md:h-56 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="overlay-dark" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground font-heading mb-3">{title}</h1>
        <div className="flex items-center gap-2 text-sm text-primary-foreground/80 font-body">
          <Link to="/" className="flex items-center gap-1 hover:text-gold transition-colors">
            <Home size={14} /> Home
          </Link>
          <span>›</span>
          <span className="gold-text">{breadcrumb}</span>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;

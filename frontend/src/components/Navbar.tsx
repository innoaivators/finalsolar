import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Instagram, Facebook, Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/nav_logo.jpeg";
import footerLogo from "@/assets/footer_logo.png";

const serviceItems = [
  { label: "Renewable solar Energy", path: "/services/renewable-solar-panel" },
  { label: "Import And Export", path: "/services/import-and-export" },
  { label: "Rental, Leasing & Transportation", path: "/services/rental-leasing-transportation" },
  { label: "Hospitality Services", path: "/services/hospitality-services" },
  { label: "Logistics & Warehouse Management", path: "/services/logistics-warehouse-management" },
  { label: "Real Estate", path: "/services/real-estate" },
];

const projectItems = [
  { label: "Mechanical", path: "/projects/mechanical" },
  { label: "Civil", path: "/projects/civil" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".desktop-dropdown")) {
        setServicesOpen(false);
        setProjectsOpen(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    document.addEventListener("click", onClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setProjectsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-200 ease-in-out top-9 ${scrolled ? "bg-white/75 backdrop-blur-xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.2)] border-b border-white/60" : "bg-white shadow-sm border-b border-slate-100"}`}>
      <div className={`container mx-auto relative flex items-center justify-between transition-all duration-200 ${scrolled ? "h-16" : "h-20"} px-4`}>
        <Link to="/" className={`flex items-center h-full transition-all duration-200 group`}>
          <div 
            className={`absolute top-0 left-4 bg-white shadow-[0_20px_40px_rgba(0,0,0,0.25)] rounded-b-3xl transition-all duration-200 ease-in-out flex items-center justify-center z-50 overflow-hidden origin-top ${
              (scrolled || mobileOpen) ? "w-0 px-0 pt-0 pb-0 opacity-0 scale-y-0 -translate-y-10" : "px-3 pt-4 pb-6 sm:px-5 sm:pt-6 sm:pb-8 md:px-6 md:pt-8 md:pb-10 lg:px-6 lg:pt-8 lg:pb-10 xl:px-8 xl:pt-10 xl:pb-12 opacity-100 scale-y-100 translate-y-0"
            }`}
          >
            <img
              src={logo}
              alt="Metallica"
              className={`object-contain transition-all duration-200 ease-in-out mix-blend-multiply contrast-125 brightness-110 scale-[1.3] md:scale-[1.4] lg:scale-[1.45] xl:scale-[1.65] group-hover:scale-[1.35] md:group-hover:scale-[1.45] lg:group-hover:scale-[1.5] xl:group-hover:scale-[1.7] ${
                (scrolled || mobileOpen) ? "h-0 w-0 opacity-0" : "h-16 sm:h-20 md:h-24 lg:h-24 xl:h-28 w-auto opacity-100"
              }`}
            />
          </div>
          <div className={`flex items-center transition-all duration-200 ease-in-out origin-left ${
            (scrolled || mobileOpen) ? "opacity-100 scale-x-100 w-auto pl-1 gap-2 md:gap-3" : "opacity-100 scale-x-100 w-auto gap-2 md:gap-3 pl-[110px] sm:pl-[120px] md:pl-[160px] lg:pl-[180px] xl:pl-[280px]"
          }`}>
            <img
              src={footerLogo}
              alt="Metallica Icon"
              className={`object-contain transition-all duration-200 ease-in-out ${
                (scrolled || mobileOpen) ? "h-8 sm:h-10 md:h-12 w-auto opacity-100 scale-100 mix-blend-multiply contrast-125 brightness-110" : "h-0 w-0 opacity-0 scale-0"
              }`}
            />
            <div className={`flex flex-col leading-tight pb-2 md:pb-0`}>
              <span className={`font-serif font-bold tracking-tight text-[#ed1c24] transition-all duration-300 ${(scrolled || mobileOpen) ? "text-xl sm:text-2xl md:text-3xl" : "text-2xl md:text-3xl lg:text-3xl xl:text-4xl"}`}>
                Metallica
              </span>
              <span className={`font-sans font-bold tracking-tight text-black uppercase transition-all duration-300 ${(scrolled || mobileOpen) ? "text-[6px] sm:text-[7px] md:text-[9px]" : "text-[8px] md:text-[9px] lg:text-[10px] xl:text-[11px]"}`}>
                GENERAL TRADING &amp; CONTRACTING CO.W.L.L
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-7">
          <Link to="/" className="nav-link navy-text py-2 whitespace-nowrap text-sm xl:text-base">Home</Link>
          <Link to="/about" className="nav-link navy-text py-2 whitespace-nowrap text-sm xl:text-base">About Us</Link>
          <Link to="/management" className="nav-link navy-text py-2 whitespace-nowrap text-sm xl:text-base">Management</Link>

          {/* Services Dropdown */}
          <div className="relative desktop-dropdown">
            <button
              onClick={() => {
                setServicesOpen(!servicesOpen);
                setProjectsOpen(false);
              }}
              className="nav-link navy-text py-2 flex items-center gap-1 whitespace-nowrap text-sm xl:text-base"
            >
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-72 bg-white/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-xl border border-white/50 py-2 animate-fade-in divide-y divide-gray-50/50 mt-1" style={{ animationDuration: "0.2s" }}>
                {serviceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-3 pl-5 pr-4 text-sm font-medium text-slate-700 hover:bg-gold/5 hover:text-gold hover:pl-7 transition-all duration-300 font-body"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Projects Dropdown */}
          <div className="relative desktop-dropdown">
            <button
              onClick={() => {
                setProjectsOpen(!projectsOpen);
                setServicesOpen(false);
              }}
              className="nav-link navy-text py-2 flex items-center gap-1 whitespace-nowrap text-sm xl:text-base"
            >
              Projects <ChevronDown size={14} className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`} />
            </button>
            {projectsOpen && (
              <div className="absolute top-full left-0 w-56 bg-white/85 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-xl border border-white/50 py-2 animate-fade-in divide-y divide-gray-50/50 mt-1" style={{ animationDuration: "0.2s" }}>
                {projectItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block py-3 pl-5 pr-4 text-sm font-medium text-slate-700 hover:bg-gold/5 hover:text-gold hover:pl-7 transition-all duration-300 font-body"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className="nav-link navy-text py-2 whitespace-nowrap text-sm xl:text-base">Contact Us</Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden navy-text" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 pb-4 max-h-[80vh] overflow-y-auto w-full absolute shadow-2xl">
          <Link to="/" className="block w-full text-left px-6 py-3 nav-link navy-text">Home</Link>
          <Link to="/about" className="block w-full text-left px-6 py-3 nav-link navy-text">About Us</Link>
          <Link to="/management" className="block w-full text-left px-6 py-3 nav-link navy-text">Management</Link>

          {/* Mobile Services */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full text-left px-6 py-3 nav-link navy-text flex items-center justify-between"
          >
            Services <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="bg-muted">
              {serviceItems.map((item) => (
                <Link key={item.path} to={item.path} className="block px-10 py-2.5 text-sm navy-text hover:text-gold transition-colors font-body">
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Mobile Projects */}
          <button
            onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
            className="w-full text-left px-6 py-3 nav-link navy-text flex items-center justify-between"
          >
            Projects <ChevronDown size={14} className={`transition-transform ${mobileProjectsOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileProjectsOpen && (
            <div className="bg-muted">
              {projectItems.map((item) => (
                <Link key={item.path} to={item.path} className="block px-10 py-2.5 text-sm navy-text hover:text-gold transition-colors font-body">
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link to="/contact" className="block w-full text-left px-6 py-3 nav-link navy-text">Contact Us</Link>

          {/* Social Links mobile */}
          <div className="flex items-center gap-4 px-6 pt-4 border-t border-slate-100 mt-2">
            <a href="https://www.instagram.com/metallicakuwait/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/10 text-gold hover:bg-gold hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/10 text-gold hover:bg-gold hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-gold/10 text-gold hover:bg-gold hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

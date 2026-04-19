import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import renewableSolarImg from "@/assets/renewable_solar_energy.png";
import serviceImport from "@/assets/service-import.jpg";
import serviceRental from "@/assets/service-rental.jpg";
import serviceHospitality from "@/assets/service-hospitality.jpg";
import serviceLogistics from "@/assets/service-logistics.jpg";
import serviceRealestate from "@/assets/service-realestate.jpg";

import CircularGallery from "./PixelTransition3";

const services = [
  { image: renewableSolarImg, title: "Renewable Solar Energy", desc: "Clean energy solutions for a brighter future through high-performance solar photovoltaic systems.", path: "/services/renewable-solar-panel" },
  { image: serviceImport, title: "Import and Export", desc: "Our company facilitates trades of goods and commodities between domestic and foreign companies.", path: "/services/import-and-export" },
  { image: serviceRental, title: "Rental, Leasing & Transportation", desc: "Providing comprehensive rental, leasing, and transportation solutions for industrial needs.", path: "/services/rental-leasing-transportation" },
  { image: serviceHospitality, title: "Hospitality Services", desc: "The Focus of Entertaining is impressing Others, The Focus of True Hospitality is Serving Others.", path: "/services/hospitality-services" },
  { image: serviceLogistics, title: "Logistics & Warehousing", desc: "End-to-end logistics and warehouse management solutions for optimized supply chain operations.", path: "/services/logistics-warehouse-management" },
  { image: serviceRealestate, title: "Real Estate Services", desc: "A recognized leader in Real Estate Management industry maintaining authentic core values.", path: "/services/real-estate" },
];

const ServicesSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); observer.unobserve(el); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const galleryItems = services.map(s => ({
    image: s.image,
    text: s.title
  }));

  const handleItemClick = (_item: { image: string; text: string }, index: number) => {
    const service = services[index];
    if (service) {
      navigate(service.path);
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 overflow-hidden flex flex-col items-center bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 w-full">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-0"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0px)" : "translateY(40px)",
            transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <p className="section-title">WORKING WITH EXCELLENCE</p>
          <h2 className="section-heading">Our Special Services</h2>
        </div>
      </div>

      {/* Interactive Gallery */}
      <div className={`${isMobile ? "h-[450px]" : "h-[600px] mt-[-50px]"} w-full relative`}>
        <CircularGallery
          items={galleryItems}
          bend={isMobile ? 1.5 : 3}
          textColor="#d4af37"
          borderRadius={0.05}
          font={isMobile ? "bold 14px Montserrat" : "bold 18px Montserrat"}
          onItemClick={handleItemClick}
        />
      </div>
    </section>
  );
};

export default ServicesSection;

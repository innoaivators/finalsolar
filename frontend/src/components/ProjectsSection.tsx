import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import projectMech from "@/assets/project-mechanical.jpg";
import projectCivil from "@/assets/project-civil.jpg";
import projectEng from "@/assets/project-engineering.jpg";
import Carousel from "./PixelTransition9";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  { image: projectMech, title: "Mechanical", category: "Mechanical", path: "/projects/mechanical" },
  { image: projectCivil, title: "Civil", category: "Civil", path: "/projects/civil" },
  { image: projectEng, title: "Engineering", category: "Engineering", path: "/projects/mechanical" },
];

const ProjectsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const carouselItems = projects.map((p, i) => ({
    id: i,
    title: p.title,
    description: `${p.category} solutions delivering excellence in every detail.`,
    image: p.image,
    icon: <FiArrowUpRight className="h-4 w-4" />
  }));

  return (
    <section className="section-padding overflow-hidden" style={{ background: "hsl(var(--gray-light))" }}>
      <div className="container mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="section-title">RECENTLY COMPLETED</p>
          <h2 className="section-heading">Our Latest Projects</h2>
        </div>

        {/* Animation Container */}
        <div className="flex items-center justify-center mt-12 md:mt-16">
          <Carousel 
            items={carouselItems} 
            baseWidth={500} 
            baseHeight={350}
            autoplay={true} 
            autoplayDelay={3500} 
            loop={true} 
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;


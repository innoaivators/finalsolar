import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import projectMech from "@/assets/project-mechanical.jpg";
import projectCivil from "@/assets/project-civil.jpg";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  { image: projectMech, title: "Mechanical", category: "Mechanical", path: "/projects/mechanical" },
  { image: projectCivil, title: "Civil", category: "Civil", path: "/projects/civil" },
];

const ProjectsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 md:mt-16 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <Link 
              key={i} 
              to={p.path} 
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 block h-[350px] w-full"
            >
              <img 
                src={p.image} 
                alt={p.title} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent transition-opacity duration-300 opacity-90 group-hover:opacity-100"></div>
              
              <div className="absolute top-5 left-5 w-12 h-12 rounded bg-[#f59e0b] text-navy flex items-center justify-center transform transition-all duration-300 shadow-md">
                <FiArrowUpRight className="h-6 w-6 stroke-[3px]" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 xl:p-8 flex flex-col justify-end">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-[900] uppercase text-white tracking-wide mb-2">
                    {p.title}
                  </h3>
                  <p className="text-slate-200 text-sm font-medium">
                    {`${p.category} solutions delivering excellence in every detail.`}
                  </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

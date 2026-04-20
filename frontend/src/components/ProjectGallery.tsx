import { useState, useEffect } from "react";
import MasonryGallery from "./PixelTransition8";

import img1  from "@/assets/projects/proj_mirdif_villa.jpg";
import img2  from "@/assets/projects/proj_mudon_villa.jpg";
import img7  from "@/assets/projects/proj_waitrose.jpg";
import img8  from "@/assets/projects/proj_see_institute_parking.jpg";
import img9  from "@/assets/projects/proj_econ_station.jpg";
import img10 from "@/assets/projects/proj_nad_al_sheba.jpg";
import img12 from "@/assets/projects/proj_emirates_hills.jpg";
import img14 from "@/assets/projects/proj_camelicious.webp";
import img15 from "@/assets/projects/proj_dsi_jebel_ali.webp";
import img16 from "@/assets/projects/proj_ener_plastics.webp";
import img18 from "@/assets/projects/proj_see_institute.webp";
import img19 from "@/assets/projects/proj_thomsun.webp";
import projectMech from "@/assets/project-mechanical.jpg";
import projectCivil from "@/assets/project-civil.jpg";

// WhatsApp Images
import wa1 from "@/assets/projects/WhatsApp Image 2026-04-06 at 3.16.02 PM (1).jpeg";
import wa2 from "@/assets/projects/WhatsApp Image 2026-04-06 at 3.16.02 PM.jpeg";
import wa3 from "@/assets/projects/WhatsApp Image 2026-04-06 at 3.16.03 PM (1).jpeg";
import wa4 from "@/assets/projects/WhatsApp Image 2026-04-06 at 3.16.03 PM.jpeg";
import wa5 from "@/assets/projects/WhatsApp Image 2026-04-06 at 3.23.35 PM (1).jpeg";
import wa6 from "@/assets/projects/WhatsApp Image 2026-04-06 at 3.23.35 PM.jpeg";
import wa7 from "@/assets/projects/WhatsApp Image 2026-04-06 at 3.23.36 PM (1).jpeg";
import wa8 from "@/assets/projects/WhatsApp Image 2026-04-06 at 3.23.36 PM (2).jpeg";

const projectItems = [
  { image: img1,  title: "Mirdif Villa",               category: "Residential" },
  { image: img2,  title: "Mudon Villa",                 category: "Residential" },
  { image: wa1,   title: "Industrial Rooftop",          category: "Commercial" },
  { image: wa2,   title: "Solar Array",                 category: "Industrial" },
  { image: img7,  title: "Waitrose",                    category: "Retail" },
  { image: img8,  title: "SEE Institute Parking",       category: "Canopy" },
  { image: wa3,   title: "Factory Installation",        category: "Industrial" },
  { image: wa4,   title: "Rooftop Plant",               category: "Commercial" },
  { image: img9,  title: "Econ Station",                category: "Industrial" },
  { image: img10, title: "Nad Al Sheba",                category: "Residential" },
  { image: wa5,   title: "Commercial Solar",            category: "Commercial" },
  { image: wa6,   title: "Ground Mount System",         category: "Industrial" },
  { image: img12, title: "Emirates Hills",              category: "Luxury" },
  { image: wa7,   title: "Sustainable Office",          category: "Commercial" },
  { image: wa8,   title: "Power Station",               category: "Utility" },
  { image: img14, title: "Camelicious",                 category: "Industrial" },
  { image: img15, title: "DSI Jebel Ali",               category: "Industrial" },
  { image: img16, title: "Ener Plastics",               category: "Factory" },
  { image: img18, title: "SEE Institute",               category: "Education" },
  { image: img19, title: "Thomsun",                     category: "Commercial" },
  { image: projectMech, title: "Mechanical Excellence",  category: "Mechanical" },
  { image: projectCivil, title: "Civil Infrastructure",  category: "Civil" },
];

const useColumns = () => {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCols(2);
      else if (window.innerWidth < 1024) setCols(3);
      else setCols(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
};

const ProjectGallery = ({ hideHeader = false, excludeCategories = [] }: { hideHeader?: boolean, excludeCategories?: string[] }) => {
  const columns = useColumns();

  const filteredItems = projectItems.filter(item => 
    !excludeCategories.includes(item.category)
  );

  return (
    <section className="section-padding" style={{ background: "hsl(var(--gray-light))" }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        {!hideHeader && (
          <div className="text-center mb-12">
            <p className="section-title">OUR PORTFOLIO</p>
            <h2 className="section-heading">Featured Projects</h2>
            <div className="h-1 w-24 bg-gold mx-auto mt-4 rounded-full" />
          </div>
        )}

        <MasonryGallery items={filteredItems} columns={columns} />
      </div>
    </section>
  );
};

export default ProjectGallery;


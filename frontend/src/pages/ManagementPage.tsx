import PageBanner from "@/components/PageBanner";
import logo from "@/assets/logo.png";
import { ChevronRight } from "lucide-react";
import Lottie from "lottie-react";
import managementAnimation from "@/assets/animations/JSP Working.json";
import orgStructureImg from "@/assets/organization_structure.png";

const ManagementPage = () => {
  return (
    <>
      <PageBanner title="Management" breadcrumb="Organisation Structure" />

      <section className="section-padding relative bg-gradient-to-br from-violet-50 via-purple-50/80 to-fuchsia-50/80 overflow-hidden">
        {/* Violet Ambient Orbs */}
        <div className="absolute top-[-20%] left-[-10%] -z-10 w-[1000px] h-[1000px] bg-violet-400/25 rounded-[100%] blur-[140px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute top-[40%] right-[-10%] -z-10 w-[800px] h-[800px] bg-fuchsia-300/20 rounded-[100%] blur-[130px] pointer-events-none mix-blend-multiply"></div>
        <div className="absolute bottom-[-10%] left-[20%] -z-10 w-[900px] h-[900px] bg-purple-400/20 rounded-[100%] blur-[120px] pointer-events-none mix-blend-multiply"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="section-title">EXCELLENCE IN GOVERNANCE</p>
            <h2 className="section-heading">Our Organization Structure</h2>
            <div className="h-1 w-24 bg-gold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="w-full max-w-6xl mx-auto flex justify-center items-center p-2 sm:p-6 lg:p-10 bg-white shadow-2xl border-4 border-white rounded-[2rem] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden group mix-blend-luminosity hover:mix-blend-normal">
            <img 
              src={orgStructureImg} 
              alt="Organization Structure" 
              className="w-full h-auto object-contain max-h-[85vh] group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

          <div className="mt-20 flex flex-col items-center">
            <Lottie animationData={managementAnimation} loop={true} className="w-full max-w-3xl h-auto mb-8 animate-fade-in drop-shadow-sm" />
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 flex items-center gap-6 max-w-2xl">
              <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                <img src={logo} alt="Metallica Logo" className="h-10 w-auto" />
              </div>
              <div>
                <h4 className="font-heading font-bold navy-text text-lg">Metallica General Trading & Contracting</h4>
                <p className="text-slate-500 text-sm font-body leading-relaxed">
                  Our transparent and efficient organizational structure ensures seamless communication across all departments, enabling us to deliver excellence in every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManagementPage;

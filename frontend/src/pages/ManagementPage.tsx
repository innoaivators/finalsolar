import PageBanner from "@/components/PageBanner";
import logo from "@/assets/logo.png";
import { User, Users, Briefcase, FileText, ChevronRight, Settings, Layers, LucideIcon } from "lucide-react";
import Lottie from "lottie-react";
import managementAnimation from "@/assets/animations/JSP Working.json";

interface OrgNodeProps {
  label: string;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'accent' | 'staff' | 'hr' | 'accounts' | 'ops' | 'projects' | 'marketing';
  subNodes?: string[];
  className?: string;
}

const OrgNode = ({ label, icon: Icon, variant = 'secondary', subNodes, className = "" }: OrgNodeProps) => {
  const variants = {
    primary: "bg-gradient-to-br from-navy to-slate-800 text-white border-none shadow-xl",
    secondary: "bg-white border-slate-200 text-navy shadow-md",
    accent: "bg-gradient-to-br from-amber-400 to-gold text-navy font-bold border-none shadow-lg",
    staff: "bg-slate-100 text-slate-800 border-slate-200 italic font-medium",
    hr: "bg-gradient-to-br from-purple-500 to-indigo-600 text-white border-none shadow-lg",
    accounts: "bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-none shadow-lg",
    ops: "bg-gradient-to-br from-sky-500 to-blue-600 text-white border-none shadow-lg",
    projects: "bg-gradient-to-br from-orange-500 to-amber-600 text-white border-none shadow-lg",
    marketing: "bg-gradient-to-br from-rose-500 to-pink-600 text-white border-none shadow-lg",
  };

  const subVariants = {
    primary: "bg-slate-50 border-slate-200 text-slate-800",
    secondary: "bg-slate-50 border-slate-200 text-slate-800",
    accent: "bg-amber-50 border-amber-200 text-amber-900",
    staff: "bg-slate-50 border-slate-200 text-slate-700",
    hr: "bg-purple-50 border-purple-200 text-purple-900 font-semibold",
    accounts: "bg-emerald-50 border-emerald-200 text-emerald-900 font-semibold",
    ops: "bg-sky-50 border-sky-200 text-sky-900 font-semibold",
    projects: "bg-orange-50 border-orange-200 text-orange-900 font-semibold",
    marketing: "bg-rose-50 border-rose-200 text-rose-900 font-semibold",
  };

  return (
    <div className={`flex flex-col items-center transition-all duration-300 ${className}`}>
      <div className={`
        w-64 h-14 rounded-xl border-2 font-heading text-sm text-center
        flex items-center justify-center gap-2 group transition-transform hover:-translate-y-1
        ${variants[variant]}
      `}>
        {Icon && <Icon size={16} className={(variant === 'accent' || variant === 'secondary') ? 'text-navy' : 'text-white'} />}
        <span className="truncate px-2">{label}</span>
      </div>

      {subNodes && subNodes.length > 0 && (
        <div className="flex flex-col items-center mt-4 space-y-4">
          <div className="w-px h-4 bg-slate-200"></div>
          {subNodes.map((sub, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className={`
                ${subVariants[variant]} border w-64 h-14 rounded-xl text-sm font-body 
                flex items-center justify-center text-center shadow-sm uppercase tracking-wider px-2
              `}>
                {sub}
              </div>
              {idx < subNodes.length - 1 && <div className="w-px h-2 bg-slate-200"></div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

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

          <div className="w-full mx-auto">
            <div className="flex flex-col items-center">

              {/* Top Hierarchy */}
              <OrgNode label="Chairman" variant="accent" icon={User} className="relative z-10" />
              <div className="w-px h-10 bg-slate-300"></div>

              {/* CEO Level */}
              <div className="relative flex flex-col items-center">
                <OrgNode label="Chief Executive Officer" variant="primary" icon={Briefcase} />

                {/* Secretary Staff Position */}
                <div className="absolute top-[40px] left-[105%] flex items-center">
                  <div className="w-12 h-px bg-slate-300"></div>
                  <div className="w-px h-12 bg-slate-300"></div>
                  <OrgNode label="SECRETARY" variant="staff" className="mt-6" />
                </div>
              </div>

              <div className="w-px h-8 bg-slate-300"></div>

              {/* General Manager Level */}
              <OrgNode label="General Manager" variant="primary" icon={Users} />

              <div className="w-px h-12 bg-slate-300"></div>

              {/* Horizontal Line Connecting Departments */}
              <div className="relative w-full">
                <div className="absolute top-0 left-[8%] right-[8%] h-px bg-slate-300"></div>

                <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 xl:gap-14 pt-10">
                  {/* HR & Admin */}
                  <OrgNode
                    label="HR & ADMIN"
                    icon={Users}
                    variant="hr"
                    subNodes={["Public Relations", "HR Assistant"]}
                  />

                  {/* Accounts */}
                  <OrgNode
                    label="ACCOUNTS"
                    icon={FileText}
                    variant="accounts"
                    subNodes={["Accounts Assistant"]}
                  />

                  {/* Operations */}
                  <OrgNode
                    label="OPERATIONS"
                    icon={Settings}
                    variant="ops"
                    subNodes={["Hospitality"]}
                  />

                  {/* Projects */}
                  <OrgNode
                    label="PROJECTS"
                    icon={Layers}
                    variant="projects"
                    subNodes={["Mechanical", "Civil"]}
                  />

                  {/* Marketing */}
                  <OrgNode
                    label="MARKETING"
                    icon={Users}
                    variant="marketing"
                  />
                </div>
              </div>

            </div>
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

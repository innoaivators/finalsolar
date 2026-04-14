import PageBanner from "@/components/PageBanner";
import projectMech from "@/assets/project-mechanical.jpg";
import mechValve from "@/assets/mechanical_valve.png";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/mine_worker.json";
import { Settings, ShieldCheck, Zap, Layers } from "lucide-react";

const MechanicalPage = () => {
  return (
    <>
      <PageBanner title="Mechanical Engineering" breadcrumb="Project" />

      <section className="section-padding bg-background overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="animate-fade-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-8 bg-gold rounded-full"></div>
                <h2 className="text-3xl md:text-5xl font-bold navy-text font-heading leading-tight italic">Engineering <span className="text-gold">Excellence</span></h2>
              </div>
              <p className="text-muted-foreground leading-relaxed font-body mb-6 text-lg">
                <strong className="navy-text text-xl">Metallica</strong> maintains a combined team of world-class engineers and a highly specialized workforce adept in handling large-scale mechanical infrastructure.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body mb-10 text-lg">
                From precision piping to complex E&I systems, our group delivers industrial reliability that empowers the Energy sector across Kuwait and the GCC.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mt-10">
                <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-gold/20 rounded-xl">
                    <Settings className="text-gold" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold navy-text text-lg mb-1">Piping & E&I</h4>
                    <p className="text-sm text-muted-foreground">Specialized mechanical and instrumentation solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                  <div className="p-3 bg-gold/20 rounded-xl">
                    <ShieldCheck className="text-gold" size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold navy-text text-lg mb-1">Safety First</h4>
                    <p className="text-sm text-muted-foreground">Uncompromising EHS standards for every site.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-right">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-slate-200 group h-[500px]">
                <img src={mechValve} alt="Mechanical Valve System" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <p className="text-white font-bold text-xl drop-shadow-lg">Industrial Valve Management</p>
                </div>
              </div>

              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-gold -z-10 rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-navy -z-10 rounded-full opacity-10 blur-[100px]"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Zap className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-bold navy-text mb-3">Pre-Commissioning</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Rigorous facility testing and engineering support to ensure operational readiness from day one.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <Layers className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-bold navy-text mb-3">Operations Support</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Continuous Oil & Gas facility maintenance and operational support for long-term reliability.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <ShieldCheck className="text-gold mb-4" size={32} />
              <h3 className="text-xl font-bold navy-text mb-3">Environmental Stewardship</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Monitored processes designed to minimize environmental hazards and maximize sustainability.</p>
            </div>
          </div>

          {/* Lottie Animation: Mine Worker - Moved to above bottom box as requested */}
          <div className="flex justify-center mb-16 animate-fade-up">
            <div className="w-full max-w-2xl bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 shadow-xl overflow-hidden relative group flex items-center justify-center min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gold/5 pointer-events-none"></div>
              <Lottie
                animationData={animationData}
                loop={true}
                className="w-full h-64 md:h-80 drop-shadow-2xl relative z-10"
              />
              <div className="absolute top-10 right-10 w-24 h-24 bg-gold/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-navy/5 rounded-full blur-[60px] animate-pulse delay-700"></div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-navy/60 z-10 flex items-center justify-center p-8">
              <div className="text-center max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-heading mb-4">Precision Oil & Gas Infrastructure</h3>
                <p className="text-white/80">Delivering world-class mechanical engineering services with a focus on safety, innovation, and technical excellence.</p>
              </div>
            </div>
            <img src={projectMech} alt="Industrial Facility" className="w-full h-80 object-cover" loading="lazy" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MechanicalPage;

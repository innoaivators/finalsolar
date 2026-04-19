import PageBanner from "@/components/PageBanner";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about.jpeg";

const AboutPage = () => {
  return (
    <>
      <PageBanner title="About Us" breadcrumb="Our Profile" />

      <section className="py-16 md:py-24 px-4 relative bg-gradient-to-br from-blue-50 via-cyan-50/80 to-teal-50/80 overflow-hidden">
        {/* High-Impact Cooling Ambient Orbs (Hidden on Mobile for Performance and Layout Neatness) */}
        <div className="absolute top-[-20%] right-[-10%] -z-10 w-[1000px] h-[1000px] bg-cyan-400/30 rounded-[100%] blur-[140px] pointer-events-none mix-blend-multiply hidden lg:block"></div>
        <div className="absolute bottom-[-10%] left-[-20%] -z-10 w-[900px] h-[900px] bg-blue-400/20 rounded-[100%] blur-[130px] pointer-events-none mix-blend-multiply hidden lg:block"></div>
        <div className="absolute top-[30%] left-[20%] -z-10 w-[800px] h-[800px] bg-teal-300/25 rounded-[100%] blur-[120px] pointer-events-none mix-blend-multiply hidden lg:block"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Profile Section with Statistics */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24 px-2 md:px-0">
            <div className="px-2 md:px-0 text-left lg:h-full lg:flex lg:flex-col lg:justify-center lg:-translate-y-10">
              <p className="section-title text-navy">ABOUT US</p>
              <h2 className="section-heading mb-6 lg:mb-10 text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-navy leading-tight">
                Powering a Sustainable <br className="hidden md:block" /> Tomorrow
              </h2>
              <div className="space-y-6 lg:space-y-14 text-muted-foreground leading-relaxed font-body text-base md:text-lg">
                <p>
                  <strong className="navy-text">City Solar</strong> is a recognized leader in sustainable energy solutions. 
                  With 10 years of experience, we have successfully completed over 2000 projects, 
                  totaling an impressive <span className="gold-text font-bold">80MWp</span> in installed capacity.
                </p>
                <p>
                  Our commitment to excellence has resulted in annual savings of 
                  <span className="navy-text font-bold"> AED 60 million</span> for our clients. 
                  We are proud to hold the Platinum ranking by DEWA, a testament to our unwavering commitment to quality.
                </p>
              </div>

              <div className="mt-12 lg:mt-28">
                <h3 className="text-2xl font-heading font-bold navy-text mb-6 uppercase tracking-wider border-l-4 border-gold pl-4">
                  SOLAR ENERGY SAVINGS
                </h3>
                <p className="text-muted-foreground mb-8 lg:mb-12 text-lg italic">Powering Your Home and Your Wallet</p>
                <div className="space-y-4 lg:space-y-8">
                  {[
                    "Disciplined Workmanship and Commitment to Timelines",
                    "Flexible Payment Terms and Finance Offers",
                    "Best-in-class Equipment and Warranties",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 sm:gap-4 group">
                      <div className="bg-gold/10 p-2 rounded-full group-hover:bg-gold/20 transition-colors shrink-0">
                        <CheckCircle size={20} className="text-gold shrink-0" />
                      </div>
                      <span className="text-sm sm:text-base font-heading font-semibold text-navy leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-5 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex flex-col gap-6 sm:gap-10">
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-cyan-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600 sm:w-[32px] sm:h-[32px]"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"/><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L13 15"/><path d="M14 6.5a2 2 0 1 0-4 0a2 2 0 0 0 4 0Z"/><path d="M18 2h-3a2 2 0 0 0-2 2v2"/><path d="M7 2h3a2 2 0 0 1 2 2v2"/></svg>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-heading font-extrabold navy-text">Up to 100%</h4>
                  <p className="text-muted-foreground font-body font-bold text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase">Financing Available</p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100"></div>

              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 sm:w-[32px] sm:h-[32px]"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10"/><path d="M7 12h10"/><path d="M7 17h10"/></svg>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-heading font-extrabold navy-text">Thousands</h4>
                  <p className="text-muted-foreground font-body font-bold text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase">Of Dirhams Saved</p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100"></div>

              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 sm:w-[32px] sm:h-[32px]"><path d="M12 21a9 9 0 1 0-9-9c0 1.48.35 2.89 1.08 4.16L3 21l4.84-1.08C9.11 20.65 10.52 21 12 21Z"/><path d="M9 13a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z"/><path d="m11.5 11-1.5 5h1a2 2 0 0 1 2 2"/></svg>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-heading font-extrabold navy-text">5 Star</h4>
                  <p className="text-muted-foreground font-body font-bold text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase">Customer Ratings</p>
                </div>
              </div>

              <div className="w-full h-px bg-slate-100"></div>

              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-600 sm:w-[32px] sm:h-[32px]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-heading font-extrabold navy-text">30 Years</h4>
                  <p className="text-muted-foreground font-body font-bold text-xs sm:text-sm tracking-wide sm:tracking-widest uppercase">Extended Warranty</p>
                </div>
              </div>

              {/* Image moved here - Below the 30 Years box */}
              <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white/50 mt-4 group">
                <img src={aboutImg} alt="City Solar Energy" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="mb-16">
            <p className="section-title text-center">ABOUT METALLICA</p>
            <h2 className="section-heading text-center mb-10 text-2xl md:text-4xl">Mission & Vision</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-white to-slate-50/80 p-6 md:p-9 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] border border-slate-100 hover:border-gold/30 border-t-4 border-t-gold transition-all duration-500 h-full relative overflow-hidden group text-center md:text-left">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <span className="font-heading font-bold gold-text">1</span>
                </div>
                <h3 className="font-heading font-bold text-lg navy-text mb-3">Our Mission</h3>
                <p className="navy-text text-sm font-body leading-relaxed">
                  METALLICA aims to be a company of recognition, empowered by introducing the finest in latest engineering techniques and using the highest standard of quality raw materials and at the same time offering competitive prices in an evolving marketplace of oil and gas with a team of skilled and committed manpower.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-slate-50/80 p-6 md:p-9 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] border border-slate-100 hover:border-gold/30 border-t-4 border-t-gold transition-all duration-500 h-full relative overflow-hidden group text-center md:text-left">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <span className="font-heading font-bold gold-text">2</span>
                </div>
                <h3 className="font-heading font-bold text-lg navy-text mb-3">Our Vision</h3>
                <p className="navy-text text-sm font-body leading-relaxed">
                  To continuously improve our processes and grow to provide professional excellence in all spheres of construction, oil & gas and trading sectors. Multi skilled and socially enlightened, the versatile role-based work force enriched through professional investment, workforce is excelling in a multi win situation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-white to-slate-50/80 p-6 md:p-9 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] border border-slate-100 hover:border-gold/30 border-t-4 border-t-gold transition-all duration-500 h-full relative overflow-hidden group text-center md:text-left">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <span className="font-heading font-bold gold-text">3</span>
                </div>
                <h3 className="font-heading font-bold text-lg navy-text mb-3">Core Values</h3>
                <p className="navy-text text-sm font-body leading-relaxed mb-3">
                  Overall excellence in the respect for doing best in corporate responsibility and social sustainability that forms the cornerstone of the following entities as stated in priority:
                </p>
                <ul className="text-sm navy-text font-body space-y-1 inline-block text-left">
                  <li>• Our Valued Clients</li>
                  <li>• Our People</li>
                  <li>• Our Partners, Suppliers and Business Functions</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-white to-slate-50/80 p-6 md:p-9 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.15)] border border-slate-100 hover:border-gold/30 border-t-4 border-t-gold transition-all duration-500 h-full relative overflow-hidden group text-center md:text-left">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <span className="font-heading font-bold gold-text">4</span>
                </div>
                <h3 className="font-heading font-bold text-lg navy-text mb-3">QHSE Policy</h3>
                <p className="navy-text text-sm font-body leading-relaxed">
                  METALLICA is committed to achieving a culture of health and safety, systems and processes to identify, address and alleviate all risks in the areas of quality, safety, wellbeing and environmental management by delivering best in class products and services to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;

import { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Globe, MessageSquare, Loader2, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Reduced speed for cinematic feel
    }
  }, []);

  const [showMethodDialog, setShowMethodDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMethodDialog(true);
  };

  const handleWhatsApp = () => {
    const text = `Hello, I have a new inquiry:\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(`https://wa.me/+96598988281?text=${encodeURIComponent(text)}`, '_blank');
    setShowMethodDialog(false);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const handleEmail = async () => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitStatus('success');
        setTimeout(() => {
          setShowMethodDialog(false);
          setSubmitStatus('idle');
          setForm({ name: "", email: "", phone: "", message: "" });
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden flex items-center justify-center min-h-[700px]">
      {/* Background Video Wrapper */}
      <div className="absolute inset-0 w-full h-full -z-10 overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/video/hero_vedio_1080_new.mp4" type="video/mp4" media="(min-width:1200px)" />
          <source src="/video/hero_vedio_720_new.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Simple Semi-transparent Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16 px-4">
          <p className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-3">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6">Contact Us</h2>
          <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 items-start ${visible ? "animate-fade-up" : "opacity-0"}`}>
          {/* Individual Contact Info Cards */}
          <div className="space-y-6">
            <div className="p-8 bg-slate-950/40 backdrop-blur-xl rounded-3xl border border-gold/20 shadow-xl flex gap-6 hover:bg-slate-900/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gold/20 flex-shrink-0 border border-gold/30 group-hover:scale-110 transition-transform">
                <MapPin className="text-gold" size={26} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-2">Office Address</h4>
                <p className="text-slate-300 font-body text-sm leading-relaxed">
                  Office No: 10, Floor: 3, Building No: 1,<br />Block No: 7, Fahaheel, Kuwait
                </p>
              </div>
            </div>

            <div className="p-8 bg-slate-950/40 backdrop-blur-xl rounded-3xl border border-gold/20 shadow-xl flex gap-6 hover:bg-slate-900/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gold/20 flex-shrink-0 border border-gold/30 group-hover:scale-110 transition-transform">
                <Phone className="text-gold" size={26} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-2">Phone Numbers</h4>
                <div className="text-slate-300 font-body text-sm space-y-1">
                  <span className="block">+965 9898 8281</span>
                  <span className="block">+965 6002 6630</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-950/40 backdrop-blur-xl rounded-3xl border border-gold/20 shadow-xl flex gap-6 hover:bg-slate-900/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gold/20 flex-shrink-0 border border-gold/30 group-hover:scale-110 transition-transform">
                <Mail className="text-gold" size={26} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-2">Email Addresses</h4>
                <div className="flex flex-col gap-2">
                  <a href="mailto:info@metallicakw.com" className="text-slate-300 font-body text-sm hover:text-gold transition-colors">info@metallicakw.com</a>
                  <a href="mailto:Info@metallicagcc.com" className="text-slate-300 font-body text-sm hover:text-gold transition-colors">Info@metallicagcc.com</a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-950/40 backdrop-blur-xl rounded-3xl border border-gold/20 shadow-xl flex gap-6 hover:bg-slate-900/50 transition-all group">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gold/20 flex-shrink-0 border border-gold/30 group-hover:scale-110 transition-transform">
                <Globe className="text-gold" size={26} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-lg mb-2">Websites</h4>
                <div className="flex flex-col gap-2">
                  <a href="https://www.metallicakw.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 font-body text-sm hover:text-gold transition-colors">www.metallicakw.com</a>
                  <a href="https://www.metallicagcc.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 font-body text-sm hover:text-gold transition-colors">www.metallicagcc.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-100 h-fit">
            <h3 className="text-2xl font-heading font-bold navy-text mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all"
              />
              <textarea
                placeholder="Your Message..."
                rows={4}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-4 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 transition-all resize-none"
              />
              <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-navy to-slate-800 text-white font-heading font-bold hover:shadow-lg transition-all active:scale-[0.98]">
                Submit inquiry
              </button>
            </form>
          </div>
        </div>
      </div>

      <Dialog open={showMethodDialog} onOpenChange={setShowMethodDialog}>
        <DialogContent className="sm:max-w-[425px] bg-white rounded-3xl border-gold/20">
          {submitStatus === 'success' ? (
            <div className="py-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="text-green-500" size={48} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
              <p className="text-navy/60 mb-8">
                Thank you for reaching out. Our team will get back to you shortly.
              </p>
              <button 
                onClick={() => setShowMethodDialog(false)}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              <DialogHeader className="items-center">
                <DialogTitle className="text-2xl font-bold text-navy">Send Options</DialogTitle>
                <DialogDescription className="text-center text-navy/60">
                  How would you like to send this inquiry?
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4 py-6">
                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100 text-center">
                    Failed to send email. Please try again or use WhatsApp.
                  </div>
                )}
                <button
                  onClick={handleWhatsApp}
                  disabled={isSubmitting}
                  className="relative overflow-hidden flex justify-start items-center gap-5 p-5 rounded-2xl border border-green-200/50 bg-gradient-to-br from-green-50/50 to-emerald-50/50 hover:from-green-100 hover:to-emerald-100 transition-all duration-500 group disabled:opacity-50 shadow-[0_8px_30px_rgb(34,197,94,0.12)] hover:shadow-[0_8px_30px_rgb(34,197,94,0.25)]"
                >
                  <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-6">
                    <FaWhatsapp size={120} />
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-green-500/30 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 z-10 shrink-0 border border-white/20">
                    <FaWhatsapp size={32} />
                  </div>
                  <div className="flex-1 text-left z-10">
                    <h4 className="font-heading font-bold text-navy text-xl mb-1 group-hover:text-[#128C7E] transition-colors">WhatsApp</h4>
                    <p className="text-sm text-navy/60 font-body">Send pre-filled message instantly</p>
                  </div>
                </button>

                <button
                  onClick={handleEmail}
                  disabled={isSubmitting}
                  className="relative overflow-hidden flex justify-start items-center gap-5 p-5 rounded-2xl border border-blue-200/50 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 hover:from-blue-100/80 hover:to-indigo-100/80 transition-all duration-500 group disabled:opacity-50 shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.25)]"
                >
                  <div className="absolute -right-4 -top-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 group-hover:rotate-6">
                    <SiGmail size={120} />
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#EA4335] to-[#C5221F] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-red-500/30 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 z-10 shrink-0 border border-white/20">
                    {isSubmitting ? <Loader2 className="animate-spin" size={28} /> : <SiGmail size={28} />}
                  </div>
                  <div className="flex-1 text-left z-10">
                    <h4 className="font-heading font-bold text-navy text-xl mb-1 group-hover:text-[#C5221F] transition-colors">Email System</h4>
                    <p className="text-sm text-navy/60 font-body">Send securely to our inbox</p>
                  </div>
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ContactSection;

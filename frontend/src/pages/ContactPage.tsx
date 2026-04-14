import PageBanner from "@/components/PageBanner";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <>
      <ContactSection />
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100">
            <iframe
              src="https://maps.google.com/maps?q=Mekka%20St,%20Fahaheel,%20Kuwait&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Metallica Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;

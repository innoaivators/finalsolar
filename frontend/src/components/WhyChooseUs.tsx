import { useEffect, useRef, useState } from "react";
import { Shield, Award, Wrench, Users } from "lucide-react";

const features = [
  { icon: Wrench, title: "Engineering Expertise", desc: "Expert team of engineers with rich prior experience in the region." },
  { icon: Shield, title: "Quality Assurance", desc: "Committed to delivering the highest quality standards in every project." },
  { icon: Award, title: "Modern Equipment", desc: "State-of-the-art equipment and technology for optimal results." },
  { icon: Users, title: "Customer Satisfaction", desc: "Customer-focused solutions ensuring complete satisfaction." },
];

const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding navy-bg">
      <div className="container mx-auto" ref={ref}>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3 gold-text">WHY CHOOSE US</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-heading text-primary-foreground">
            Why We Are The Best In Construction
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`text-center p-8 rounded-lg border border-primary-foreground/10 hover:border-gold/50 transition-all duration-300 group ${visible ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full flex items-center justify-center bg-gold/10 group-hover:bg-gold/20 transition-colors">
                  <Icon size={30} className="gold-text" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary-foreground mb-2">{feat.title}</h3>
                <p className="text-primary-foreground/70 text-sm font-body">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

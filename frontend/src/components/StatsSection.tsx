import { useEffect, useRef, useState } from "react";
import { Briefcase, Trophy, Clock, Smile } from "lucide-react";
import statsBg from "@/assets/stats-bg.jpg";

const stats = [
  { icon: Briefcase, value: 43, label: "Projects Completed" },
  { icon: Trophy, value: 53, label: "Awards" },
  { icon: Clock, value: 10, label: "Years of Experience" },
  { icon: Smile, value: 100, label: "Happy Clients", suffix: "+" },
];

const useCountUp = (target: number, active: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
};

const StatItem = ({ icon: Icon, value, label, suffix = "", active, delay }: {
  icon: typeof Briefcase; value: number; label: string; suffix?: string; active: boolean; delay: number;
}) => {
  const count = useCountUp(value, active);
  return (
    <div
      className={`text-center ${active ? "animate-fade-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <Icon size={40} className="mx-auto mb-4 gold-text" />
      <div className="text-3xl sm:text-5xl font-extrabold navy-text font-heading mb-2">
        {count}{suffix}
      </div>
      <p className="text-navy/70 font-body text-sm uppercase tracking-wider">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 bg-amber-50">
      <div className="relative z-10 container mx-auto px-4" ref={ref}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} active={visible} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

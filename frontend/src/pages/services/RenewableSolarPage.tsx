import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/renewable_solar_daytime.png";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/solar_green_energy.json";
import { Link } from "react-router-dom";
import onGridImg from "@/assets/product_on_grid.png";
import pumpImg from "@/assets/pump_60hp_unbranded.png";
import streetLightImg from "@/assets/street_light_all_in_one_new.png";
import heaterImg from "@/assets/product_heater_kamal.png";
import batteryImg from "@/assets/product_battery_microtek.png";
import ProjectGallery from "@/components/ProjectGallery";

import { Shield, Zap, Sun, Battery, Lightbulb, Droplets } from "lucide-react";

const RenewableSolarPage = () => (
    <ServicePageTemplate
        title="Renewable Solar Energy"
        image=""
        backgroundImg={img}
        layout="side-by-side"
        sectionStyle={{
            background: 'transparent',
        }}
        description="We provide comprehensive and clean solar energy solutions for a brighter future. Our high-performance solar photovoltaic systems are tailored to reduce your operational costs while promoting environmental stewardship."
        details={[
            "Expert installation of On-Grid and Off-Grid power plants",
            "Solar water pumping solutions for agricultural and industrial use",
            "Energy-efficient solar street lighting systems",
            "Industrial and residential solar water heaters",
            "High-capacity solar battery and storage solutions",
        ]}
        imageCompanion={
            <div className="w-full h-full flex items-center justify-center p-4 relative">
                <div className="relative z-20 w-full h-full flex items-center justify-center">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                        className="w-full h-full max-w-2xl"
                        style={{
                            filter: 'saturate(1.2) brightness(1.05)',
                        }}
                    />
                </div>
            </div>
        }
    >
        <div className="mt-20">
            <h3 className="text-3xl font-heading font-bold text-navy mb-12 text-center">Solar Energy Products</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Solar Power Plants */}
                <Link to="/services/solar-power-plants" className="block group">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gold/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                        <div className="h-40 w-full mb-6 overflow-hidden rounded-2xl bg-slate-100">
                            <img src={onGridImg} alt="Solar Power Plant" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6">
                            <Zap className="text-gold" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-4">Solar Power Plants</h4>
                        <ul className="space-y-3 text-muted-foreground font-body flex-1">
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> Solar Park
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> Solar Hybrid
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> Off Grid Solar Power Plant
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> On Grid Solar Power Plant
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center gap-2 text-gold font-bold text-sm">
                            View Details <span>→</span>
                        </div>
                    </div>
                </Link>

                {/* Solar Pumps */}
                <Link to="/services/solar-pumps" className="block group">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gold/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                        <div className="h-40 w-full mb-6 overflow-hidden rounded-2xl bg-slate-100">
                            <img src={pumpImg} alt="Solar Pump" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Droplets className="text-blue-500" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-4">Solar Pumps</h4>
                        <ul className="space-y-3 text-muted-foreground font-body flex-1">
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> 60 HP Solar Pump
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> 50 HP Solar Pump
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> 30 HP Solar Pump
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center gap-2 text-blue-500 font-bold text-sm">
                            View Details <span>→</span>
                        </div>
                    </div>
                </Link>

                {/* Solar Street Lights */}
                <Link to="/services/solar-street-lights" className="block group">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gold/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                        <div className="h-40 w-full mb-6 overflow-hidden rounded-2xl bg-slate-100">
                            <img src={streetLightImg} alt="Solar Street Light" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Lightbulb className="text-amber-500" size={28} />
                        </div>
                        <h4 className="text-xl font-bold text-navy mb-4">Solar Street Lights</h4>
                        <ul className="space-y-3 text-muted-foreground font-body flex-1">
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> High Mass Street Lights
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> All-in-One Street Lights
                            </li>
                            <li className="flex items-center gap-2">
                                <Sun size={16} className="text-gold" /> Semi-Integrated Lights
                            </li>
                        </ul>
                        <div className="mt-6 flex items-center gap-2 text-amber-500 font-bold text-sm">
                            View Details <span>→</span>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
        <div className="mt-20">
            <ProjectGallery />
        </div>
    </ServicePageTemplate>
);

export default RenewableSolarPage;

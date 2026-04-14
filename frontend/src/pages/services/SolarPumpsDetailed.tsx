import React from "react";
import PageBanner from "@/components/PageBanner";
import EnquiryDialog from "@/components/EnquiryDialog";
import { Droplets, Shield, CheckCircle2, Zap } from "lucide-react";

import pump60hp from "@/assets/pump_60hp_unbranded.png";
import pump50hp from "@/assets/pump_50hp_unbranded.png";
import pump30hp from "@/assets/pump_30hp_unbranded.png";

const SolarPumpsDetailed = () => {
    const products = [
        {
            title: "60 HP Solar Pump",
            image: pump60hp,
            features: [
                "ideal choice",
                "traditional electricity",
                "reduces reliance",
                "remote areas",
                "robust motor",
                "largescale irrigation",
                "agriculture industrial",
                "ecofriendly solution",
                "offgrid water management",
                "ensures smooth operation",
                "highefficiency solar panels",
                "consistent water supply",
                "highvolume water pumping"
            ],
            description: "A 60HP solar pump is a robust industrial-grade solution for extremely high-volume water pumping needs. It efficiently utilizes solar power to provide a consistent water supply for large-scale agriculture, heavy industrial use, and regional irrigation. With a high-power motor and optimized solar array integration, it ensures reliable operation even for the most demanding water management tasks. The system is designed for longevity and sustainability, significantly lowering operational costs."
        },
        {
            title: "50 HP Solar Pump",
            image: pump50hp,
            features: [
                "remote areas",
                "corrosionresistant components",
                "durable motor",
                "solar energy",
                "sustainable water supply",
                "efficient water flow",
                "maximizes power utilization",
                "advanced mppt technology",
                "rural applications designed"
            ],
            description: "A 50HP solar pump is a high-performance, industrial water pumping system engineered for massive flow rates and maximum reliability. It is ideal for large-scale irrigation, civic water projects, and large industrial facilities. Designed with advanced high-power MPPT technology, it maximizes power utilization from large solar arrays. With a sustainable design and precision engineering, it provides a cost-effective alternative to grid-dependent high-power pumping."
        },
        {
            title: "30 HP Solar Pump",
            image: pump30hp,
            features: [
                "sustainability benefits",
                "minimal maintenance",
                "durable motor",
                "solar energy",
                "highquality solar panels",
                "low operational costs",
                "pumps work efficiently",
                "ensures reliable performance"
            ],
            description: "A 30HP solar pump is a powerful and versatile water pumping solution designed for mid-to-large scale agricultural and commercial applications. It bridges the gap between residential systems and heavy industrial plants, offering high efficiency for livestock projects, large farms, and irrigation networks. Equipped with professional-grade solar controllers and a durable heavy-duty motor, it ensures reliable performance with low maintenance and zero energy costs."
        }
    ];

    return (
        <>
            <PageBanner title="Solar Water Pumps" breadcrumb="Services / Solar Energy / Water Pumps" />

            <section className="py-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-4 md:px-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="section-heading mb-6">Sustainable Water Solutions</h2>
                        <p className="text-muted-foreground text-lg font-body">
                            Harness the power of the sun to solve your water management challenges.
                            Our high-efficiency solar pumps provide zero-cost pumping solutions for agriculture, industry, and home use.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {products.map((product, idx) => (
                            <div key={idx} className="flex flex-col bg-white rounded-[40px] overflow-hidden shadow-2xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-500 group">
                                <div className="h-[350px] overflow-hidden relative bg-blue-50/30 p-8 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Droplets className="text-blue-500" size={24} />
                                            <h3 className="text-xl font-bold text-navy">{product.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm leading-relaxed font-body">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-8 h-full flex flex-col justify-start">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-navy/40">Specifications</h4>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3 text-navy/80 font-body">
                                                    <CheckCircle2 className="text-blue-500 mt-1 flex-shrink-0" size={16} />
                                                    <span className="text-xs">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-navy/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-2">
                                            <Shield className="text-gold" size={18} />
                                            <span className="text-navy font-medium text-xs">Warranty Included</span>
                                        </div>
                                        <EnquiryDialog 
                                            productName={product.title} 
                                            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-blue-500/20"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SolarPumpsDetailed;

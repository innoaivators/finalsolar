import React from "react";
import PageBanner from "@/components/PageBanner";
import EnquiryDialog from "@/components/EnquiryDialog";
import { Battery, Shield, CheckCircle2, Zap } from "lucide-react";

import microtekImg from "@/assets/product_battery_microtek.png";
import luminousImg from "@/assets/product_battery_luminous.png";

const SolarBatteriesDetailed = () => {
    const products = [
        {
            title: "Microtek Solar Battery",

            image: microtekImg,
            features: [
                "provide reliable",
                "faster charging",
                "long backup",
                "ecofriendly power storage",
                "hightemperature resilience ideal",
                "ensure optimal performance",
                "tubular plate design",
                "extended lifespan built",
                "solar power systems"
            ],
            description: "Microtek solar batteries are efficient and durable energy storage solutions for solar power systems. They feature deep cycle technology for long backup and extended lifespan. Built with tubular plate design, they ensure optimal performance and faster charging. These batteries require low maintenance and are designed for high-temperature resilience. Ideal for homes and businesses, they provide reliable and eco-friendly power storage."
        },
        {
            title: "Luminous Solar Battery",

            image: luminousImg,
            features: [
                "support sustainable",
                "low maintenance",
                "longer life",
                "uninterrupted power supply",
                "deep cycle technology",
                "solar power systems"
            ],
            description: "Luminous solar batteries are high-performance energy storage solutions designed for solar power systems. They provide reliable backup power with deep cycle technology for longer life. These batteries are built with advanced tubular plate design, ensuring efficient charging and discharging. They are low maintenance, with minimal water topping requirements. Ideal for homes and businesses, they support sustainable and uninterrupted power supply."
        }
    ];

    return (
        <>
            <PageBanner title="Solar Batteries" breadcrumb="Services / Solar Energy / Batteries" />

            <section className="py-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-500/5 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-4 md:px-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="section-heading mb-6">Robust Energy Storage Solutions</h2>
                        <p className="text-muted-foreground text-lg font-body">
                            Take control of your energy with our high-capacity solar batteries. Built for
                            durability and high performance, they are the backbone of any reliable solar system.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {products.map((product, idx) => (
                            <div key={idx} className="flex flex-col bg-white rounded-[40px] overflow-hidden shadow-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-500 group">
                                <div className="h-[350px] md:h-[450px] overflow-hidden relative bg-green-50/30 p-8 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-8 md:p-12 flex flex-col flex-grow">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Battery className="text-green-500" size={24} />
                                            <h3 className="text-2xl font-bold text-navy">{product.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed font-body">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-10 h-full flex flex-col justify-start">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-navy/40">Specifications</h4>
                                        <ul className="space-y-3">
                                            {product.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3 text-navy/80 font-body">
                                                    <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" size={18} />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-navy/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-2">
                                            <Shield className="text-gold" size={18} />
                                            <span className="text-navy font-medium text-sm">Long-term Warranty</span>
                                        </div>
                                        <EnquiryDialog 
                                            productName={product.title} 
                                            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-green-500/20"
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

export default SolarBatteriesDetailed;

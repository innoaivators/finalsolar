import React from "react";
import PageBanner from "@/components/PageBanner";
import EnquiryDialog from "@/components/EnquiryDialog";
import { Lightbulb, Shield, CheckCircle2, Zap } from "lucide-react";

import highMassImg from "@/assets/street_light_high_mast_new.png";
import allInOneImg from "@/assets/street_light_all_in_one_new.png";
import semiIntegratedImg from "@/assets/street_light_semi_integrated_new.png";

const SolarStreetLightsDetailed = () => {
    const products = [
        {
            title: "Solar High Mass Street Lights",

            image: highMassImg,
            features: [
                "efficient lighting",
                "ensure longlasting",
                "public spaces",
                "powerful illumination",
                "provide uniform",
                "tall poles",
                "environmental impact",
                "large areas"
            ],
            description: "Solar high mast street lights are advanced outdoor lighting solutions designed for large areas. They operate entirely on solar power, reducing electricity costs and environmental impact. With high-lumen LED fixtures mounted on tall poles, they provide uniform and powerful illumination. These lights feature automatic operation, high-capacity batteries, and durable, weather-resistant construction. Ideal for highways, parking lots, stadiums, and public spaces, they ensure long-lasting and efficient lighting."
        },
        {
            title: "All in One Solar Street Lights",

            image: allInOneImg,
            features: [
                "public spaces",
                "durable materials",
                "easy installation",
                "single unit",
                "streets highways parks",
                "environmental conditions ideal",
                "extended backup made",
                "ensure energy efficiency",
                "motion sensor technology",
                "automatic dusktodawn operation",
                "solar street lightsall"
            ],
            description: "All in one solar street lights are compact, self-sustaining outdoor lighting solutions. They integrate a solar panel, battery, LED light, and controller into a single unit for easy installation. With automatic dusk-to-dawn operation and motion sensor technology, they ensure energy efficiency and extended backup. Made from weatherproof and durable materials, they perform well in various environmental conditions. Ideal for streets, highways, parks, and public spaces, they provide reliable, eco-friendly illumination."
        },
        {
            title: "Semi Integrated Solar Street Lights",

            image: semiIntegratedImg,
            features: [
                "ecofriendly illumination",
                "provide reliable",
                "commercial spaces",
                "ensure durability",
                "weatherresistant materials",
                "single unit",
                "compact design",
                "streets pathways parks",
                "longlasting performance ideal",
                "enhanced efficiency built",
                "motion sensor technology",
                "led light integrated",
                "solar panel battery"
            ],
            description: "Semi Integrated solar street lights are energy-efficient outdoor lighting solutions. They feature a compact design with a solar panel, battery, and LED light integrated into a single unit. These lights offer automatic dusk-to-dawn operation with motion sensor technology for enhanced efficiency. Built with weather-resistant materials, they ensure durability and long-lasting performance. Ideal for streets, pathways, parks, and commercial spaces, they provide reliable and eco-friendly illumination."
        }
    ];

    return (
        <>
            <PageBanner title="Solar Street Lighting" breadcrumb="Services / Solar Energy / Street Lights" />

            <section className="py-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-400/5 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-4 md:px-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="section-heading mb-6">Smart Street Lighting Solutions</h2>
                        <p className="text-muted-foreground text-lg font-body">
                            Light up your surroundings with zero electricity costs. Our smart solar street lights
                            combine modern LED technology with high-efficiency energy storage for reliable performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {products.map((product, idx) => (
                            <div key={idx} className="flex flex-col bg-white rounded-[40px] overflow-hidden shadow-2xl border border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 group">
                                <div className="h-[350px] overflow-hidden relative bg-slate-50/50 p-8 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Lightbulb className="text-amber-500" size={24} />
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
                                                    <CheckCircle2 className="text-amber-500 mt-1 flex-shrink-0" size={16} />
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
                                            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 shadow-lg shadow-amber-500/20"
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

export default SolarStreetLightsDetailed;

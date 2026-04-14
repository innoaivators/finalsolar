import React from "react";
import PageBanner from "@/components/PageBanner";
import EnquiryDialog from "@/components/EnquiryDialog";
import { Zap, Shield, CheckCircle2 } from "lucide-react";

// Using the generated images
import offGridImg from "@/assets/product_off_grid.png";
import onGridImg from "@/assets/product_on_grid.png";
import solarParkImg from "@/assets/solar_park_industrial.png";
import solarHybridImg from "@/assets/solar_hybrid_unbranded.png";

const SolarPowerPlantDetailed = () => {
    const products = [
        {
            title: "Solar Park",
            image: solarParkImg,
            features: [
                "Utility-scale generation",
                "Thousands of modules",
                "Optimized energy harvest",
                "National grid support",
                "Low environmental impact",
                "Highly scalable",
                "Centralized monitoring",
                "Maximum efficiency",
                "Clean power for cities",
                "Sustainable future"
            ],
            description: "A utility-scale solar park is a large-scale photovoltaic power station designed to supply merchant power into the electricity grid. These parks consist of thousands of solar modules and multiple inverters, optimized for maximum energy harvest from vast areas. They are essential for national energy transition and provide clean power to city-scale populations."
        },
        {
            title: "Solar Hybrid System",
            image: solarHybridImg,
            features: [
                "Grid-connected storage",
                "Battery backup",
                "Energy security",
                "Optimized consumption",
                "Nighttime power supply",
                "Smart energy management",
                "Reduced grid dependence",
                "Power outage protection",
                "Flexible configuration",
                "High efficiency storage"
            ],
            description: "A Hybrid solar system combines the best of on-grid and off-grid worlds. It remains connected to the grid while also utilizing battery storage to save excess energy for nighttime or power outages. This system offers the highest level of energy security and flexibility, allowing you to optimize self-consumption and participate in grid stabilizing programs."
        },
        {
            title: "Off Grid Solar Power Plant",
            image: offGridImg,
            features: [
                "homes farms",
                "fossil fuels",
                "grid connectivity",
                "reliable solution",
                "remote areas",
                "electricity grid",
                "operates independently",
                "systems reduce dependence",
                "solar panels batteries",
                "selfsustaining energy system"
            ],
            description: "An Off grid solar power plant is a self-sustaining energy system that operates independently of the electricity grid. It uses solar panels, batteries, and an inverter to store and supply power, ensuring uninterrupted electricity. Ideal for remote areas, it provides a reliable solution where grid connectivity is unavailable. These systems reduce dependence on fossil fuels and offer long-term cost savings. Off-grid solar plants are perfect for homes, farms, and businesses seeking energy independence and sustainability."
        },
        {
            title: "On Grid Solar Power Plant",
            image: onGridImg,
            features: [
                "homes businesses",
                "earn credits",
                "operate efficiently",
                "low maintenance",
                "photovoltaic panels",
                "electricity grid",
                "economical energy solutions",
                "surplus power ideal",
                "require batteries making",
                "generates solar power"
            ],
            description: "An On grid solar power plant is a renewable energy system connected directly to the electricity grid. It generates solar power using photovoltaic panels and supplies excess energy back to the grid, reducing electricity bills. These systems do not require batteries, making them cost-effective and low maintenance. They operate efficiently with net metering, allowing users to earn credits for surplus power. Ideal for homes, businesses, and industries, on-grid solar plants promote sustainable and economical energy solutions."
        }
    ];

    return (
        <>
            <PageBanner title="Solar Power Plants" breadcrumb="Services / Solar Energy / Power Plants" />

            <section className="py-20 bg-background relative overflow-hidden">
                {/* Subtle background element */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-navy/5 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-4 md:px-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="section-heading mb-6">Explore Our Solar Power Systems</h2>
                        <p className="text-muted-foreground text-lg font-body">
                            Whether you're looking for complete energy independence or aiming to significantly reduce your utility costs,
                            our range of solar power plants offers the perfect solution for residential and commercial needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {products.map((product, idx) => (
                            <div key={idx} className="flex flex-col bg-white rounded-[40px] overflow-hidden shadow-2xl border border-gold/10 hover:border-gold/30 transition-all duration-500 group">
                                {/* Image Container */}
                                <div className="h-[350px] md:h-[450px] overflow-hidden relative bg-gold/5 p-8 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-12 flex flex-col flex-grow">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Zap className="text-gold" size={24} />
                                            <h3 className="text-2xl font-bold text-navy">{product.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed font-body">
                                            {product.description}
                                        </p>
                                    </div>

                                    <div className="space-y-4 mb-10 h-full flex flex-col justify-start">
                                        <h4 className="text-sm font-bold uppercase tracking-wider text-navy/40">Key Features</h4>
                                        <ul className="space-y-3">
                                            {product.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3 text-navy/80 font-body">
                                                    <CheckCircle2 className="text-gold mt-1 flex-shrink-0" size={18} />
                                                    <span className="text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto pt-8 border-t border-navy/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                                        <div className="flex items-center gap-2">
                                            <Shield className="text-gold" size={20} />
                                            <span className="text-navy font-medium text-sm">25-Year Warranty</span>
                                        </div>
                                        <EnquiryDialog productName={product.title} />
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

export default SolarPowerPlantDetailed;

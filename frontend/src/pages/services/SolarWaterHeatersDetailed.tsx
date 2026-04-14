import React from "react";
import PageBanner from "@/components/PageBanner";
import EnquiryDialog from "@/components/EnquiryDialog";
import { Thermometer, Shield, CheckCircle2, Zap } from "lucide-react";

import kamalImg from "@/assets/product_heater_kamal.png";
import supremeImg from "@/assets/product_heater_supreme.png";

const SolarWaterHeatersDetailed = () => {
    const products = [
        {
            title: "Kamal Solar Water Heater",

            image: kamalImg,
            features: [
                "durable materials",
                "effective heating",
                "hot water",
                "energyefficient solutions",
                "support sustainable living",
                "reduce electricity costs",
                "weather conditions ideal",
                "offer long life",
                "energy savings built"
            ],
            description: "Kamal Solar water heaters are reliable and energy-efficient solutions for hot water needs. They utilize high-quality solar thermal technology for effective heating and energy savings. Built with durable materials, they offer long life and resistance to corrosion. These heaters require minimal maintenance and perform well in various weather conditions. Ideal for residential and commercial use, they help reduce electricity costs and support sustainable living."
        },
        {
            title: "Supreme Solar Water Heater",

            image: supremeImg,
            features: [
                "work efficiently",
                "corrosion resistance",
                "glasslined tanks",
                "provide consistent",
                "hot water",
                "low sunlight condition",
                "ensure long life",
                "durable stainless steel",
                "costeffective heating built",
                "advanced solar technology",
                "highquality energyefficient solutions"
            ],
            description: "Supreme Solar water heaters are high-quality, energy-efficient solutions for hot water needs. They use advanced solar technology to provide consistent and cost-effective heating. Built with durable stainless steel or glass-lined tanks, they ensure long life and corrosion resistance. These heaters require minimal maintenance and work efficiently even in low sunlight condition"
        }
    ];

    return (
        <>
            <PageBanner title="Solar Water Heaters" breadcrumb="Services / Solar Energy / Water Heaters" />

            <section className="py-20 bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-500/5 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/5 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-4 md:px-10">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="section-heading mb-6">Efficient Water Heating Solutions</h2>
                        <p className="text-muted-foreground text-lg font-body">
                            Switch to a smarter way of heating water. Our solar water heaters are designed to
                            withstand various weather conditions while providing maximum efficiency and savings.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {products.map((product, idx) => (
                            <div key={idx} className="flex flex-col bg-white rounded-[40px] overflow-hidden shadow-2xl border border-orange-500/10 hover:border-orange-500/30 transition-all duration-500 group">
                                <div className="h-[350px] md:h-[450px] overflow-hidden relative bg-orange-50/30 p-8 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-8 md:p-12 flex flex-col flex-grow">
                                    <div className="mb-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <Thermometer className="text-orange-500" size={24} />
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
                                                    <CheckCircle2 className="text-orange-500 mt-1 flex-shrink-0" size={18} />
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
                                            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-2xl font-bold transition-all duration-300 shadow-lg shadow-orange-500/20"
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

export default SolarWaterHeatersDetailed;

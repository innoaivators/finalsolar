import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/service-logistics.jpg";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/logistics.json";

const LogisticsPage = () => (
  <ServicePageTemplate
    title="Logistics & Warehouse Management"
    image=""
    backgroundImg={img}
    layout="side-by-side"
    sectionStyle={{
      background: 'transparent',
    }}
    description="End-to-end logistics and warehouse management solutions for optimized supply chain operations. Our comprehensive warehousing services ensure efficient storage, inventory management, and distribution."
    details={[
      "Warehouse design and optimization",
      "Inventory management systems",
      "Distribution and fulfillment services",
      "Supply chain coordination",
      "Cold storage and specialized handling",
    ]}
    imageCompanion={
      <div className="w-full h-full flex items-center justify-center p-4 relative">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full relative z-0"
          style={{
            maxHeight: '100%',
            filter: 'hue-rotate(15deg) saturate(1.4) brightness(0.98)',
          }}
        />
      </div>
    }
  />
);

export default LogisticsPage;

import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/service-import.jpg";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/supply_chain_and_shipping.json";

const ImportExportPage = () => (
  <ServicePageTemplate
    title="Import and Export"
    image=""
    backgroundImg={img}
    layout="side-by-side"
    sectionStyle={{
      background: 'transparent',
    }}
    description="Our company facilitates trades of goods and commodities between domestic and foreign companies. We handle the complete process from sourcing to delivery, ensuring smooth international trade operations."
    details={[
      "International sourcing and procurement",
      "Customs clearance and documentation",
      "Quality inspection and compliance",
      "Logistics coordination for global shipments",
      "Trade facilitation between domestic and foreign markets",
    ]}
    imageCompanion={
      <div className="w-full h-full relative flex items-center justify-center p-4">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full drop-shadow-2xl"
          style={{
            maxHeight: '100%',
            filter: 'hue-rotate(150deg) saturate(1.5) contrast(1.1)'
          }}
        />
      </div>
    }
  />
);


export default ImportExportPage;

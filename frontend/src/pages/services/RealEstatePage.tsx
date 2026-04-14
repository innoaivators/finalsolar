import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/service-realestate.jpg";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/buildings.json";

const RealEstatePage = () => (
  <ServicePageTemplate
    title="Real Estate"
    image=""
    backgroundImg={img}
    layout="side-by-side"
    sectionStyle={{
      background: 'transparent',
    }}
    description="To be a recognized leader in the Real Estate Management industry in Kuwait while maintaining our authentic level of service founded on basic core values of integrity and partnership."
    details={[
      "Property management and maintenance",
      "Real estate development projects",
      "Commercial and residential leasing",
      "Property valuation and consultancy",
      "Investment advisory services",
    ]}
    imageCompanion={
      <div className="w-full h-full flex items-center justify-center p-4 relative">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full relative z-0"
          style={{
            maxHeight: '100%',
            filter: 'saturate(1.3) brightness(1.0)',
          }}
        />
      </div>
    }
  />
);

export default RealEstatePage;

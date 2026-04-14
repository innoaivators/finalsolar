import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/service-hospitality.jpg";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/avto-notification.json";

const HospitalityPage = () => (
  <ServicePageTemplate
    title="Hospitality Services"
    image=""
    backgroundImg={img}
    layout="side-by-side"
    sectionStyle={{
      background: 'transparent',
    }}
    description='"The Focus of Entertaining is impressing Others, The Focus of True Hospitality is Serving Others." We provide comprehensive hospitality solutions that ensure exceptional guest experiences and service excellence.'
    details={[
      "Catering and food service management",
      "Event planning and coordination",
      "Facility management for hospitality venues",
      "Staff training and service optimization",
      "Quality assurance and guest satisfaction",
    ]}
    imageCompanion={
      <div className="w-full h-full flex items-center justify-center p-4 relative">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full relative z-0"
          style={{
            maxHeight: '100%',
          }}
        />
      </div>
    }
  />
);

export default HospitalityPage;


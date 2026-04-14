import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/service-rental.jpg";
import Lottie from "lottie-react";
import animationData from "@/assets/animations/delivery.json";

const RentalLeasingPage = () => (
  <ServicePageTemplate
    title="Rental, Leasing & Transportation"
    image=""
    backgroundImg={img}
    layout="side-by-side"
    sectionStyle={{
      background: 'transparent',
    }}
    description="Providing comprehensive rental, leasing, and transportation solutions for industrial needs. By dealing with data, we select tools that help you automate time-consuming processes and optimize your fleet operations."
    details={[
      "Heavy equipment rental and leasing",
      "Fleet management solutions",
      "Transportation logistics for industrial projects",
      "Long-term and short-term leasing options",
      "Maintenance and support services",
    ]}
    imageCompanion={
      <div className="w-full h-full flex items-center justify-center p-4 relative">
        <Lottie
          animationData={animationData}
          loop={true}
          className="w-full h-full relative z-0"
          style={{
            maxHeight: '100%',
            filter: 'saturate(1.3) brightness(0.98)',
          }}
        />
      </div>
    }
  />
);

export default RentalLeasingPage;

import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/product-dognjoy.jpg";

const DogNJoyPage = () => (
  <ServicePageTemplate
    title="Dog N Joy"
    image={img}
    backgroundImg={img}
    layout="side-by-side"
    sectionStyle={{
      background: 'transparent',
    }}
    description="Dog n Joy Pet Food — Premium quality dog food products formulated with essential nutrients for dogs of all sizes and breeds. Providing the best nutrition to keep your canine companions active and thriving."
    details={[
      "Balanced diet for dogs of all ages and sizes",
      "High-quality protein sources",
      "Essential vitamins and minerals",
      "Promotes healthy growth and energy",
    ]}
  />
);

export default DogNJoyPage;

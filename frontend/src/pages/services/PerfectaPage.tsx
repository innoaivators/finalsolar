import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/product-perfecta.jpg";

const PerfectaPage = () => (
  <ServicePageTemplate
    title="Perfecta"
    image={img}
    backgroundImg={img}
    layout="side-by-side"
    sectionStyle={{
      background: 'transparent',
    }}
    description="Perfecta Pet Food — A premium pet food brand offering superior nutrition and taste for pets. Our Perfecta range is designed to meet the highest standards of quality and nutritional value."
    details={[
      "Premium formulation for optimal pet health",
      "High-quality natural ingredients",
      "Multiple product lines for different pet needs",
      "Trusted by pet owners across the region",
    ]}
  />
);

export default PerfectaPage;

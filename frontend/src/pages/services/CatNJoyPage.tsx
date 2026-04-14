import ServicePageTemplate from "@/components/ServicePageTemplate";
import img from "@/assets/pet_food_bg.png";

const CatNJoyPage = () => (
  <ServicePageTemplate
    title="Cat N Joy"
    image={img}
    backgroundImg={img}
    layout="side-by-side"
    sectionStyle={{
      background: 'transparent',
    }}
    description="Cat n Joy Pet Food — Premium quality cat food products designed to provide balanced nutrition for cats of all ages. Our products are crafted with the finest ingredients to keep your feline friends healthy and happy."
    details={[
      "Complete and balanced nutrition for all cat breeds",
      "Premium quality ingredients",
      "Available in multiple flavors and formulas",
      "Supports healthy coat, bones, and digestion",
    ]}
  />
);

export default CatNJoyPage;

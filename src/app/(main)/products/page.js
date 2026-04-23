import Products from "@/components/sections/Products";
import Contact from "@/components/sections/Contact";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Our Products",
  description: "Explore our premium ginger products, including fresh rhizomes, dried split ginger, and ginger powder.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero 
        label="Our Products"
        title="Premium Ginger Solutions"
        description="Agricultural products crafted for global commerce, from raw rhizomes to advanced extracts."
      />
      <Products />
      <Contact />
    </>
  );
}

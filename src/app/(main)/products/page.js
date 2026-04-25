import PageHero from "@/components/PageHero";
import Products from "@/components/sections/Products";
import { absoluteUrl, routeMetadata } from "@/config/siteConfig";

export const metadata = {
  title: routeMetadata["/products"].title,
  description: routeMetadata["/products"].description,
  alternates: {
    canonical: absoluteUrl("/products"),
  },
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        label="Our Product Range"
        title="Ginger products built for procurement teams"
        description="Each product is presented with clear specifications, use cases, and traceability so you can source with confidence."
      />
      <Products />
    </main>
  );
}

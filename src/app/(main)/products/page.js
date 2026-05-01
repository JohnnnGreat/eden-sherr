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
        label="Our Products"
        title="Nigerian ginger with exceptionally high oleoresin and gingerol content."
        description="We offer it in multiple forms to meet the needs of varied users. Samples and full datasheets available on requests."
      />
      <Products />
    </main>
  );
}

import PageHero from "@/components/PageHero";
import Contact from "@/components/sections/Contact";
import { absoluteUrl, routeMetadata } from "@/config/siteConfig";

export const metadata = {
  title: routeMetadata["/contact"].title,
  description: routeMetadata["/contact"].description,
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        label="Contact Us"
        title="Get a Quote or Place an Order"
        description="Tell us what you need and we'll help. Share the product, quantity, and where it's going, and we'll get back to you with pricing and options."
      />
      <Contact />
    </main>
  );
}

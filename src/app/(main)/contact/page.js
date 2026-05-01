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
        title="Request the quote"
        description="Tell us what you need and we'll help."
      />
      <Contact />
    </main>
  );
}

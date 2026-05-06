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
        title="Send an Enquiry"
      />
      <Contact />
    </main>
  );
}

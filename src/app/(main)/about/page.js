import PageHero from "@/components/PageHero";
import About from "@/components/sections/About";
import Story from "@/components/sections/Story";
import { absoluteUrl, routeMetadata } from "@/config/siteConfig";

export const metadata = {
  title: routeMetadata["/about"].title,
  description: routeMetadata["/about"].description,
  alternates: {
    canonical: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        label="Our Company"
        title="Connecting Nigerian ginger to global procurement standards"
        description="Edan & Sherr was established to connect Southern Kaduna's product strength with international procurement standards."
      />
      <About />
      <Story detailed />
    </main>
  );
}

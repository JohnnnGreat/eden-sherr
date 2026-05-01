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
        label="Our company"
        title="Processing Nigerian Ginger to Global standard"
        description="Edan & Sherr was established to process Nigeran Ginger and deliver it at the standard the global markets demand."
      />
      <About />
      <Story detailed />
    </main>
  );
}

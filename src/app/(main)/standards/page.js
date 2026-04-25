import PageHero from "@/components/PageHero";
import Certifications from "@/components/sections/Certifications";
import Quality from "@/components/sections/Quality";
import { absoluteUrl, routeMetadata } from "@/config/siteConfig";

export const metadata = {
  title: routeMetadata["/standards"].title,
  description: routeMetadata["/standards"].description,
  alternates: {
    canonical: absoluteUrl("/standards"),
  },
};

export default function StandardsPage() {
  return (
    <main>
      <PageHero
        label="Standards"
        title="Risk-aware quality and compliance model"
        description="From intake controls to documentation support, our systems are structured to match procurement and quality-team expectations."
        bgVariant="dark"
      />
      <Quality />
      <Certifications />
    </main>
  );
}

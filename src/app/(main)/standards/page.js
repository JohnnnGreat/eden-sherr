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
        title="Built for the demands of global trade"
        description="From intake controls to documentation support, our systems are structured to match quality expectations."
        bgVariant="dark"
      />
      <Quality />
      <Certifications />
    </main>
  );
}

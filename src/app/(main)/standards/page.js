import Quality from "@/components/sections/Quality";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Quality Standards | Edan & Sherr Limited",
  description: "Learn about our rigorous quality control, traceability systems, and our roadmap to global certifications.",
};

export default function StandardsPage() {
  return (
    <main>
      <PageHero 
        label="Excellence"
        title="Quality You Can Verify"
        description="Traceability is at the heart of everything we do. From GPS-registered farms to batch-coded processing."
        bgVariant="green"
      />
      <Quality />
      <Certifications />
      <Contact />
    </main>
  );
}

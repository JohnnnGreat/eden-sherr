import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "About Us",
  description: "Learn about Edan & Sherr, our commitment to premium Nigerian ginger, and our mission to unlock its full potential.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero 
        label="Our Company"
        title="Unlocking the Potential of Nigerian Ginger"
        description="A bridge between the rich soils of Southern Kaduna and the global marketplace, built on transparency and excellence."
      />
      <About />
      <Contact />
    </>
  );
}

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Story from "@/components/sections/Story";
import Quality from "@/components/sections/Quality";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Premium Nigerian Ginger Exporter | NAFDAC Certified",
  description:
    "Edan & Sherr Limited exports premium dried split ginger and ginger powder from Southern Kaduna, Nigeria. EU-compliant, NAFDAC registered, fully traceable from farm to factory.",
  alternates: {
    canonical: "https://www.edanandsherr.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Story />
      <Quality />
      <Certifications />
      <Contact />
    </>
  );
}

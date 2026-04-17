import Hero from "@/components/sections/Hero";
import GingerOrigin from "@/components/sections/GingerOrigin";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Story from "@/components/sections/Story";
import Quality from "@/components/sections/Quality";
import Contact from "@/components/sections/Contact";

export const metadata = {
  title: "Premium Nigerian Ginger Exporter | Edan & Sherr Limited",
  description:
    "Edan & Sherr Limited exports premium dried split ginger and ginger powder from Southern Kaduna, Nigeria. NAFDAC registered, fully traceable from farm to factory.",
  alternates: {
    canonical: "https://www.edanandsherr.com",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <GingerOrigin />
      <About isPreview={true} />
      <Products isPreview={true} />
      <Story isPreview={true} />
      <Quality isPreview={true} />
      <Contact />
    </>
  );
}

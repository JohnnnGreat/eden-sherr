import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Products from "@/components/sections/Products";
import Story from "@/components/sections/Story";
import Quality from "@/components/sections/Quality";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Story />
      <Quality />
      <Certifications />
      <Contact />
    </main>
  );
}

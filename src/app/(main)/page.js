import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Quality from "@/components/sections/Quality";
import Story from "@/components/sections/Story";
import { absoluteUrl, routeMetadata } from "@/config/siteConfig";

export const metadata = {
  title: routeMetadata["/"].title,
  description: routeMetadata["/"].description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About isPreview />
      <Products isPreview />
      <Story isPreview />
      <Quality isPreview />
    </>
  );
}

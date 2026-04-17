import GingerOrigin from "@/components/sections/GingerOrigin";
import Contact from "@/components/sections/Contact";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Why Nigerian Ginger | Edan & Sherr Limited",
  description: "Discover why ginger from Southern Kaduna is considered among the finest in the world, with its bold aroma and intense pungency.",
};

export default function OriginPage() {
  return (
    <main>
      <PageHero 
        label="The Origin"
        title="The Terroir of Southern Kaduna"
        description="Where unique soil chemistry and ideal high-altitude conditions create a crop of unmatched character and potency."
      />
      <GingerOrigin />
      <Contact />
    </main>
  );
}

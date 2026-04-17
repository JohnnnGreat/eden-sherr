import Story from "@/components/sections/Story";
import Contact from "@/components/sections/Contact";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Founder's Story | Edan & Sherr Limited",
  description: "Read about the deep connection to the land and the legacy of ginger that drives our vision at Edan & Sherr.",
};

export default function StoryPage() {
  return (
    <main>
      <PageHero 
        label="The Founder"
        title="A Legacy of the Land"
        description="A story of generations of farming families and a vision to share Nigeria's extraordinary ginger with the world."
      />
      <Story />
      <Contact />
    </main>
  );
}

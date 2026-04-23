import Story from "@/components/sections/Story";
import Contact from "@/components/sections/Contact";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Founder's Story",
  description:
    "Read about the deep connection to the land and the legacy of ginger that drives our vision at Edan & Sherr.",
};

export default function StoryPage() {
  return (
    <>
      <PageHero
        label="The Founder"
        title="A Legacy of Ginger, A Vision for the World"
        description="She did not come to ginger through business. She came through the land - through a grandfather who devoted his life to it, and generations of farming families who understood, long before the world did, how extraordinary Nigeria's ginger truly is."
      />
      <Story detailed={true} />
      <Contact />
    </>
  );
}

import Contact from "@/components/sections/Contact";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact Us | Edan & Sherr Limited",
  description: "Get in touch with us for inquiries, partnerships, or to request product specifications.",
};

export default function ContactPage() {
  return (
    <main>
       <PageHero 
        label="Inquire"
        title="Get in Touch"
        description="Whether you are looking for product specifications or exploring partnership opportunities, we are ready to discuss how we can work together."
        bgVariant="green"
      />
      <Contact />
    </main>
  );
}

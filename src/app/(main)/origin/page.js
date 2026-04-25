import PageHero from "@/components/PageHero";
import GingerOrigin from "@/components/sections/GingerOrigin";
import { absoluteUrl, routeMetadata } from "@/config/siteConfig";

export const metadata = {
  title: routeMetadata["/origin"].title,
  description: routeMetadata["/origin"].description,
  alternates: {
    canonical: absoluteUrl("/origin"),
  },
};

export default function OriginPage() {
  return (
    <main>
      <PageHero
        label="The Origin"
        title="Southern Kaduna terroir and supply reality"
        description="This region produces ginger with distinct aroma and pungency. Our role is to preserve that advantage through disciplined sourcing and handling."
      />
      <GingerOrigin />
    </main>
  );
}

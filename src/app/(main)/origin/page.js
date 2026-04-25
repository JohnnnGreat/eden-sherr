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
        title="Southern Kaduna character and supply reality"
        description="This region produces ginger with distinct aroma and pungency. Our role is to preserve that advantage through disciplined sourcing and handling."
      />

      <section className="section-space bg-sand-50">
        <div className="container-shell">
          <h2 className="section-title text-center mb-12">Why Nigerian Ginger Stands Out</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 md:p-8">
              <h3 className="text-lg font-bold text-ink-900 mb-4">Superior Potency</h3>
              <p className="text-sm leading-7 text-ink-600">
                Nigerian ginger contains significantly higher <strong>oleoresin (4–6%) and gingerol content</strong> than ginger from India, China, or any other major producing country. These compounds give ginger its heat, flavor, and medicinal properties.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8">
              <h3 className="text-lg font-bold text-ink-900 mb-4">Sourcing Excellence</h3>
              <p className="text-sm leading-7 text-ink-600">
                We source from Nigeria's Kaduna and Nassarawa states, where volcanic soil and climate conditions produce rhizomes with exceptionally high active compound levels. Our supply chain handles aggregation, cleaning, drying, and quality testing before export.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8">
              <h3 className="text-lg font-bold text-ink-900 mb-4">Diverse Applications</h3>
              <p className="text-sm leading-7 text-ink-600">
                For spice trade: superior flavor intensity per kg. For pharma/nutraceutical buyers: better extraction yields and potent end products. We supply ginger powder for food processing and organic-certified options for premium markets.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-lg p-6 md:p-8">
            <h3 className="text-base font-bold text-ink-900 mb-4">Preferred by Global Buyers</h3>
            <p className="text-sm leading-7 text-ink-600 max-w-3xl">
              Nigerian ginger is the preferred origin for pharmaceutical manufacturers, essential oil producers, and spice blenders who need maximum potency. Edan & Sherr connects this superior origin to international procurement teams seeking reliable quality and traceability.
            </p>
          </div>
        </div>
      </section>

      <GingerOrigin />
    </main>
  );
}

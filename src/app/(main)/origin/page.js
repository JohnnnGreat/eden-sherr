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
              <h3 className="text-lg font-bold text-ink-900 mb-4">Aroma & Potency Profile</h3>
              <p className="text-sm leading-7 text-ink-600">
                Nigerian ginger from Southern Kaduna is known for its notably high <strong>oleoresin and gingerol content</strong>, which contribute to a strong aroma and heat profile valued by ingredient buyers across food and industrial applications.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8">
              <h3 className="text-lg font-bold text-ink-900 mb-4">Our Sourcing Approach</h3>
              <p className="text-sm leading-7 text-ink-600">
                We source from farming communities in Southern Kaduna, where soil and climate conditions support above-average active compound levels. Our supply chain covers aggregation, cleaning, drying, and quality screening before export.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8">
              <h3 className="text-lg font-bold text-ink-900 mb-4">Application Fit</h3>
              <p className="text-sm leading-7 text-ink-600">
                For spice trade: strong flavour intensity per kg. For pharma and nutraceutical buyers: competitive extraction yields from a high-compound origin. We supply dried ginger and powder formats for food processing applications.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-lg p-6 md:p-8">
            <h3 className="text-base font-bold text-ink-900 mb-4">Why Buyers Choose This Origin</h3>
            <p className="text-sm leading-7 text-ink-600 max-w-3xl">
              Nigerian ginger is recognised as a high-potency origin by pharmaceutical manufacturers, essential oil producers, and spice blenders. Edan & Sherr works to connect this origin to international procurement teams seeking verifiable quality and traceability.
            </p>
          </div>
        </div>
      </section>

      <GingerOrigin />
    </main>
  );
}

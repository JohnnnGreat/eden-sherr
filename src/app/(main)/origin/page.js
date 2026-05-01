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
        title="Southern Kaduna, Nigeria."
        description="Where red laterite soils, high altitude, and an equatorial climate converge to produce ginger unlike any other- Bold aroma. Intense pungency. Exceptional oil content. We bring you the best of it."
      />

      <section className="section-space bg-sand-50">
        <div className="container-shell">
          <h2 className="section-title text-center mb-4">Why Nigerian Ginger</h2>
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h3 className="text-xl font-bold text-ink-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Not All Ginger Is Created Equal</h3>
            <p className="section-copy">
              Origin is everything in ginger. Nigerian ginger — grown predominantly in Southern Kaduna — is internationally recognised for qualities that international buyers in food processing, spice blending, and nutraceuticals actively seek out, and that no other growing region fully replicates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white rounded-lg p-6 md:p-8">
              <div className="w-10 h-10 rounded-full bg-copper-100 flex items-center justify-center text-copper-700 font-bold mb-5">1</div>
              <h3 className="text-lg font-bold text-ink-900 mb-4">Exceptional Oil & Gingerol Content</h3>
              <p className="text-sm leading-7 text-ink-600">
                Nigerian ginger yields one of the highest essential oil and oleoresin contents of any origin — typically 1.5–3% volatile oil and gingerol levels of ≥ 1.5%. This concentration is what gives it its famously sharp aroma, bold pungency, and lingering heat — the qualities that make it perform in finished products.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8">
              <div className="w-10 h-10 rounded-full bg-copper-100 flex items-center justify-center text-copper-700 font-bold mb-5">2</div>
              <h3 className="text-lg font-bold text-ink-900 mb-4">Consistency Batch to Batch</h3>
              <p className="text-sm leading-7 text-ink-600">
                The combination of high altitude, laterite-rich soils, and an equatorial growing season produces not just exceptional quality but reliable consistency — the same profile, the same performance, order after order. It is why processors who know Nigerian ginger rarely switch.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 md:p-8">
              <div className="w-10 h-10 rounded-full bg-copper-100 flex items-center justify-center text-copper-700 font-bold mb-5">3</div>
              <h3 className="text-lg font-bold text-ink-900 mb-4">Scale at the Source</h3>
              <p className="text-sm leading-7 text-ink-600">
                Nigeria is one of the world's largest ginger producers and Africa's largest, accounting for approximately 17% of global production. The volume is there. The farming expertise has been built over generations.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 md:p-8">
              <div className="w-10 h-10 rounded-full bg-copper-100 flex items-center justify-center text-copper-700 font-bold mb-5">4</div>
              <h3 className="text-lg font-bold text-ink-900 mb-4">Built for Demanding Applications</h3>
              <p className="text-sm leading-7 text-ink-600">
                High flavour intensity for spice processors. Competitive extraction yields for pharmaceutical and nutraceutical buyers. Nigerian ginger is not a commodity substitute — it is a formulation advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <GingerOrigin /> */}
    </main>
  );
}

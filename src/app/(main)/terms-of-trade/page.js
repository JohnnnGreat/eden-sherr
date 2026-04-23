import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Terms of Trade',
  description: 'Review Edan & Sherr Limited trade terms for product enquiries and export transactions.',
};

export default function TermsOfTradePage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Trade"
        description="Baseline commercial terms used during enquiry, quotation, contracting, and fulfillment."
      />

      <section className="py-20 bg-white">
        <div className="container-site max-w-content">
          <div className="space-y-8 text-charcoal-700">
            <p className="text-body-md">
              Product specifications, quality parameters, lead times, and pricing are confirmed in writing for each
              transaction. Final terms are valid only when accepted by both parties.
            </p>
            <p className="text-body-md">
              Shipment terms, documentation requirements, and payment terms are defined per contract and may vary by
              destination market, buyer requirements, and applicable regulations.
            </p>
            <p className="text-body-md">
              Buyers are responsible for destination-country import requirements. We provide agreed quality and export
              documentation according to contract scope.
            </p>
            <p className="text-body-md">
              For detailed commercial terms on a specific order, contact us at info@edanandsherr.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

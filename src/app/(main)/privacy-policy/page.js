import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Read how Edan & Sherr Limited handles and protects personal and business data.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        description="How we collect, use, and safeguard information from buyers, partners, and site visitors."
      />

      <section className="py-20 bg-white">
        <div className="container-site max-w-content">
          <div className="space-y-8 text-charcoal-700">
            <p className="text-body-md">
              We collect contact and enquiry information submitted through email, phone, and direct business
              conversations in order to respond to sourcing requests and maintain business communication.
            </p>
            <p className="text-body-md">
              We use this information only for operational communication, order processing, quality assurance
              documentation, and compliance obligations related to export transactions.
            </p>
            <p className="text-body-md">
              We do not sell personal data. Information is shared only with relevant internal teams, logistics
              partners, and compliance stakeholders when required to fulfill legitimate business operations.
            </p>
            <p className="text-body-md">
              To request data correction or removal, contact us at info@edanandsherr.com.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

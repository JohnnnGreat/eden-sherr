import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { procurementFlow } from "@/data/homepageData";
import { siteConfig } from "@/config/siteConfig";

export default function Contact({ showFlow = true }) {
  return (
    <section className="section-space">
      <div className="container-shell">
        {showFlow && (
          <>
            <SectionHeader
              label="Contact / RFQ"
              title="Procurement-focused engagement flow"
              description="Whether you need a specification sheet, sample alignment, or commercial discussion, our team responds with clear next steps."
              align="center"
            />

            <div className="mt-9 grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
              <article className="surface-card p-5 md:p-7">
                <h3 className="text-xl text-ink-900">How we work with buyers</h3>
                <ol className="mt-5 grid gap-4">
                  {procurementFlow.map((item) => (
                    <li key={item.step} className="rounded-xl p-4 border border-light">
                      <p className="kicker">{item.step}</p>
                      <p className="mt-2 text-base font-bold text-ink-900">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-ink-600">{item.detail}</p>
                    </li>
                  ))}
                </ol>
              </article>

              <article className="surface-card p-5 md:p-7">
                <h3 className="text-xl text-ink-900">Reach our team</h3>
                <div className="mt-5 grid gap-4 text-sm">
                  <a
                    href={`mailto:${siteConfig.contacts.salesEmail}`}
                    className="surface-card p-4 inline-flex items-start gap-3"
                  >
                    <Mail size={18} style={{ color: "var(--color-copper-700)" }} />
                    <span>
                      <strong className="block text-ink-900">Email Sales</strong>
                      <span className="text-ink-600">{siteConfig.contacts.salesEmail}</span>
                    </span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contacts.phoneLink}`}
                    className="surface-card p-4 inline-flex items-start gap-3"
                  >
                    <Phone size={18} style={{ color: "var(--color-copper-700)" }} />
                    <span>
                      <strong className="block text-ink-900">Call Procurement Desk</strong>
                      <span className="text-ink-600">{siteConfig.contacts.phoneDisplay}</span>
                    </span>
                  </a>
                  <div className="surface-card p-4 inline-flex items-start gap-3">
                    <MapPin size={18} style={{ color: "var(--color-copper-700)" }} />
                    <span>
                      <strong className="block text-ink-900">Office Address</strong>
                      <span className="text-ink-600">
                        {siteConfig.address.line1}
                        <br />
                        {siteConfig.address.line2}
                        <br />
                        {siteConfig.address.line3}
                        <br />
                        {siteConfig.address.city}, {siteConfig.address.country}
                      </span>
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </>
        )}

        {!showFlow && (
          <article className="surface-card p-5 md:p-7 max-w-2xl mx-auto">
            <h3 className="text-xl text-ink-900">Reach our team</h3>
            <div className="mt-5 grid gap-4 text-sm">
              <a
                href={`mailto:${siteConfig.contacts.salesEmail}`}
                className="surface-card p-4 inline-flex items-start gap-3"
              >
                <Mail size={18} style={{ color: "var(--color-copper-700)" }} />
                <span>
                  <strong className="block text-ink-900">Email Sales</strong>
                  <span className="text-ink-600">{siteConfig.contacts.salesEmail}</span>
                </span>
              </a>
              <a
                href={`tel:${siteConfig.contacts.phoneLink}`}
                className="surface-card p-4 inline-flex items-start gap-3"
              >
                <Phone size={18} style={{ color: "var(--color-copper-700)" }} />
                <span>
                  <strong className="block text-ink-900">Call Procurement Desk</strong>
                  <span className="text-ink-600">{siteConfig.contacts.phoneDisplay}</span>
                </span>
              </a>
              <div className="surface-card p-4 inline-flex items-start gap-3">
                <MapPin size={18} style={{ color: "var(--color-copper-700)" }} />
                <span>
                  <strong className="block text-ink-900">Office Address</strong>
                  <span className="text-ink-600">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}
                    <br />
                    {siteConfig.address.line3}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.country}
                  </span>
                </span>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { procurementFlow } from "@/data/homepageData";
import { siteConfig } from "@/config/siteConfig";

export default function Contact({ showFlow = true }) {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      company: form.company.value,
      contact: form.contact.value,
      email: form.email.value,
      phone: form.phone.value,
      product: form.product.value,
      quantity: form.quantity.value,
      destination: form.destination.value,
      quality: form.quality.value,
      notes: form.notes.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="section-space">
      <div className="container-shell">
        {showFlow && (
          <>
            <SectionHeader
              label="Contact Us"
              title="Get a Quote"
              description="Fill out the form below with what you need. Tell us which product, how much, where it's going, and any special requirements. We'll get back to you with options and pricing."
              align="center"
            />

            <div className="mt-9 grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
              <div>
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-lg p-6 md:p-8"
                  style={{ border: "1px solid rgba(19, 34, 31, 0.12)" }}
                >
                  <div className="grid gap-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-ink-900 mb-2">Company Name *</label>
                        <input name="company" type="text" className="w-full px-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-copper-400" placeholder="Your company" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ink-900 mb-2">Contact Person *</label>
                        <input name="contact" type="text" className="w-full px-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-copper-400" placeholder="Your name" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-ink-900 mb-2">Email *</label>
                        <input name="email" type="email" className="w-full px-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-copper-400" placeholder="your@email.com" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ink-900 mb-2">Phone</label>
                        <input name="phone" type="tel" className="w-full px-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-copper-400" placeholder="+234 (000) 000-0000" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-ink-900 mb-2">Which Product? *</label>
                      <select name="product" className="w-full px-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-copper-400" required>
                        <option value="">Choose a product</option>
                        <option value="Split Dried Ginger">Split Dried Ginger</option>
                        <option value="Whole Dried Ginger">Whole Dried Ginger</option>
                        <option value="Ginger Powder">Ginger Powder</option>
                        <option value="Organic Ginger">Organic Ginger</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-ink-900 mb-2">How Much Do You Need? (kg) *</label>
                        <input name="quantity" type="number" className="w-full px-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-copper-400" placeholder="e.g., 5000" required />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-ink-900 mb-2">Where Will It Go? *</label>
                        <input name="destination" type="text" className="w-full px-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-copper-400" placeholder="Enter Delivery Address" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-ink-900 mb-2">What Quality Do You Need? (Optional)</label>
                      <textarea name="quality" className="w-full px-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-copper-400" rows="3" placeholder="Any special requirements, certifications, or quality standards..."></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-ink-900 mb-2">Anything Else We Should Know?</label>
                      <textarea name="notes" className="w-full px-4 py-2 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-copper-400" rows="3" placeholder="Other details or questions..."></textarea>
                    </div>

                    {status === "success" && (
                      <p className="text-sm font-medium" style={{ color: "var(--color-olive-700)" }}>
                        Your request was sent. We'll get back to you within 24 hours.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="text-sm font-medium" style={{ color: "var(--color-copper-700)" }}>
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      className="btn-primary w-full"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? "Sending…" : "Send Quote Request"}
                    </button>
                  </div>
                </form>
              </div>

              <article>
                <h3 className="text-xl font-bold text-ink-900 mb-6">Quick Contact</h3>
                <div className="grid gap-4 text-sm">
                  <a
                    href={`mailto:${siteConfig.contacts.salesEmail}`}
                    className="bg-white rounded-lg p-4 inline-flex items-start gap-3"
                  >
                    <Mail size={18} style={{ color: "var(--color-copper-700)" }} />
                    <span>
                      <strong className="block text-ink-900">Email Sales</strong>
                      <span className="text-ink-600">{siteConfig.contacts.salesEmail}</span>
                    </span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contacts.phoneLink}`}
                    className="bg-white rounded-lg p-4 inline-flex items-start gap-3"
                  >
                    <Phone size={18} style={{ color: "var(--color-copper-700)" }} />
                    <span>
                      <strong className="block text-ink-900">Call Us</strong>
                      <span className="text-ink-600">{siteConfig.contacts.phoneDisplay}</span>
                    </span>
                  </a>
                  <div className="bg-white rounded-lg p-4 inline-flex items-start gap-3">
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

                <div className="mt-8 pt-8 border-t border-light">
                  <h4 className="text-base font-bold text-ink-900 mb-4">We'll Get Back to You Fast</h4>
                  <p className="text-sm text-ink-600">
                    We aim to respond to all requests within <strong>1 business day</strong> with what we can do and next steps.
                  </p>
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

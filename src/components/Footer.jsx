import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { mainNavigation, siteConfig } from "@/config/siteConfig";

export default function Footer() {
  return (
    <footer
      className="mt-auto"
      style={{
        background:
          "linear-gradient(170deg, var(--color-ink-950), var(--color-ink-900))",
        color: "rgba(255,255,255,0.88)",
      }}
    >
      <div className="container-shell section-space-tight">
        <div className="surface-card-dark p-7 md:p-9">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 items-end">
            <div>
              <p className="kicker text-copper-300">
                Let's Connect
              </p>
              <h2 className="section-title mt-3 text-white max-w-96">
                Partner with a trusted ginger origin
              </h2>
              <p className="mt-4 footer-text-secondary max-w-2xl">
                Tell us what you need—format, quality standards, destination market. We'll respond with clear options and a transparent path forward that works for your sourcing timeline.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:justify-self-end">
              <a
                href={`mailto:${siteConfig.contacts.salesEmail}`}
                className="btn-primary"
              >
                Start Sourcing
              </a>
              <a href={`tel:${siteConfig.contacts.phoneLink}`} className="btn-secondary">
                Talk to Us
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-[1.3fr_1fr_1fr] gap-10 mt-10">
          <div>
            <Link href="/" aria-label={`${siteConfig.name} home`}>
              <Image
                src="/images/v2/brand-signature.png"
                alt={`${siteConfig.name} logo`}
                width={150}
                height={52}
              />
            </Link>
            <p className="mt-4 footer-text-tertiary max-w-xs">
              {siteConfig.shortDescription}
            </p>
          </div>

          <div>
            <p className="footer-label">Explore</p>
            <ul className="mt-4 flex flex-col gap-3">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-label">Contact</p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li className="inline-flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-copper-300" />
                <span className="footer-link" style={{ lineHeight: 1.7 }}>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.line3}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.country}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contacts.salesEmail}`}
                  className="inline-flex items-center gap-2 footer-link"
                >
                  <Mail size={16} className="text-copper-300" />
                  {siteConfig.contacts.salesEmail}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contacts.phoneLink}`}
                  className="inline-flex items-center gap-2 footer-link"
                >
                  <Phone size={16} className="text-copper-300" />
                  {siteConfig.contacts.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 flex flex-wrap items-center justify-between gap-3 text-xs border-t" style={{ borderColor: "rgba(255,255,255,0.12)" }}>
          <p style={{ color: "rgba(255,255,255,0.58)" }}>
            {new Date().getFullYear()} {siteConfig.legalName}. {siteConfig.legal.rightsText}
          </p>
          <p style={{ color: "rgba(255,255,255,0.46)" }}>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

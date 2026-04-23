import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Why Ginger', href: '/origin' },
  { label: 'Our Story', href: '/story' },
  { label: 'Products', href: '/products' },
  { label: 'Standards', href: '/standards' },
  { label: 'Contact', href: '/contact' },
];

const PRODUCT_LINKS = [
  { label: 'Dried Split Ginger', href: '/products' },
  { label: 'Ginger Powder', href: '/products' },
  { label: 'Fresh Rhizomes', href: '/products' },
  { label: 'Enquire', href: '/contact' },
];

function InstagramIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="8" cy="8" r="2.75" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="11.75" cy="4.25" r="0.75" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.25" />
      <path d="M4.5 6.5v5M4.5 4.5v.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M7.5 11.5V9a1.5 1.5 0 0 1 3 0v2.5M7.5 6.5v5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2.5 2.5 8 8m0 0 5.5 5.5M8 8l5.5-5.5M8 8 2.5 13.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

const ICON_MAP = {
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
  X: XIcon,
};

export default function Footer() {
  const activeSocialLinks = siteConfig.socialLinks.filter((item) => Boolean(item.href));

  return (
    <footer style={{ backgroundColor: '#1e1a1c' }}>
      <div
        className="container-site"
        style={{
          paddingTop: 'clamp(3rem, 6vw, 5rem)',
          paddingBottom: 'clamp(2.5rem, 5vw, 4rem)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div style={{ maxWidth: 560 }}>
            <p className="section-label" style={{ color: '#75a85d' }}>
              Start Sourcing
            </p>
            <h2
              className="font-display"
              style={{
                color: '#ffffff',
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                fontStyle: 'italic',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginTop: '0.75rem',
              }}
            >
              Premium Nigerian ginger,
              <br />
              ready for the world.
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.875rem',
              alignItems: 'flex-start',
            }}
          >
            <a href={`mailto:${siteConfig.contact.email}`} className="btn-primary">
              {siteConfig.contact.email}
            </a>
            <a
              href={`tel:${siteConfig.contact.phoneE164}`}
              className="text-body-sm"
              style={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                paddingLeft: '0.25rem',
                transition: 'color 0.15s',
              }}
            >
              {siteConfig.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="container-site" style={{ paddingBlock: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="grid lg:grid-cols-[2fr_1fr_1fr] gap-10 lg:gap-16">
          <div>
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <Image
                src="/Edan-%26-Sherr-Presentation-3.png"
                alt={siteConfig.companyName}
                width={160}
                height={64}
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </Link>

            <p
              className="text-body-sm"
              style={{
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.75,
                marginTop: '1.5rem',
                maxWidth: 310,
              }}
            >
              Nigeria&apos;s premier ginger agro-processor. From the red soils of Southern Kaduna to food factories and kitchens across global markets.
            </p>

            {activeSocialLinks.length > 0 && (
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.75rem' }}>
                {activeSocialLinks.map(({ label, href }) => {
                  const Icon = ICON_MAP[label];
                  if (!Icon) {
                    return null;
                  }

                  return (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(255,255,255,0.55)',
                        textDecoration: 'none',
                        transition: 'border-color 0.15s, color 0.15s',
                      }}
                      className="social-btn"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <p className="text-label-md" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>
              Company
            </p>
            <ul className="list-none m-0 p-0" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {COMPANY_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-body-sm footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label-md" style={{ color: 'rgba(255,255,255,0.35)', marginBottom: '1.25rem' }}>
              Products
            </p>
            <ul className="list-none m-0 p-0" style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {PRODUCT_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-body-sm footer-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="container-site"
        style={{
          paddingBottom: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem',
        }}
      >
        <p className="text-caption" style={{ color: 'rgba(255,255,255,0.38)' }}>
          &copy; 2026 {siteConfig.companyName}. All rights reserved.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {siteConfig.legalLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-caption"
              style={{
                color: 'rgba(255,255,255,0.38)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <p
          className="font-display"
          style={{
            color: 'rgba(255,255,255,0.22)',
            fontSize: '0.875rem',
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
          }}
        >
          {siteConfig.tagline}
        </p>
      </div>
    </footer>
  );
}

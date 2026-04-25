import { Manrope, Sora, Figtree } from "next/font/google";
import "./globals.css";
import { absoluteUrl, siteConfig } from "@/config/siteConfig";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} | Premium Nigerian Ginger`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Nigerian ginger export",
    "Southern Kaduna ginger",
    "dried split ginger",
    "ginger powder supplier",
    "ginger procurement Nigeria",
    "traceable ginger exporter",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Premium Nigerian Ginger`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/v2/brand-signature.png",
        width: 2040,
        height: 1442,
        alt: `${siteConfig.name} brand mark`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Nigerian Ginger`,
    description: siteConfig.description,
    images: ["/images/v2/brand-signature.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": absoluteUrl("/#organization"),
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.siteUrl,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/images/v2/brand-signature.png"),
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contacts.phoneLink,
        email: siteConfig.contacts.salesEmail,
        contactType: "sales",
        areaServed: "Worldwide",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}, ${siteConfig.address.line3}`,
        addressLocality: siteConfig.address.city,
        addressCountry: "NG",
      },
      description: siteConfig.description,
      knowsAbout: [
        "Ginger processing",
        "Spice export",
        "Supply chain traceability",
        "Food ingredient sourcing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": absoluteUrl("/#website"),
      url: siteConfig.siteUrl,
      name: siteConfig.name,
      publisher: {
        "@id": absoluteUrl("/#organization"),
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

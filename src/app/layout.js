import { DM_Serif_Display, Outfit } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const siteUrl = siteConfig.siteUrl;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.companyName} | Premium Nigerian Ginger`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description:
    "Nigeria's premier ginger agro-processor. We supply premium dried split ginger and ginger powder to global buyers. EU-compliant, NAFDAC registered, fully traceable from farm to factory.",
  keywords: [
    "Nigerian ginger",
    "premium ginger export",
    "dried split ginger",
    "ginger powder Nigeria",
    "Southern Kaduna ginger",
    "ginger agro-processor",
    "Nigeria spice export",
    "EU compliant ginger",
    "Edan and Sherr",
  ],
  authors: [{ name: siteConfig.companyName, url: siteUrl }],
  creator: siteConfig.companyName,
  publisher: siteConfig.companyName,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: siteConfig.companyName,
    title: `${siteConfig.companyName} | Premium Nigerian Ginger`,
    description:
      "Nigeria's premier ginger agro-processor supplying premium dried split ginger and ginger powder to global markets.",
    images: [
      {
        url: "/Edan-%26-Sherr-Presentation-3.png",
        width: 2040,
        height: 1442,
        alt: "Edan & Sherr Limited - Premium Nigerian Ginger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.companyName} | Premium Nigerian Ginger`,
    description:
      "Nigeria's premier ginger agro-processor supplying premium dried split ginger and ginger powder to global markets.",
    images: ["/Edan-%26-Sherr-Presentation-3.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteConfig.companyName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Edan-%26-Sherr-Presentation-3.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phoneE164,
        email: siteConfig.contact.email,
        contactType: "sales",
        areaServed: "Worldwide",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.streetAddress,
        addressLocality: siteConfig.address.city,
        addressCountry: siteConfig.address.countryCode,
      },
      description:
        "Nigeria's premier ginger agro-processor, processing and exporting premium dried split ginger and ginger powder to global markets.",
      knowsAbout: [
        "Ginger Processing",
        "Agro-Processing",
        "Spice Export",
        "Nigerian Agriculture",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteConfig.companyName,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[999] focus:bg-white focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

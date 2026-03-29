import { Figtree, Outfit } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-figtree",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const siteUrl = "https://www.edanandsherr.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Edan & Sherr Limited | Premium Nigerian Ginger",
    template: "%s | Edan & Sherr Limited",
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
  authors: [{ name: "Edan & Sherr Limited", url: siteUrl }],
  creator: "Edan & Sherr Limited",
  publisher: "Edan & Sherr Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Edan & Sherr Limited",
    title: "Edan & Sherr Limited | Premium Nigerian Ginger",
    description:
      "Nigeria's premier ginger agro-processor supplying premium dried split ginger and ginger powder to global markets.",
    images: [
      {
        url: "/Edan-%26-Sherr-Presentation-3.png",
        width: 2040,
        height: 1442,
        alt: "Edan & Sherr Limited — Premium Nigerian Ginger",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edan & Sherr Limited | Premium Nigerian Ginger",
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
      name: "Edan & Sherr Limited",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Edan-%26-Sherr-Presentation-3.png`,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+2348065321577",
        email: "info@edanandsherr.com",
        contactType: "sales",
        areaServed: "Worldwide",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "No. 3 Okemisi Crescent, Off Oro Ago Street, Garki II",
        addressLocality: "Abuja",
        addressCountry: "NG",
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
      name: "Edan & Sherr Limited",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}

const SITE_URL = "https://www.edanandsherr.com";

export const siteConfig = {
  siteUrl: SITE_URL,
  name: "Edan & Sherr Limited",
  legalName: "Edan & Sherr Limited",
  tagline: "Rooted in Nigeria. Built for global buyers.",
  legal: {
    rightsText: "All rights reserved.",
    jurisdiction: "Nigeria",
  },
  shortDescription:
    "Premium Nigerian ginger processor and exporter serving international food and ingredient buyers.",
  description:
    "Edan & Sherr Limited processes and exports premium Nigerian ginger from Southern Kaduna. We support global buyers with traceable sourcing, export-ready documentation, and quality-focused processing.",
  contacts: {
    salesEmail: "info@edanandsherr.com",
    founderEmail: "sessien@edanandsherr.com",
    phoneDisplay: "+234 806 532 1577",
    phoneLink: "+2348065321577",
  },
  address: {
    line1: "Plot 765 Cadastral Zone",
    line2: "Adamu Ismaila Crescent",
    line3: "Idu Industrial Estate",
    city: "Abuja",
    country: "Nigeria",
    formatted:
      "Plot 765 Cadastral Zone, Adamu Ismaila Crescent, Idu Industrial Estate, Abuja, Nigeria",
  },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/edan-and-sherr-limited",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/edanandsherr",
    },
  ],
};

export const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Origin", href: "/origin" },
  { label: "Products", href: "/products" },
  { label: "Standards", href: "/standards" },
  { label: "Contact", href: "/contact" },
];

export const publicRoutes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.85 },
  { path: "/origin", changeFrequency: "monthly", priority: 0.85 },
  { path: "/products", changeFrequency: "weekly", priority: 0.9 },
  { path: "/standards", changeFrequency: "monthly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
];

export const routeMetadata = {
  "/": {
    title: "Premium Nigerian Ginger Exporter",
    description:
      "Source premium Nigerian ginger with traceable sourcing, quality-focused processing, and export-ready support.",
  },
  "/about": {
    title: "About Us",
    description:
      "Meet Edan & Sherr and see how we connect Southern Kaduna ginger to international procurement requirements.",
  },
  "/origin": {
    title: "Why Southern Kaduna Ginger",
    description:
      "Discover why Southern Kaduna is one of Nigeria's most respected ginger-growing regions.",
  },
  "/products": {
    title: "Products",
    description:
      "Browse our ginger products including dried split ginger, powder, and specialty formats with clear specifications for procurement.",
  },
  "/standards": {
    title: "Standards",
    description:
      "Review our quality systems, traceability approach, and certification roadmap for international trade.",
  },
  "/contact": {
    title: "Contact",
    description:
      "Send RFQ and specification requests to Edan & Sherr's procurement support team.",
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

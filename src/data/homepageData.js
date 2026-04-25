import { productPortfolio } from "@/data/productData";

export const homepageHero = {
  eyebrow: "Premium Nigerian Ginger",
  title: "Reliable sourcing for global ingredient buyers",
  subtitle:
    "We help importers, processors, and ingredient brands source premium Nigerian ginger with stronger traceability, cleaner documentation, and reliable quality control.",
  primaryCta: { label: "Request Product Specs", href: "/contact" },
  secondaryCta: { label: "View Products", href: "/products" },
};

export const heroCarouselImages = [
  {
    src: "/images/v2/hero-ginger-field.jpg",
    alt: "Premium Nigerian ginger in field",
  },
  {
    src: "/images/ginger-hero.jpg",
    alt: "Ginger processing and preparation",
  },
  {
    src: "/images/v2/origin-kaduna-farm.jpg",
    alt: "Export-ready ginger products",
  },
];

export const trustMetrics = [
  {
    value: "Southern Kaduna",
    label: "Single-origin sourcing zone",
  },
  {
    value: "Batch-coded",
    label: "Farm-to-factory lot traceability",
  },
  {
    value: "Export-ready",
    label: "Documentation support for global buyers",
  },
  {
    value: "Quality-screened",
    label: "Moisture, microbiology, and residue checks",
  },
];

export const capabilityModules = [
  {
    title: "Sourcing & Aggregation",
    summary:
      "Structured relationships with farming communities in Southern Kaduna with consistent intake planning and lot-level records.",
  },
  {
    title: "Processing Discipline",
    summary:
      "Controlled drying, sorting, and milling workflows designed to preserve key sensory and technical attributes buyers expect.",
  },
  {
    title: "Quality Assurance",
    summary:
      "Verification checkpoints include moisture, cleanliness, microbiology, and relevant compliance screens before shipment.",
  },
  {
    title: "Procurement Support",
    summary:
      "RFQ-friendly communication for specification requests, pack formats, expected lead windows, and shipping documentation.",
  },
];

export const complianceProof = [
  {
    title: "Traceability Contract",
    points: [
      "Batch-level coding from intake through processing",
      "Supplier-to-lot reference records for audit workflows",
      "Clear quality and release checkpoints before dispatch",
    ],
  },
  {
    title: "Compliance Readiness",
    points: [
      "NAFDAC and NEPC aligned operating model",
      "Lab-screening workflow for key buyer parameters",
      "Export documentation support for destination requirements",
    ],
  },
];

export const procurementFlow = [
  {
    step: "01",
    title: "Share Your Specification",
    detail:
      "Send required format, target quality parameters, destination market, and projected volumes.",
  },
  {
    step: "02",
    title: "Review Sample and Terms",
    detail:
      "We align on sample standard, packaging format, lead windows, and documentation requirements.",
  },
  {
    step: "03",
    title: "Confirm Production Slot",
    detail:
      "Approved orders move into production and quality release scheduling with shipment prep support.",
  },
];

export const heroFeaturedProducts = productPortfolio.slice(0, 2);
export const homepageProductHighlights = productPortfolio.slice(2, 5);

export const aboutImages = [
  {
    src: "/images/ginger-new.jpg",
    alt: "Southern Kaduna farm zone supplying premium ginger",
  },
  {
    src: "/images/v2/ginger-new2.jpg",
    alt: "Ginger processing and quality control",
  },
  {
    src: "/images/v2/hero-ginger-field.jpg",
    alt: "Premium ginger harvest from origin",
  },
];

export const standardsRoadmap = [
  {
    phase: "Current",
    title: "Controlled Internal Quality Program",
    status: "Active",
    notes:
      "Internal SOPs with lot traceability and quality checks covering intake, processing, and release.",
  },
  {
    phase: "In Progress",
    title: "HACCP Program Formalization",
    status: "In Progress",
    notes:
      "Hazard analysis and critical controls are being documented for broader buyer assurance.",
  },
  {
    phase: "Next",
    title: "ISO 22000 / FSSC 22000 Pathway",
    status: "Planned",
    notes:
      "Structured progression toward internationally recognized food safety management systems.",
  },
];

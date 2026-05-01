import Link from "next/link";
import { ArrowRight, Globe, ClipboardCheck, Handshake, Ship } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { complianceProof } from "@/data/homepageData";

const controls = [
  {
    icon: Globe,
    title: "Farm-to-Freight Traceability",
    detail: "Every shipment is traceable to its farm of origin. We provide full documentation for customs, food safety, and compliance requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Consistent Quality, Every Lot",
    detail: "Rigorous in-house testing at every stage — from harvest through processing and loading. No surprises when your shipment arrives.",
  },
  {
    icon: Handshake,
    title: "Reliable Supply Chain",
    detail: "We maintain strategic buffer stocks and work with multiple farming communities to ensure we never miss a committed volume or delivery window.",
  },
  {
    icon: Ship,
    title: "End-to-End Export Support",
    detail: "We handle phytosanitary certificates, fumigation, containerisation, and shipping documentation — making your import process seamless.",
  },
];

export default function Quality({ isPreview = false }) {
  return (
    <section
      className="section-space mx-3 my-3 rounded-2xl"
      style={{
        background:
          "linear-gradient(165deg, var(--color-ink-950), var(--color-ink-900))",
      }}
    >
      <div className="container-shell">
        <SectionHeader
          label="Standards & Control"
          title="Quality you can verify"
          description="Our quality model is designed to help buyers verify origin, process discipline, and release conditions before shipment."
          align="center"
          tone="inverse"
          labelColor="var(--color-olive-500)"
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {controls.map((control) => (
            <article key={control.title} className="surface-card-dark p-5 md:p-6">
              <control.icon size={20} style={{ color: "var(--color-copper-300)" }} />
              <h3 className="mt-4 text-lg text-white">{control.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/75">{control.detail}</p>
            </article>
          ))}
        </div>



        {isPreview ? (
          <div className="mt-12 text-center">
            <Link href="/standards" className="btn-primary">
              View Standards Roadmap
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, FileCheck2, FlaskConical, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { complianceProof } from "@/data/homepageData";

const controls = [
  {
    icon: FileCheck2,
    title: "Documented Intake Checks",
    detail:
      "Each lot is logged with source and intake details before entering processing flow.",
  },
  {
    icon: FlaskConical,
    title: "Quality Verification Workflow",
    detail:
      "Lot release is guided by technical checks aligned to buyer quality requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Shipment Readiness Support",
    detail:
      "Documentation and specification handover is structured for procurement and compliance teams.",
  },
];

export default function Quality({ isPreview = false }) {
  return (
    <section
      className="section-space"
      style={{
        background:
          "linear-gradient(165deg, var(--color-ink-950), var(--color-ink-900))",
      }}
    >
      <div className="container-shell">
        <SectionHeader
          label="Standards & Control"
          title="Proof-oriented quality architecture"
          description="Our quality model is designed to help buyers verify origin, process discipline, and release conditions before shipment."
          align="center"
          tone="inverse"
          labelColor="var(--color-olive-500)"
        />

        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {controls.map((control) => (
            <article key={control.title} className="surface-card-dark p-5 md:p-6">
              <control.icon size={20} style={{ color: "var(--color-copper-300)" }} />
              <h3 className="mt-4 text-lg text-white">{control.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/75">{control.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-7 grid md:grid-cols-2 gap-4">
          {complianceProof.map((block) => (
            <article key={block.title} className="surface-card p-5 md:p-6">
              <h3 className="text-xl text-ink-900">{block.title}</h3>
              <ul className="mt-4 grid gap-3">
                {block.points.map((point) => (
                  <li key={point} className="text-sm leading-7 text-ink-600 flex items-start gap-3">
                    <span className="text-copper-600 font-bold mt-0.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {isPreview ? (
          <div className="mt-7 text-center">
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

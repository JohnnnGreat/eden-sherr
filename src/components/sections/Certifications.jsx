import SectionHeader from "@/components/SectionHeader";
import { standardsRoadmap } from "@/data/homepageData";

export default function Certifications() {
  return (
    <section className="section-space bg-sand-50">
      <div className="container-shell">
        <SectionHeader
          label="Certification Roadmap"
          title="Progression towards Global standards"
          description="We are committed to achieving the certifications that matter most to international buyers. A transparent view of where we stand."
          align="center"
        />

        <div className="mt-10 grid lg:grid-cols-3 gap-4">
          {standardsRoadmap.map((item) => (
            <article key={item.title} className="surface-card p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="badge badge-olive">{item.phase}</span>
                <span className="badge badge-copper">{item.status}</span>
              </div>
              <h3 className="mt-4 text-xl text-ink-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-600">{item.notes}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

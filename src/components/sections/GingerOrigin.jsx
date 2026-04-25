import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { originHighlights } from "@/data/storyData";

export default function GingerOrigin() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
          <div>
            <SectionHeader
              label="Origin Advantage"
              title="Why Southern Kaduna ginger stands out"
              description="Origin quality starts in the field. We source from a region known for strong aroma and pungency, then protect those attributes through disciplined post-harvest handling."
            />

            <div className="mt-8 grid gap-4">
              {originHighlights.map((highlight) => (
                <article key={highlight.title} className="surface-card p-5">
                  <p className="text-base font-bold text-ink-900">{highlight.title}</p>
                  <p className="mt-2 text-sm leading-7 text-ink-600">
                    {highlight.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="surface-card p-2">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/v2/origin-kaduna-farm.jpg"
                alt="Ginger farm landscape in Southern Kaduna, Nigeria"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

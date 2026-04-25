import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { founderNarrative } from "@/data/storyData";

export default function Story({ isPreview = false, detailed = false }) {
  const paragraphs = isPreview ? founderNarrative.slice(0, 2) : founderNarrative;

  return (
    <section className={isPreview ? "h-screen flex flex-col justify-center py-8" : "section-space"}>
      <div className="container-shell">
        {isPreview ? (
          <div className="mb-6 text-center">
            <p className="kicker text-copper-700">Founder's Story</p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-ink-900">A heritage-led mission with global intent</h2>
          </div>
        ) : (
          <SectionHeader
            label="Founder's Story"
            title="A heritage-led mission with global intent"
            description="Our story begins with land, farming families, and a determination to present Nigerian ginger to international markets at the quality it deserves."
            align="center"
          />
        )}

        <div className={isPreview ? "grid lg:grid-cols-[1.05fr_0.95fr] gap-6 items-center" : "mt-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start"}>
          <div className={isPreview ? "bg-white rounded-lg p-4 md:p-5" : "bg-white rounded-lg p-6 md:p-7"}>
            <blockquote
              className={isPreview ? "text-lg md:text-xl leading-8" : "text-xl md:text-2xl leading-10"}
              style={{ color: "var(--color-ink-900)" }}
            >
              "We are not inventing quality in this origin. We are making it
              visible, verifiable, and commercially ready."
            </blockquote>

            <div className={isPreview ? "mt-3 grid gap-2" : "mt-6 grid gap-4"}>
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className={isPreview ? "text-xs md:text-sm leading-6 text-ink-600" : "text-sm md:text-base leading-8 text-ink-600"}>
                  {paragraph}
                </p>
              ))}
            </div>

            {isPreview ? (
              <div className="mt-4">
                <Link href="/about" className="btn-secondary text-sm">
                  Read Full Story
                  <ArrowRight size={14} />
                </Link>
              </div>
            ) : null}
          </div>

          <div className={isPreview ? "rounded-xl overflow-hidden h-80" : "surface-card p-2"}>
            <div className={isPreview ? "relative w-full h-full rounded-xl overflow-hidden" : "relative aspect-[4/5] rounded-xl overflow-hidden"}>
              <Image
                src="/images/v2/founder-heritage-2.png"
                alt="Legacy image showing processing journey"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {!isPreview && detailed ? (
          <div className="mt-8 surface-card p-6">
            <p className="kicker">Vision Statement</p>
            <p className="mt-3 section-copy">
              Our goal is to make Edan & Sherr the trusted bridge between
              high-potential Nigerian origin and international buyer standards,
              while creating long-term value across the supply chain.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

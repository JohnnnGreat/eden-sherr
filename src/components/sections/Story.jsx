'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

const ease = [0.25, 0.1, 0.25, 1];

const PARAGRAPHS = [
  "Nigeria is home to some of the world's finest ginger — prized for its rich aroma, bold flavour, and exceptional oil content. But for me, this is more than a fact. It is a story I have lived.",

  "I grew up watching generations of ginger farmers shape this legacy. My grandfather, one of the finest farmers of his time, devoted his life to the land. After him came my parents, uncles, cousins, and countless others — men and women who worked tirelessly in rich red soils under open skies, cultivating a crop that carries both heritage and pride.",

  "Season after season, they produced ginger of remarkable strength and character — what I still believe to be the boldest ginger in the world. Yet despite its quality, much of its true value remained unrealised. The world had not fully experienced it as it should. I watched as each generation, in its own way, tried to bring this extraordinary resource to the global stage — often constrained by limitations beyond their control.",

  "That is where the story begins to change. Edan & Sherr Limited was founded with a clear vision: to unlock the full value of Nigeria's world-class ginger and share its true potential with the world.",
];

export default function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section className="py-section-y bg-cream" ref={ref}>
      <div className="container-site">
        <div className="max-w-content mx-auto">

          {/* ── Section header — centered ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <SectionHeader
              label="Our Story"
              title="A Legacy of Ginger, A Vision for the World"
              align="center"
            />
          </motion.div>

          {/* ── Pull-quote ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease }}
            style={{ position: 'relative', marginTop: '3.5rem', textAlign: 'center' }}
          >
            {/* Decorative oversized quotation mark */}
            <span
              aria-hidden="true"
              className="font-display"
              style={{
                position: 'absolute',
                top: '-1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '7rem',
                lineHeight: 1,
                color: '#c0345f',
                opacity: 0.15,
                userSelect: 'none',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            >
              &ldquo;
            </span>

            {/* Quote text */}
            <blockquote
              className="font-display text-charcoal-900"
              style={{
                position: 'relative',
                zIndex: 1,
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                lineHeight: 1.55,
                letterSpacing: '-0.01em',
                fontStyle: 'italic',
                paddingInline: '1rem',
              }}
            >
              I grew up watching generations of ginger farmers shape this legacy.
              Season after season, they produced ginger of remarkable strength and
              character — what I still believe to be the boldest ginger in the world.
            </blockquote>
          </motion.div>

          {/* ── Green divider ── */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease }}
            style={{ display: 'flex', justifyContent: 'center', marginBlock: '2rem' }}
          >
            <div
              style={{
                width: '4rem',
                height: 3,
                backgroundColor: '#75a85d',
                borderRadius: '9999px',
              }}
            />
          </motion.div>

          {/* ── Story paragraphs — staggered ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {PARAGRAPHS.map((text, i) => (
              <motion.p
                key={i}
                className="text-body-md"
                style={{ color: '#6e5b67', lineHeight: 1.85 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.12, ease }}
              >
                {text}
              </motion.p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

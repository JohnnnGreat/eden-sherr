'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Factory, CheckCircle, FlaskConical, FileSearch, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ease = [0.25, 0.1, 0.25, 1];

const cards = [
  {
    Icon: Factory,
    title: 'Hygienic Processing',
    description:
      'Strict hygiene protocols govern every stage, from raw root intake and washing through to final packaging, ensuring a clean, safe product from start to finish.',
  },
  {
    Icon: CheckCircle,
    title: 'Quality Control',
    description:
      'Dedicated QC personnel monitor each batch for colour, aroma, moisture content, and physical integrity before it progresses to the next processing stage.',
  },
  {
    Icon: FlaskConical,
    title: 'Laboratory Testing',
    description:
      'In-house and accredited third-party labs run full analysis: EU pesticide residue limits, aflatoxin thresholds, heavy metals, and microbiological screening.',
  },
  {
    Icon: FileSearch,
    title: 'Traceability',
    description:
      'Batch-coded processing records and chain-of-custody documentation provide complete, auditable farm-to-factory transparency.',
  },
];

export default function Quality({ isPreview = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section id="quality" className="py-section-y bg-charcoal-900" ref={ref} aria-labelledby="quality-heading">
      <div className="container-site">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <p className="section-label">Our Standards</p>
          <h2
            id="quality-heading"
            className="font-display text-display-md"
            style={{
              color: '#ffffff',
              marginTop: '0.75rem',
              textWrap: 'balance',
              maxWidth: 540,
              marginInline: 'auto',
            }}
          >
            Quality You Can Verify
          </h2>
          <p
            className="text-body-md"
            style={{
              color: 'rgba(255,255,255,0.55)',
              marginTop: '1.25rem',
              maxWidth: 520,
              marginInline: 'auto',
              lineHeight: 1.75,
            }}
          >
            Every batch of Edan &amp; Sherr ginger passes through a rigorous
            four-stage quality system before it is cleared for export.
          </p>
        </motion.div>

        {/* ── Card grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ Icon, title, description }, i) => (
            <motion.div
              key={title}
              className="rounded-xl p-8 text-center relative overflow-hidden group cursor-default"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease }}
              whileHover={{
                backgroundColor: 'rgba(255,255,255,0.08)',
                y: -4,
                transition: { duration: 0.2 },
              }}
            >
              {/* Orange top border — appears on hover via CSS group */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ height: 2, backgroundColor: '#c0345f' }}
              />

              {/* Icon container */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '0.625rem',
                  backgroundColor: 'rgba(117, 168, 93, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.25rem',
                }}
              >
                <Icon size={22} aria-hidden="true" style={{ color: '#ffffff' }} />
              </div>

              <h3
                className="text-heading-sm font-body"
                style={{ color: '#ffffff' }}
              >
                {title}
              </h3>
              <p
                className="text-body-sm"
                style={{
                  color: 'rgba(255,255,255,0.55)',
                  marginTop: '0.625rem',
                  lineHeight: 1.65,
                }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {isPreview && (
          <div className="mt-12 text-center">
            <Link
              href="/standards"
              className="link-arrow text-white font-bold uppercase tracking-widest text-xs opacity-70 hover:opacity-100"
            >
              View Detailed Standards & Certifications <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}

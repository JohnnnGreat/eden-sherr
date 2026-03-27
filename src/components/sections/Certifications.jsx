'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

const ease = [0.25, 0.1, 0.25, 1];

const certs = [
  {
    tag: 'In Progress',
    tagVariant: 'orange',
    title: 'HACCP',
    description:
      'Hazard Analysis and Critical Control Points system being formalised across all processing lines to meet international food safety requirements.',
  },
  {
    tag: 'Planned',
    tagVariant: 'berry',
    title: 'ISO 22000 / FSSC 22000',
    description:
      'Food Safety Management System certification planned as the next milestone — enabling direct access to major European retail and food service chains.',
  },
  {
    tag: 'In Development',
    tagVariant: 'green',
    title: 'GlobalG.A.P.',
    description:
      'Farm-level Good Agricultural Practice certification in development with partner farms to verify responsible sourcing and traceability standards.',
  },
  {
    tag: 'Under Consideration',
    tagVariant: 'berry',
    title: 'Organic Certification',
    description:
      'Exploring the feasibility of USDA/EU organic certification for select farm clusters, subject to soil testing and transition period requirements.',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section
      id="certifications"
      className="py-20"
      ref={ref}
      style={{ backgroundColor: 'rgba(117, 168, 93, 0.07)' }}
    >
      <div className="container-site">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <SectionHeader
            label="Certifications Roadmap"
            title="Working Towards Global Standards"
            description="We are committed to achieving the certifications that matter most to international buyers. Below is a transparent view of where we stand."
            align="center"
          />
        </motion.div>

        {/* ── Card grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {certs.map(({ tag, tagVariant, title, description }, i) => (
            <motion.div
              key={title}
              className="card-hover flex flex-col text-center"
              style={{ padding: '1.75rem' }}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease }}
            >
              <span className={`tag-${tagVariant} self-center`}>{tag}</span>

              <h3
                className="text-heading-sm text-charcoal-900"
                style={{ marginTop: '1rem' }}
              >
                {title}
              </h3>

              <p
                className="text-caption"
                style={{ color: '#877281', marginTop: '0.5rem', lineHeight: 1.65 }}
              >
                {description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

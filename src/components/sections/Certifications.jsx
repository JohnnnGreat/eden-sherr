'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';

const ease = [0.25, 0.1, 0.25, 1];

// dot: filled = active, outlined = upcoming
const certs = [
  {
    step: '01',
    tag: 'In Progress',
    tagVariant: 'orange',
    dot: { bg: '#c0345f', border: '#c0345f' },
    title: 'HACCP',
    description:
      'Hazard Analysis and Critical Control Points system being formalised across all processing lines to meet international food safety requirements.',
  },
  {
    step: '02',
    tag: 'Planned',
    tagVariant: 'berry',
    dot: { bg: '#ffffff', border: '#c0345f' },
    title: 'ISO 22000 / FSSC 22000',
    description:
      'Food Safety Management System certification planned as the next milestone, enabling direct access to major European retail and food service chains.',
  },
  {
    step: '03',
    tag: 'In Development',
    tagVariant: 'green',
    dot: { bg: '#ffffff', border: '#75a85d' },
    title: 'GlobalG.A.P.',
    description:
      'Farm-level Good Agricultural Practice certification in development with partner farms to verify responsible sourcing and traceability standards.',
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
            description="We are committed to achieving the certifications that matter most to international buyers. A transparent view of where we stand."
            align="center"
          />
        </motion.div>

        {/* ── Timeline ── */}
        <div className="mt-16">

          {/*
           * Desktop: horizontal timeline
           * The track line sits at the dot center.
           * Dot center = 1/6, 1/2, 5/6 for 3 columns.
           * Let's use 16.6%, 50%, 83.3%
           */}
          <div className="relative">

            {/* Track line — desktop only */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute"
              style={{
                top: 38,
                left: '16.6%',
                right: '16.6%',
                height: 2,
                backgroundColor: 'rgba(58,51,53,0.1)',
                borderRadius: 9999,
              }}
            />

            {/* Progress fill — first segment (step 01 to 02) */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute"
              style={{
                top: 38,
                left: '16.6%',
                width: '33.3%',
                height: 2,
                backgroundColor: '#c0345f',
                borderRadius: 9999,
              }}
            />

            {/* Items */}
            <div className="grid md:grid-cols-3 gap-0">
              {certs.map(({ step, tag, tagVariant, dot, title, description }, i) => (
                <motion.div
                  key={title}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.13, ease }}
                >

                  {/* ── DESKTOP layout ── */}
                  <div className="hidden md:flex flex-col items-center text-center px-4">

                    {/* Step number */}
                    <p
                      className="text-label-md"
                      style={{ color: 'rgba(58,51,53,0.3)', marginBottom: 10 }}
                    >
                      {step}
                    </p>

                    {/* Dot */}
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        backgroundColor: dot.bg,
                        border: `2.5px solid ${dot.border}`,
                        position: 'relative',
                        zIndex: 1,
                        flexShrink: 0,
                      }}
                    />

                    {/* Content below dot */}
                    <div style={{ marginTop: '1.25rem' }}>
                      <span className={`tag-${tagVariant}`}>{tag}</span>
                      <h3
                        className="text-heading-sm text-charcoal-900"
                        style={{ marginTop: '0.625rem' }}
                      >
                        {title}
                      </h3>
                      <p
                        className="text-caption"
                        style={{ color: '#877281', marginTop: '0.375rem', lineHeight: 1.7 }}
                      >
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* ── MOBILE layout ── */}
                  <div className="md:hidden flex items-start gap-5 pb-10 relative">

                    {/* Left: dot + vertical connector */}
                    <div className="flex flex-col items-center shrink-0" style={{ paddingTop: 3 }}>
                      <div
                        style={{
                          width: 18,
                          height: 18,
                          borderRadius: '50%',
                          backgroundColor: dot.bg,
                          border: `2.5px solid ${dot.border}`,
                          flexShrink: 0,
                          position: 'relative',
                          zIndex: 1,
                        }}
                      />
                      {/* Connector line to next item */}
                      {i < certs.length - 1 && (
                        <div
                          style={{
                            width: 2,
                            flex: 1,
                            minHeight: 48,
                            marginTop: 6,
                            backgroundColor: i === 0
                              ? '#c0345f'
                              : 'rgba(58,51,53,0.1)',
                            borderRadius: 9999,
                          }}
                        />
                      )}
                    </div>

                    {/* Right: content */}
                    <div style={{ paddingBottom: '0.5rem' }}>
                      <p
                        className="text-label-md"
                        style={{ color: 'rgba(58,51,53,0.3)', marginBottom: '0.375rem' }}
                      >
                        {step}
                      </p>
                      <span className={`tag-${tagVariant}`}>{tag}</span>
                      <h3
                        className="text-heading-sm text-charcoal-900"
                        style={{ marginTop: '0.5rem' }}
                      >
                        {title}
                      </h3>
                      <p
                        className="text-caption"
                        style={{ color: '#877281', marginTop: '0.375rem', lineHeight: 1.7 }}
                      >
                        {description}
                      </p>
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Layers, Droplet } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const ease = [0.25, 0.1, 0.25, 1];

const products = [
  {
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=600&q=80',
    imageAlt: 'Dried split ginger root from Southern Kaduna, Nigeria',
    tag: 'Flagship Product',
    tagVariant: 'green',
    title: 'Dried Split Ginger',
    description:
      'Sun-dried and hand-split to preserve the full essential oil profile and characteristic heat of Southern Kaduna ginger. Processed within 48 hours of harvest, each batch is moisture-tested and lab-certified before export.',
    features: ['Strong Aroma', 'High Oil Content', 'Moisture ≤ 12%', 'EU Tested', 'Batch Traceable'],
  },
  {
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80',
    imageAlt: 'Premium ginger powder milled from Southern Kaduna ginger',
    tag: 'Value-Added',
    tagVariant: 'orange',
    title: 'Ginger Powder',
    description:
      'Precision-milled from select Kaduna roots to a consistent 80–100 mesh particle size. Exceptional gingerol content and low microbial counts make this the choice of food manufacturers, herbal brands, and beverage producers worldwide.',
    features: ['80–100 Mesh', 'Gingerol ≥ 1.5%', 'Moisture ≤ 10%', 'Low Microbial Count', 'HACCP Processed'],
  },
];

const comingSoon = [
  { Icon: Sparkles, label: 'Crystallised Ginger' },
  { Icon: Layers, label: 'Ginger Chips & Slices' },
  { Icon: Droplet, label: 'Ginger Oil' },
];

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <section id="products" className="py-section-y bg-white" ref={ref}>
      <div className="container-site">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <SectionHeader
            label="Our Products"
            title="Premium Ginger for Global Markets"
            description="From whole dried root to precision-milled powder — every product we ship meets the rigorous standards of international food safety and buyer specification."
            align="center"
          />
        </motion.div>

        {/* ── Product grid ── */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">
          {products.map(({ image, imageAlt, tag, tagVariant, title, description, features }, i) => (
            <motion.div
              key={title}
              className="card-hover flex flex-col"
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.13, ease }}
            >
              {/* Image */}
              <div
                className="img-frame"
                style={{ position: 'relative', height: '18rem', flexShrink: 0 }}
              >
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Body */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span className={`tag-${tagVariant} self-start`}>{tag}</span>

                <h3
                  className="text-heading-lg text-charcoal-900"
                  style={{ marginTop: '1rem' }}
                >
                  {title}
                </h3>

                <p
                  className="text-body-md"
                  style={{ color: '#6e5b67', lineHeight: 1.75, marginTop: '0.75rem', flex: 1 }}
                >
                  {description}
                </p>

                {/* Feature pills */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '1.5rem',
                  }}
                >
                  {features.map((f) => (
                    <span
                      key={f}
                      className="text-caption"
                      style={{
                        backgroundColor: '#faf7f4',
                        borderRadius: '9999px',
                        padding: '0.375rem 0.75rem',
                        color: '#6e5b67',
                        fontWeight: 500,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="link-arrow"
                  style={{ marginTop: '1.75rem', alignSelf: 'flex-start' }}
                >
                  Request specifications <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Coming Soon banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.5, ease }}
          className="rounded-2xl text-center"
          style={{
            marginTop: '3.5rem',
            backgroundColor: 'rgba(117, 168, 93, 0.08)',
            padding: 'clamp(2.5rem, 5vw, 2.5rem) clamp(1.5rem, 5vw, 2.5rem)',
          }}
        >
          <p className="section-label">Coming Soon</p>
          <p
            className="text-body-md"
            style={{ color: '#6e5b67', marginTop: '0.5rem' }}
          >
            New product lines in development — available for advance inquiry.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.875rem',
              marginTop: '1.75rem',
            }}
          >
            {comingSoon.map(({ Icon, label }) => (
              <div
                key={label}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '9999px',
                  padding: '0.625rem 1.25rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  boxShadow: '0 1px 4px rgba(58, 51, 53, 0.07)',
                }}
              >
                <Icon size={16} aria-hidden="true" style={{ color: '#75a85d', flexShrink: 0 }} />
                <span
                  className="text-body-sm font-body"
                  style={{ fontWeight: 500, color: '#3a3335' }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

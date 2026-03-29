'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Sparkles, Layers, Droplet, CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const ease = [0.25, 0.1, 0.25, 1];

const products = [
  {
    number: '01',
    image: '/images/dried-ginger.jpg',
    imagePosition: 'center center',
    imageAlt: 'Dried split ginger root from Southern Kaduna, Nigeria',
    tag: 'Flagship Product',
    tagVariant: 'green',
    title: 'Dried Split Ginger',
    description:
      'Sourced from carefully selected fresh ginger roots in Southern Kaduna and sun-dried through a controlled process that preserves the natural potency, colour, and characteristic heat that makes Nigerian ginger exceptional.',
    specs: [
      { key: 'Moisture Content', value: '≤ 10–12%' },
      { key: 'Foreign Matter', value: '≤ 1%' },
      { key: 'Admixture', value: '≤ 1%' },
      { key: 'Colour', value: 'Light brown to yellow' },
      { key: 'Form', value: 'Split dried rhizomes' },
      { key: 'Odour', value: 'Strong, typical of Nigerian ginger' },
    ],
    packaging: ['25 kg polypropylene bags', '50 kg polypropylene bags', 'Custom packaging on request'],
    compliance: ['EU pesticide residue tested', 'Aflatoxin tested within limits', 'Batch-level traceability', 'Lab certified prior to export'],
    reversed: false,
  },
  {
    number: '02',
    image: '/images/ginger-powder.jpg',
    imagePosition: 'center 62%',
    imageAlt: 'Premium ginger powder milled from Southern Kaduna ginger',
    tag: 'Value-Added',
    tagVariant: 'orange',
    title: 'Ginger Powder',
    description:
      'Finely milled from high-quality dried ginger to deliver a consistent, aromatic product suitable for a wide range of food, beverage, and nutraceutical applications. Mesh size available as per buyer specification.',
    specs: [
      { key: 'Moisture Content', value: '≤ 10%' },
      { key: 'Mesh Size', value: 'As per requirement' },
      { key: 'Colour', value: 'Light brown' },
      { key: 'Odour', value: 'Strong and aromatic' },
    ],
    applications: ['Food processing', 'Baking & confectionery', 'Beverages', 'Nutraceuticals'],
    compliance: ['HACCP processed', 'Low microbial count', 'Gingerol ≥ 1.5%', 'Lab certified'],
    reversed: true,
  },
];

const comingSoon = [
  { Icon: Sparkles, label: 'Crystallised Ginger' },
  { Icon: Layers, label: 'Ginger Chips & Slices' },
  { Icon: Droplet, label: 'Ginger Oil' },
];

function ProductRow({ product, isInView, index }) {
  const { number, image, imageAlt, imagePosition, tag, tagVariant, title, description, specs, packaging, applications, compliance, reversed } = product;

  const imageCol = (
    <div
      className="relative"
      style={{ minHeight: '22rem' }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: reversed ? '0 1.25rem 1.25rem 0' : '1.25rem 0 0 1.25rem',
          overflow: 'hidden',
        }}
        className="rounded-xl lg:rounded-none"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          style={{ objectFit: 'cover', objectPosition: imagePosition || 'center center' }}
        />
        {/* Subtle inner shadow to blend with page */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            background: reversed
              ? 'linear-gradient(to right, rgba(250,245,236,0.18) 0%, transparent 30%)'
              : 'linear-gradient(to left, rgba(250,245,236,0.18) 0%, transparent 30%)',
          }}
        />
      </div>
    </div>
  );

  const contentCol = (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem)',
      }}
    >
      {/* Product number */}
      <p
        className="font-display"
        style={{
          fontSize: 'clamp(3.5rem, 7vw, 5rem)',
          lineHeight: 1,
          color: 'rgba(58,51,53,0.06)',
          fontWeight: 600,
          letterSpacing: '-0.04em',
          marginBottom: '-0.5rem',
        }}
      >
        {number}
      </p>

      <span className={`tag-${tagVariant} self-start`}>{tag}</span>

      <h3
        className="text-display-md text-charcoal-900"
        style={{ marginTop: '0.875rem' }}
      >
        {title}
      </h3>

      <p
        className="text-body-md"
        style={{ color: '#6e5b67', lineHeight: 1.8, marginTop: '0.875rem', maxWidth: 460 }}
      >
        {description}
      </p>

      {/* Specifications */}
      <div style={{ marginTop: '2rem' }}>
        <p
          className="text-label-md"
          style={{ color: 'rgba(58,51,53,0.4)', marginBottom: '0.875rem' }}
        >
          Typical Specifications
        </p>
        <dl
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
          }}
        >
          {specs.map(({ key, value }, i) => (
            <div
              key={key}
              style={{
                padding: '0.625rem 0',
                borderBottom: '1px solid rgba(58,51,53,0.07)',
                paddingRight: i % 2 === 0 ? '1rem' : 0,
              }}
            >
              <dt className="text-caption" style={{ color: '#877281' }}>{key}</dt>
              <dd
                className="text-body-sm text-charcoal-900"
                style={{ fontWeight: 600, marginTop: '0.125rem' }}
              >
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Applications (powder only) */}
      {applications && (
        <div style={{ marginTop: '1.5rem' }}>
          <p
            className="text-label-md"
            style={{ color: 'rgba(58,51,53,0.4)', marginBottom: '0.625rem' }}
          >
            Applications
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {applications.map((a) => (
              <span
                key={a}
                className="text-caption"
                style={{
                  backgroundColor: 'rgba(117,168,93,0.1)',
                  color: '#3e642e',
                  borderRadius: '9999px',
                  padding: '0.25rem 0.75rem',
                  fontWeight: 500,
                }}
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Packaging (dried ginger only) */}
      {packaging && (
        <div style={{ marginTop: '1.5rem' }}>
          <p
            className="text-label-md"
            style={{ color: 'rgba(58,51,53,0.4)', marginBottom: '0.625rem' }}
          >
            Packaging
          </p>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {packaging.map((p) => (
              <li
                key={p}
                className="text-body-sm"
                style={{ color: '#6e5b67', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <span style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: '#75a85d', flexShrink: 0 }} />
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Compliance */}
      <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {compliance.map((c) => (
          <span
            key={c}
            className="text-caption"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              color: '#3a3335',
              backgroundColor: 'rgba(58,51,53,0.05)',
              borderRadius: '9999px',
              padding: '0.25rem 0.625rem',
            }}
          >
            <CheckCircle size={11} style={{ color: '#75a85d', flexShrink: 0 }} aria-hidden="true" />
            {c}
          </span>
        ))}
      </div>

      <a
        href="#contact"
        className="link-arrow"
        style={{ marginTop: '2rem', alignSelf: 'flex-start' }}
      >
        Request specifications <ArrowRight size={15} aria-hidden="true" />
      </a>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.1, ease }}
      className="grid lg:grid-cols-[55fr_45fr] overflow-hidden"
      style={{
        borderRadius: '1.25rem',
        border: '1px solid rgba(58,51,53,0.08)',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 32px -8px rgba(58,51,53,0.08)',
        minHeight: '28rem',
      }}
    >
      {reversed ? (
        <>
          <div className="order-1 lg:order-2">{imageCol}</div>
          <div className="order-2 lg:order-1">{contentCol}</div>
        </>
      ) : (
        <>
          {imageCol}
          {contentCol}
        </>
      )}
    </motion.div>
  );
}

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

        {/* ── Product rows ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '4rem' }}>
          {products.map((product, i) => (
            <ProductRow
              key={product.title}
              product={product}
              isInView={isInView}
              index={i}
            />
          ))}
        </div>

        {/* ── Coming Soon ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.45, ease }}
          style={{
            marginTop: '3rem',
            border: '1px dashed rgba(117,168,93,0.35)',
            borderRadius: '1.25rem',
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            backgroundColor: 'rgba(117,168,93,0.04)',
          }}
        >
          <div>
            <p className="section-label">Coming Soon</p>
            <p className="text-body-sm" style={{ color: '#6e5b67', marginTop: '0.25rem' }}>
              New product lines in development — available for advance inquiry.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {comingSoon.map(({ Icon, label }) => (
              <div
                key={label}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '9999px',
                  padding: '0.5rem 1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  border: '1px solid rgba(58,51,53,0.08)',
                }}
              >
                <Icon size={14} aria-hidden="true" style={{ color: '#75a85d', flexShrink: 0 }} />
                <span className="text-body-sm" style={{ fontWeight: 500, color: '#3a3335' }}>
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

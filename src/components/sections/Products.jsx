'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Clock3, FlaskConical, Leaf } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';

const ease = [0.25, 0.1, 0.25, 1];

const ALL_PRODUCTS = [
  {
    id: 'rhizomes',
    title: 'Fresh Ginger Rhizomes',
    description:
      'Harvested at peak maturity from Southern Kaduna farms. Available in bulk volumes with custom sizing for fresh produce importers and processors.',
    image: '/images/ginger-hero.jpg',
    status: 'available',
    specs: [
      { key: 'Form', value: 'Whole rhizomes' },
      { key: 'Origin', value: 'Southern Kaduna' },
      { key: 'Packing', value: 'Buyer specification' },
    ],
    badges: ['Traceable', 'Export Ready'],
    cta: 'Enquire',
  },
  {
    id: 'dried',
    title: 'Dried Split Ginger',
    description:
      'Produced through controlled drying to preserve pungency, colour, and aroma. Suitable for industrial food ingredient sourcing.',
    image: '/images/dried-ginger.jpg',
    status: 'available',
    specs: [
      { key: 'Moisture', value: '<= 10-12%' },
      { key: 'Foreign matter', value: '<= 1%' },
      { key: 'Packaging', value: '25 / 50kg PP bags' },
    ],
    badges: ['EU Tested', 'Aflatoxin Tested', 'Lab Verified'],
    cta: 'Request Specifications',
  },
  {
    id: 'powder',
    title: 'Ginger Powder',
    description:
      'Finely milled from premium dried ginger for spice blenders, food manufacturers, and nutraceutical processors.',
    image: '/images/ginger-powder.jpg',
    status: 'available',
    specs: [
      { key: 'Moisture', value: '<= 10%' },
      { key: 'Gingerol', value: '>= 1.5%' },
      { key: 'Mesh size', value: 'As required' },
    ],
    badges: ['Low Microbial', 'Lab Certified', 'Traceable'],
    cta: 'Request Specifications',
  },
  {
    id: 'oil',
    title: 'Ginger Oil',
    description:
      'Steam-distilled essential oil from Nigerian ginger for flavour, cosmetic, and specialty ingredient applications.',
    image: '/images/ginger-about.jpg',
    status: 'coming-soon',
    specs: [
      { key: 'Method', value: 'Steam distillation' },
      { key: 'Grade', value: 'Food and cosmetic' },
      { key: 'Availability', value: 'Roadmap batch' },
    ],
    badges: ['Upcoming'],
    cta: 'Register Interest',
  },
];

function ProductIcon({ productId }) {
  if (productId === 'rhizomes') {
    return <Leaf size={18} className="text-green-700" />;
  }

  if (productId === 'dried') {
    return <Clock3 size={18} className="text-green-700" />;
  }

  return <FlaskConical size={18} className="text-green-700" />;
}

function ProductCard({ product, index, isInView }) {
  const isComingSoon = product.status === 'coming-soon';

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease }}
      className="relative flex flex-col h-full rounded-2xl overflow-hidden border bg-white transition-all duration-300"
      style={{
        borderColor: isComingSoon ? 'rgba(58, 51, 53, 0.2)' : 'rgba(58, 51, 53, 0.1)',
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <span
          className="text-label-sm"
          style={{
            position: 'absolute',
            top: 12,
            left: 12,
            padding: '0.25rem 0.6rem',
            borderRadius: '9999px',
            backgroundColor: isComingSoon ? 'rgba(32, 28, 30, 0.85)' : 'rgba(255, 255, 255, 0.9)',
            color: isComingSoon ? '#f5f1ec' : '#5a4a55',
            border: '1px solid rgba(255,255,255,0.4)',
          }}
        >
          {isComingSoon ? 'Coming Soon' : 'Available'}
        </span>
      </div>

      <div className="p-6 pb-4 flex items-start gap-3">
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: '0.5rem',
            backgroundColor: 'rgba(117, 168, 93, 0.16)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <ProductIcon productId={product.id} />
        </div>

        <div>
          <h3 className="text-heading-md text-charcoal-900">{product.title}</h3>
          <p className="text-body-sm mt-2 text-charcoal-600" style={{ lineHeight: 1.7 }}>
            {product.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-4">
        <div className="border-t border-charcoal-100 pt-3">
          {product.specs.map((spec) => (
            <div key={spec.key} className="flex justify-between text-body-sm py-1">
              <span className="text-charcoal-500">{spec.key}</span>
              <span className="font-medium text-charcoal-800 text-right">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {product.badges.map((badge) => (
            <span
              key={badge}
              className="text-label-sm"
              style={{
                backgroundColor: 'rgba(117, 168, 93, 0.12)',
                color: '#3e642e',
                border: '1px solid rgba(117, 168, 93, 0.2)',
                borderRadius: '9999px',
                padding: '0.2rem 0.5rem',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto px-6 pb-6">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors text-green-700 hover:text-green-800"
        >
          {product.cta}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

export default function Products({ isPreview = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  const displayedProducts = isPreview ? ALL_PRODUCTS.slice(0, 3) : ALL_PRODUCTS;

  return (
    <section id="products" className="py-section-y bg-white" ref={ref}>
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <SectionHeader
            label="Our Products"
            title="Premium Ginger Solutions"
            description="From industrial inputs to specialized extracts, we provide high-grade Nigerian ginger in commercially reliable formats with full traceability."
            align="center"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          {displayedProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {isPreview && (
          <div className="mt-12 text-center">
            <Link href="/products" className="btn-primary">
              View Full Product Catalog
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

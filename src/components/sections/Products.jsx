'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Clock, Beaker, Leaf, Info } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';

const ease = [0.25, 0.1, 0.25, 1];

const ALL_PRODUCTS = [
  {
    id: 'rhizomes',
    title: 'Fresh Ginger Rhizomes',
    description: 'Harvested at peak maturity from Southern Kaduna farms. Available in bulk volumes with custom sizing. Ideal for fresh produce importers and food processing companies.',
    image: '/images/ginger-hero.jpg', // Placeholder for fresh
    status: 'active',
    specs: [
      { key: 'Form', value: 'Whole rhizomes' },
      { key: 'Origin', value: 'Southern Kaduna' }
    ],
    cta: 'Enquire',
  },
  {
    id: 'dried',
    title: 'Dried Split Ginger',
    description: 'Sourced from carefully selected fresh ginger roots in Southern Kaduna, dried through a controlled process that preserves the natural potency, colour, and characteristic heat that makes Nigerian ginger exceptional.',
    image: '/images/dried-ginger.jpg',
    status: 'active',
    specs: [
      { key: 'Moisture', value: '≤ 10–12%' },
      { key: 'Foreign matter', value: '≤ 1%' },
      { key: 'Packaging', value: '25 / 50 kg PP bags' }
    ],
    badges: ['EU Pesticide Tested', 'Aflatoxin Tested', 'Lab Certified'],
    cta: 'Request Specifications',
  },
  {
    id: 'powder',
    title: 'Ginger Powder',
    description: 'Finely milled from premium dried ginger. Used by spice blenders, food manufacturers, and nutraceutical processors globally. Mesh size to buyer specification.',
    image: '/images/ginger-powder.jpg',
    status: 'active',
    specs: [
      { key: 'Moisture', value: '≤ 10%' },
      { key: 'Gingerol', value: '≥ 1.5%' },
      { key: 'Mesh size', value: 'As required' }
    ],
    badges: ['Low Microbial Count', 'Lab Certified', 'Traceable'],
    cta: 'Request Specifications',
  },
  {
    id: 'oil',
    title: 'Ginger Oil',
    description: 'Steam-distilled essential oil from Nigerian ginger. High in zingiberene and volatile compounds. Used in flavour manufacturing, cosmetics, and pharmaceutical applications.',
    image: '/images/ginger-hero.jpg', // Placeholder
    status: 'coming-soon',
    specs: [
      { key: 'Method', value: 'Steam distillation' },
      { key: 'Grade', value: 'Food & cosmetic' }
    ],
    cta: 'Register Interest',
  },
  {
    id: 'oleoresin',
    title: 'Ginger Oleoresin',
    description: 'Concentrated extract with high gingerol content and consistent batch-to-batch profile. Available in food and pharmaceutical grades for flavour manufacturers and nutraceutical producers.',
    image: '/images/ginger-hero.jpg', // Placeholder
    status: 'coming-soon',
    specs: [
      { key: 'Gingerol content', value: 'High — food grade' },
      { key: 'Application', value: 'Food & pharma' }
    ],
    cta: 'Register Interest',
  },
  {
    id: 'crystallised',
    title: 'Crystallised Ginger',
    description: 'Candied ginger produced from premium Nigerian rhizomes. Sought after by confectionery manufacturers, premium food brands, and specialty ingredient distributors worldwide.',
    image: '/images/ginger-hero.jpg', // Placeholder
    status: 'coming-soon',
    specs: [
      { key: 'Form', value: 'Pieces / slices' },
      { key: 'Application', value: 'Confectionery & food' }
    ],
    cta: 'Register Interest',
  },
];

function ProductCard({ product, index, isInView }) {
  const isComingSoon = product.status === 'coming-soon';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease }}
      className={`relative flex flex-col h-full rounded-2xl overflow-hidden border transition-all duration-300 ${
        isComingSoon 
          ? 'bg-charcoal-900 border-charcoal-800 text-white' 
          : 'bg-white border-charcoal-100/50 hover:shadow-xl hover:shadow-charcoal-900/5'
      }`}
    >
      {/* Header Info */}
      <div className="p-6 pb-4">
        <div className="flex justify-between items-start mb-4">
          <div className={`p-2 rounded-lg ${isComingSoon ? 'bg-white/10' : 'bg-green-50'}`}>
            {product.id === 'rhizomes' && <Leaf size={20} className={isComingSoon ? 'text-white' : 'text-green-600'} />}
            {product.id === 'dried' && <Clock size={20} className={isComingSoon ? 'text-white' : 'text-green-600'} />}
            {product.id === 'powder' && <Beaker size={20} className={isComingSoon ? 'text-white' : 'text-green-600'} />}
            {isComingSoon && <Info size={20} className="text-white" />}
          </div>
          {isComingSoon && (
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/10 px-2 py-1 rounded text-white/70 border border-white/10">
              Coming Soon
            </span>
          )}
        </div>
        
        <h3 className={`text-xl font-display ${isComingSoon ? 'text-white' : 'text-charcoal-900'}`}>
          {product.title}
        </h3>
        
        <p className={`text-sm mt-3 leading-relaxed mb-6 ${isComingSoon ? 'text-white/60' : 'text-charcoal-500'}`}>
          {product.description}
        </p>

        {/* Specs List */}
        <div className={`border-t pt-4 ${isComingSoon ? 'border-white/10' : 'border-charcoal-50'}`}>
          {product.specs.map(spec => (
            <div key={spec.key} className="flex justify-between text-[11px] py-1">
              <span className={isComingSoon ? 'text-white/40' : 'text-charcoal-400'}>{spec.key}</span>
              <span className={`font-semibold ${isComingSoon ? 'text-white/80' : 'text-charcoal-800'}`}>{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Badges */}
        {product.badges && (
          <div className="flex flex-wrap gap-1.5 mt-4">
            {product.badges.map(badge => (
              <span key={badge} className={`text-[9px] font-bold uppercase tracking-tight px-1.5 py-0.5 rounded ${
                isComingSoon ? 'bg-white/5 text-white/50 border border-white/10' : 'bg-green-50 text-green-700 border border-green-100'
              }`}>
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-auto p-6 pt-0">
        <a 
          href="#contact"
          className={`group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${
            isComingSoon ? 'text-white hover:text-green-400' : 'text-green-600 hover:text-green-700'
          }`}
        >
          {product.cta}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
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
            description="From industrial inputs to specialized extracts, we provide high-grade Nigerian ginger across its diverse forms, all with complete traceability."
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
            <Link
              href="/products"
              className="btn-primary"
            >
              View Full Product Catalog
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}


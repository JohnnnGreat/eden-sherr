'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { Leaf, Settings, FlaskConical, Globe } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const ease = [0.25, 0.1, 0.25, 1];

const highlights = [
  {
    Icon: Leaf,
    title: 'Farm-to-Factory Traceability',
    description: 'Every batch linked to registered farms in Southern Kaduna with full chain-of-custody records.',
    bg: 'rgba(117, 168, 93, 0.12)',
    color: '#75a85d',
  },
  {
    Icon: Settings,
    title: 'Precision Processing',
    description: 'State-of-the-art drying, milling, and steam-treatment facilities calibrated to international specs.',
    bg: 'rgba(58, 51, 53, 0.08)',
    color: '#3a3335',
  },
  {
    Icon: FlaskConical,
    title: 'Rigorous Quality Testing',
    description: 'In-house and third-party lab verification for moisture, microbials, aflatoxins, and gingerol content.',
    bg: 'rgba(180, 67, 108, 0.1)',
    color: '#b4436c',
  },
  {
    Icon: Globe,
    title: 'Export-Ready Compliance',
    description: 'NAFDAC, NEPC, and phytosanitary documentation in place for EU, US, and Asian market entry.',
    bg: 'rgba(192, 52, 95, 0.12)',
    color: '#c0345f',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section className="py-section-y bg-white" ref={ref}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── LEFT: Image with green offset border ── */}
          <motion.div
            initial={{ opacity: 0, x: -44 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
          >
            {/*
             * Outer wrapper carries paddingTop + paddingLeft to create room
             * for the green border div that sits at top-left (behind the image).
             */}
            <div style={{ position: 'relative', paddingTop: 20, paddingLeft: 20 }}>

              {/* Green offset border — behind the image */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 20,
                  bottom: 20,
                  borderRadius: '0.75rem',
                  border: '1.5px solid rgba(117, 168, 93, 0.38)',
                }}
              />

              {/* Image frame */}
              <div
                className="img-frame"
                style={{ position: 'relative', aspectRatio: '3 / 4', width: '100%' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80"
                  alt="Agricultural landscape in Nigeria — ginger farming region"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT: Content ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease }}
            >
              <SectionHeader
                label="About Us"
                title="Unlocking the Full Value of Nigerian Ginger"
              />

              <p
                className="text-body-md mt-6"
                style={{ color: '#6e5b67', lineHeight: 1.75 }}
              >
                Edan &amp; Sherr was founded on a simple conviction: Nigerian ginger is
                among the finest in the world, yet it has long been undervalued in global
                markets. We exist to change that by building a supply chain that honours
                the farmer, respects the crop, and delivers a product worthy of the world&apos;s
                most discerning buyers.
              </p>

              <p
                className="text-body-md mt-4"
                style={{ color: '#6e5b67', lineHeight: 1.75 }}
              >
                Operating from Southern Kaduna, Nigeria&apos;s premier ginger belt, we work
                directly with over 200 smallholder farming families, providing technical
                support, fair farm-gate pricing, and guaranteed offtake. Our processing
                facilities then transform that raw material into export-grade dried ginger,
                powder, and steam-treated product that meets EU, US, and Asian regulatory
                standards.
              </p>
            </motion.div>

            {/* ── 2×2 Highlight grid ── */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {highlights.map(({ Icon, title, description, bg, color }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease }}
                >
                  {/* Icon square */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '0.5rem',
                      backgroundColor: bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '0.75rem',
                      color,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} aria-hidden="true" />
                  </div>

                  <p
                    className="font-body text-body-sm"
                    style={{ fontWeight: 600, color: '#3a3335' }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-caption mt-1"
                    style={{ lineHeight: 1.6 }}
                  >
                    {description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const ease = [0.25, 0.1, 0.25, 1];

const PARAGRAPHS = [
  "She did not come to ginger through business. She came through the land, through a grandfather who devoted his life to it, and generations of farming families who understood long before the world did how extraordinary Nigeria's ginger truly is.",
  "Nigeria is home to some of the world's highest quality ginger, prized for its rich aroma, bold flavour, and exceptional oil content. For her, this is more than a market opportunity. It is the story of people, place, and agricultural heritage.",
  "Her grandfather, one of the most dedicated farmers of his time, devoted his life to the land. After him came parents, uncles, cousins, and countless others who cultivated ginger of remarkable strength and character.",
  "Yet despite its quality, much of that value remained unrealised. Edan & Sherr was founded to change that by building the processing standards and market bridge required for global trade.",
  "The mission is clear: unlock the full value of Nigeria's world-class ginger and present it to international buyers with the quality, consistency, and transparency they expect.",
];

export default function Story({ isPreview = false, detailed = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  const firstBlock = PARAGRAPHS.slice(0, 2);
  const secondBlock = PARAGRAPHS.slice(2);

  return (
    <section id="story" className="py-section-y bg-cream" ref={ref} aria-labelledby="story-heading">
      <div className="container-site">
        <div className="max-w-content mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <SectionHeader
              id="story-heading"
              label="Founder's Story"
              title="A Legacy of Ginger, A Vision for the World"
              align="center"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease }}
            style={{ position: 'relative', marginTop: '3.5rem', textAlign: 'center' }}
          >
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
                opacity: 0.14,
                userSelect: 'none',
                pointerEvents: 'none',
                zIndex: 0,
              }}
            >
              &ldquo;
            </span>

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
              She came through the land, through a grandfather who devoted his life to it,
              and generations of farming families.
            </blockquote>
          </motion.div>

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

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {firstBlock.map((text, i) => (
              <motion.p
                key={i}
                className={detailed ? 'text-body-lg' : 'text-body-md'}
                style={{ color: '#6e5b67', lineHeight: 1.85 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.12, ease }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {detailed && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16 items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-white/50 p-2">
                <Image
                  src="/founder-1.png"
                  alt="Founder heritage and land"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-white/50 p-2 md:translate-y-20">
                <Image
                  src="/funder-2.png"
                  alt="Processing heritage"
                  width={800}
                  height={1100}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          )}

          {!isPreview && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {secondBlock.map((text, i) => (
                <motion.p
                  key={i}
                  className={detailed ? 'text-body-lg' : 'text-body-md'}
                  style={{ color: '#6e5b67', lineHeight: 1.85 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.2 + i * 0.12, ease }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          )}

          {isPreview && (
            <div className="mt-10 text-center">
              <Link
                href="/story"
                className="link-arrow text-green-700 font-bold uppercase tracking-widest text-xs"
              >
                Read Full Story <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import Image from 'next/image';

const ease = [0.25, 0.1, 0.25, 1];

const PARAGRAPHS = [
  "She did not come to ginger through business. She came through the land — through a grandfather who devoted his life to it, and generations of farming families who understood, long before the world did, just how extraordinary Nigeria's ginger truly is.",

  "Nigeria is home to some of the world's highest quality ginger, prized for its rich aroma, bold flavour, and exceptional oil content. For me, this is not a market opportunity. It is the land I grew up in, and the story of the people who shaped it.",

  "My grandfather, one of the most dedicated farmers of his time, devoted his life to the land. After him came my parents, uncles, cousins, and countless others — men and women who worked tirelessly in rich red soils under open skies, cultivating a crop that carries both heritage and pride. Season after season, they produced ginger of remarkable strength and character. What I still believe to be some of the boldest and most aromatic ginger in the world.",

  "Yet despite its quality, much of its true value remained unrealised. The world had not fully experienced it as it should. I watched as each generation, in its own way, tried to bring this extraordinary resource to the global stage — often constrained by limitations beyond their control.",

  "That is where the story begins to change. Edan & Sherr Limited was founded with a clear vision: to unlock the full value of Nigeria's world-class ginger and share its true potential with the world.",
];

export default function Story({ isPreview = false, detailed = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  // Separate paragraphs for gallery insertion
  const firstBlock = PARAGRAPHS.slice(0, 2);
  const secondBlock = PARAGRAPHS.slice(2);

  return (
    <section id="story" className="py-section-y bg-cream" ref={ref} aria-labelledby="story-heading">
      <div className="container-site">
        <div className="max-w-content mx-auto">

          {/* ── Section header — centered ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
          >
            <SectionHeader
              label="Founder's Story"
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
              She did not come to ginger through business. She came through the land
              — through a grandfather who devoted his life to it, and generations of
              farming families.
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

          {/* ── Story Content Block 1 ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {firstBlock.map((text, i) => (
              <motion.p
                key={i}
                className={detailed ? "text-body-lg" : "text-body-md"}
                style={{ color: '#6e5b67', lineHeight: 1.85 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.35 + i * 0.12, ease }}
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* ── Editorial Gallery (Detailed Mode Only) ── */}
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

          {/* ── Story Content Block 2 ── */}
          {!isPreview && (
             <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               {secondBlock.map((text, i) => (
                 <motion.p
                   key={i}
                   className={detailed ? "text-body-lg" : "text-body-md"}
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

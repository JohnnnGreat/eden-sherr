'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * AnimateOnScroll
 *
 * Fades children up into view when they enter the viewport.
 *
 * Props:
 *   children  {ReactNode}
 *   delay     {number=}   — animation delay in seconds (default 0)
 *   className {string=}   — passed to the motion wrapper div
 */
export default function AnimateOnScroll({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -80px 0px' });

  return (
    <motion.div
      ref={ref}
      className={className || undefined}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

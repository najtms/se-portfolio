'use client';

import { motion, useReducedMotion } from 'motion/react';

// Single ECG-style pulse at x≈680-720 in a 1200×80 viewBox.
// Spike position maps to the copy/portrait boundary at desktop widths.
const PATH =
  'M -10 40 L 680 40 L 688 8 L 698 76 L 706 24 L 714 40 L 760 40 L 1210 40';

export function Waveform() {
  const isReduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2"
    >
      <svg
        viewBox="0 0 1200 80"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-[80px]"
      >
        {isReduced ? (
          <path
            d={PATH}
            stroke="var(--color-signal)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.14"
          />
        ) : (
          <motion.path
            d={PATH}
            stroke="var(--color-signal)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.14 }}
            transition={{
              pathLength: { duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
              opacity: { duration: 0.5, delay: 0.1 },
            }}
          />
        )}
      </svg>
    </div>
  );
}
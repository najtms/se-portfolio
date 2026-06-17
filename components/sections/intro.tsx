'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import * as mv from '@/lib/motion';

const FIGURES = [
  { value: '~5 yrs',    label: 'engineering' },
  { value: '~3.8 yrs',  label: 'GDG Co-Organizer' },
  { value: '1 product', label: 'founded & owned' },
] as const;

const paraReveal: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const figureContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const figureItem: Variants = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function IntroSection() {
  const isReduced = useReducedMotion();
  const rf = (full: Variants): Variants => (isReduced ? mv.reducedFade : full);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="intro"
      aria-label="About Ahmed"
      className="section-gap"
      ref={ref}
    >
      <div className="container-site">
        <motion.p
          className="type-body-lg text-muted"
          style={{ maxWidth: '62ch' }}
          variants={rf(paraReveal)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Five years building software — from logistics backends to production systems at{' '}
          <span className="text-hi">HYCU</span> running across GCP, AWS, and Azure.
          For ~4 years I&apos;ve helped lead Google&apos;s developer community in Sarajevo.
          Today I&apos;m putting it all into <span className="text-hi">DOX</span>.
        </motion.p>

        {/* Inline figures — quiet typographic accents, not metric cards */}
        <motion.div
          className="mt-10 flex flex-wrap items-center gap-y-4"
          variants={rf(figureContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {FIGURES.map(({ value, label }, i) => (
            <motion.div
              key={label}
              variants={rf(figureItem)}
              className="flex items-baseline gap-2"
            >
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="mx-4 select-none"
                  style={{ color: 'var(--ink-line)', fontSize: '0.75rem' }}
                >
                  ·
                </span>
              )}
              <span
                className="font-sans font-medium text-hi"
                style={{ fontSize: '1.0625rem', letterSpacing: '-0.01em' }}
              >
                {value}
              </span>
              <span className="type-label text-faint">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

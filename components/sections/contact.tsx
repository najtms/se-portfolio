'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ahmed } from '@/content/ahmed';
import * as mv from '@/lib/motion';

const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const slideUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function ContactSection() {
  const isReduced = useReducedMotion();
  const rf = (full: Variants): Variants => (isReduced ? mv.reducedFade : full);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="contact"
      aria-label="Contact Ahmed"
      className="section-gap-lg"
      ref={ref}
    >
      <div className="container-site">
        <motion.div
          className="max-w-[32rem]"
          variants={rf(stagger)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 className="type-h1 text-hi mb-10" variants={rf(slideUp)}>
            Let&apos;s build something.
          </motion.h2>

          <motion.div className="flex flex-col gap-4" variants={rf(slideUp)}>
            {/* Primary — email */}
            <a
              href={`mailto:${ahmed.contact.email}`}
              className="group inline-flex items-center gap-2 transition-colors duration-[var(--dur-fast)] hover:text-signal"
              style={{ color: 'var(--text-hi)', fontSize: 'clamp(1.1rem, 1.4vw, 1.3rem)' }}
              aria-label={`Send email to ${ahmed.contact.email}`}
            >
              {ahmed.contact.email}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="opacity-40 transition-[transform,opacity] duration-[var(--dur-fast)] group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <path
                  d="M2 14L14 2M14 2H6M14 2V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            {/* Secondary — LinkedIn */}
            <a
              href={ahmed.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 type-body text-muted transition-colors duration-[var(--dur-fast)] hover:text-hi"
              aria-label="Ahmed Assaad on LinkedIn (opens in new tab)"
            >
              LinkedIn
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                aria-hidden="true"
                className="opacity-40 transition-opacity duration-[var(--dur-fast)] group-hover:opacity-100"
              >
                <path
                  d="M1 10L10 1M10 1H4M10 1V7"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <p className="type-label text-faint">{ahmed.location}</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

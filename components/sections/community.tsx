'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ahmed } from '@/content/ahmed';
import * as mv from '@/lib/motion';

const FIGURES = [
  { value: '3.8+', label: 'Years as GDG Co-Organizer' },
  { value: '3+',   label: 'DevFest Events Organized' },
  { value: 'GCP',  label: 'Cloud Platform Mentor' },
] as const;

export function CommunitySection() {
  const isReduced = useReducedMotion();
  const rf = (full: Variants): Variants => (isReduced ? mv.reducedFade : full);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const { community } = ahmed;

  return (
    <section
      id="community"
      aria-label="Community and Leadership"
      className="section-gap"
      ref={ref}
    >
      <div className="container-site">
        <motion.h2
          className="type-h1 text-hi mb-10 lg:mb-12"
          style={{ maxWidth: '24ch' }}
          variants={rf(mv.sectionReveal)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Leading the developer community in Sarajevo.
        </motion.h2>

        <motion.p
          className="type-body-lg text-muted mb-10 lg:mb-12"
          style={{ maxWidth: '58ch' }}
          variants={rf(mv.sectionReveal)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          For close to four years I&apos;ve co-organized the{' '}
          <span className="text-hi">{community.organization}</span> —
          running DevFest events, mentoring developers on Google Cloud Platform,
          and helping build the local engineering community.
        </motion.p>

        {/* Figures bar — typographic, NOT cards */}
        <motion.div
          className="mb-10 lg:mb-12 flex flex-wrap gap-x-12 gap-y-6 border-hairline-t border-hairline-b py-8"
          variants={rf(mv.workContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {FIGURES.map(({ value, label }) => (
            <motion.div key={label} variants={rf(mv.workItem)}>
              <p
                className="font-sans font-medium text-hi"
                style={{
                  fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {value}
              </p>
              <p className="type-label text-faint mt-1.5">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Responsibilities */}
        <motion.ul
          className="flex flex-col gap-3"
          aria-label="Community roles and responsibilities"
          variants={rf(mv.timelineContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {community.responsibilities.map((r) => (
            <motion.li
              key={r}
              variants={rf(mv.timelineEntry)}
              className="flex items-start gap-3 type-body text-muted"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 flex-shrink-0 rounded-full"
                style={{ background: 'var(--signal)' }}
              />
              {r}
            </motion.li>
          ))}
        </motion.ul>

        {/* Event photo grid — wired for real assets, graceful when empty */}
        {community.eventPhotos.length > 0 ? (
          <div className="mt-12 lg:mt-14">
            <p className="type-label text-faint mb-4">GDG Sarajevo Events</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {community.eventPhotos.slice(0, 6).map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt="GDG Sarajevo community event"
                  className="aspect-video w-full rounded-sm object-cover"
                  style={{ border: '1px solid var(--ink-line)' }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-12 lg:mt-14" aria-hidden="true">
            <p className="type-label text-faint mb-4">GDG Sarajevo Events</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="aspect-video rounded-sm"
                  style={{
                    background: 'var(--ink-surface-1)',
                    border: '1px dashed var(--ink-line)',
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

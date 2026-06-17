'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ahmed } from '@/content/ahmed';
import * as mv from '@/lib/motion';

export function ExperienceSection() {
  const isReduced = useReducedMotion();
  const rf = (full: Variants): Variants => (isReduced ? mv.reducedFade : full);

  const sectionRef  = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const titleInView    = useInView(sectionRef,  { once: true, margin: '-80px' });
  const timelineInView = useInView(timelineRef, { once: true, margin: '-40px' });

  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="section-gap"
      ref={sectionRef}
    >
      <div className="container-site">
        <motion.h2
          className="type-h1 text-hi mb-12 lg:mb-16"
          variants={rf(mv.sectionReveal)}
          initial="hidden"
          animate={titleInView ? 'visible' : 'hidden'}
        >
          Experience
        </motion.h2>

        <div
          ref={timelineRef}
          className="relative"
          style={{ paddingLeft: '3rem' }}
        >
          {/* Vertical line — draws down on scroll */}
          <motion.div
            aria-hidden="true"
            className="absolute w-px"
            style={{
              left: '11px',
              top: '8px',
              height: 'calc(100% - 24px)',
              background: 'var(--ink-line)',
              transformOrigin: 'top',
            }}
            initial={{ scaleY: 0 }}
            animate={timelineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          />

          {/* Entries */}
          <motion.div
            variants={rf(mv.timelineContainer)}
            initial="hidden"
            animate={timelineInView ? 'visible' : 'hidden'}
          >
            {ahmed.experience.map((entry) => {
              const isDox      = entry.id === 'dox';
              const isHycu     = entry.id === 'hycu';
              const isFeatured = entry.featured;

              return (
                <motion.div
                  key={entry.id}
                  variants={rf(mv.timelineEntry)}
                  className="relative"
                  style={{ marginBottom: isFeatured ? '3.5rem' : '2.25rem' }}
                >
                  {/* Timeline dot */}
                  <div
                    aria-hidden="true"
                    className="absolute rounded-full"
                    style={{
                      left: 'calc(11px - 3rem)',
                      top: '4px',
                      width: '12px',
                      height: '12px',
                      transform: 'translateX(-50%)',
                      border: `1.5px solid ${isDox ? 'var(--signal)' : 'var(--ink-line)'}`,
                      background: isDox ? 'var(--signal)' : 'var(--ink-base)',
                      boxShadow: isDox ? '0 0 8px oklch(0.80 0.105 188 / 0.4)' : 'none',
                    }}
                  />

                  {/* Date + content — stacks on mobile, side-by-side on sm+ */}
                  <div
                    className="sm:grid"
                    style={{ gridTemplateColumns: '150px 1fr', columnGap: '2.5rem' }}
                  >
                    <p className="type-label text-faint mb-1 sm:mb-0 sm:pt-0.5">
                      {entry.period.start}&nbsp;—&nbsp;{entry.period.end}
                    </p>

                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-0.5">
                        <h3
                          className="font-medium text-hi"
                          style={{
                            fontSize: isFeatured
                              ? 'clamp(1.05rem, 1.4vw, 1.25rem)'
                              : '0.9375rem',
                          }}
                        >
                          {entry.role}
                        </h3>
                        <span className="text-sm text-muted">
                          &middot;&nbsp;{entry.company}
                        </span>
                      </div>

                      <p className="type-label text-faint mb-3">{entry.location}</p>

                      {isFeatured && (
                        <p className="type-body text-muted" style={{ maxWidth: '58ch' }}>
                          {entry.description}
                        </p>
                      )}

                      {isDox && (
                        <a
                          href="#dox"
                          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium transition-opacity duration-[var(--dur-fast)] hover:opacity-75"
                          style={{ color: 'var(--signal)' }}
                        >
                          View Full Case Study
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <path
                              d="M1 9L9 1M9 1H3M9 1V7"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      )}

                      {isHycu && (
                        <a
                          href="https://www.hycu.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 inline-flex items-center gap-1.5 text-sm transition-opacity duration-[var(--dur-fast)] hover:opacity-75"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          Visit HYCU
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                            <path
                              d="M1 9L9 1M9 1H3M9 1V7"
                              stroke="currentColor"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

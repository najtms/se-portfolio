'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { StatusDot } from '@/components/ui/status-dot';
import { Tag } from '@/components/ui/tag';
import { ahmed } from '@/content/ahmed';
import * as mv from '@/lib/motion';

const DOX_STACK = ['React', 'TypeScript', 'Laravel', 'PostgreSQL', 'Docker', 'Cloudflare', 'TanStack Query'] as const;

const copyStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export function DoxSection() {
  const isReduced = useReducedMotion();
  const rf = (full: Variants): Variants => (isReduced ? mv.reducedFade : full);

  const mediaRef = useRef<HTMLDivElement>(null);
  const copyRef  = useRef<HTMLDivElement>(null);

  const mediaInView = useInView(mediaRef, { once: true, margin: '-80px' });
  const copyInView  = useInView(copyRef,  { once: true, margin: '-80px' });

  const { dox } = ahmed;

  return (
    <section
      id="dox"
      aria-label="DOX — Featured Venture"
      className="section-gap-lg"
    >
      <div className="container-site">
        {/* Status header */}
        <div className="mb-12 lg:mb-16">
          <div className="flex items-center gap-2.5 mb-6">
            <StatusDot label="DOX.ba — in development" />
            <span className="type-label text-faint">
              {dox.name}&nbsp;&middot;&nbsp;{dox.location}&nbsp;&middot;&nbsp;{dox.status}
            </span>
          </div>
          <h2 className="type-h1 text-hi">{dox.tagline}</h2>
        </div>

        {/* Two-column: media left, narrative right */}
        <div className="grid lg:grid-cols-[58%_1fr] gap-8 lg:gap-12 xl:gap-14 items-start">

          {/* Media */}
          <motion.div
            ref={mediaRef}
            variants={rf(mv.doxMedia)}
            initial="hidden"
            animate={mediaInView ? 'visible' : 'hidden'}
          >
            {dox.screenshots.length > 0 ? (
              // ⚠️ Real screenshot slot — swap here once Ahmed provides assets (§0.1)
              <img
                src={dox.screenshots[0]!}
                alt="DOX.ba product screenshot"
                className="w-full h-auto rounded-lg border-hairline"
                style={{ aspectRatio: '16/11', objectFit: 'cover', objectPosition: 'center top' }}
              />
            ) : (
              <DoxMediaPlaceholder tagline={dox.tagline} />
            )}
          </motion.div>

          {/* Narrative */}
          <motion.div
            ref={copyRef}
            variants={rf(copyStagger)}
            initial="hidden"
            animate={copyInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-7 lg:pt-2"
          >
            <motion.p variants={rf(slideUp)} className="type-body-lg text-body">
              {dox.problem}
            </motion.p>

            {dox.approach && (
              <motion.p variants={rf(slideUp)} className="type-body text-muted">
                {dox.approach}
              </motion.p>
            )}

            <motion.div variants={rf(slideUp)}>
              <p className="type-label text-faint mb-3">What I own</p>
              <div className="flex flex-wrap gap-2">
                {dox.ownership.map((pillar) => (
                  <span
                    key={pillar}
                    className="inline-flex items-center px-2.5 py-1 text-sm font-medium"
                    style={{
                      borderRadius: 'var(--radius-sm)',
                      color: 'var(--signal)',
                      background: 'oklch(0.80 0.105 188 / 0.07)',
                      border: '1px solid oklch(0.80 0.105 188 / 0.20)',
                    }}
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={rf(slideUp)}>
              <p className="type-label text-faint mb-3">Built with</p>
              <div className="flex flex-wrap gap-2">
                {DOX_STACK.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ⚠️ ASSET SLOT — replace with real DOX.ba screenshots once Ahmed provides them (§0.1)
// Wire up: set ahmed.dox.screenshots[0] → this component auto-shows the image.
function DoxMediaPlaceholder({ tagline }: { tagline: string }) {
  return (
    <div
      role="img"
      aria-label="DOX.ba product interface — screenshots coming soon"
      className="relative overflow-hidden rounded-lg border-hairline"
      style={{ aspectRatio: '16 / 11', background: 'var(--ink-surface-1)' }}
    >
      {/* Signal glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 35%, oklch(0.40 0.060 195 / 0.32), transparent 70%)',
        }}
      />

      <div className="relative flex h-full flex-col">
        {/* Browser chrome */}
        <div
          className="flex flex-shrink-0 items-center gap-1.5 border-b px-4 py-3"
          style={{ borderColor: 'var(--ink-line)', background: 'var(--ink-surface-2)' }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-2.5 w-2.5 rounded-full"
              style={{ background: 'var(--ink-line)' }}
            />
          ))}
          <div
            className="ml-4 flex h-5 max-w-[160px] flex-1 items-center rounded-sm px-2"
            style={{ background: 'var(--ink-base)', border: '1px solid var(--ink-line)' }}
          >
            <span
              className="font-mono"
              style={{
                fontSize: '0.5rem',
                letterSpacing: '0.06em',
                color: 'var(--text-faint)',
                opacity: 0.55,
              }}
            >
              dox.ba
            </span>
          </div>
        </div>

        {/* Content area */}
        <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 py-6">
          {/* DOX wordmark */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <span
                className="block h-1.5 w-1.5 rounded-full"
                style={{ background: 'var(--signal)', boxShadow: '0 0 8px oklch(0.80 0.105 188 / 0.6)' }}
              />
              <span
                className="font-sans font-medium"
                style={{ fontSize: '1.0625rem', letterSpacing: '-0.02em', color: 'var(--text-hi)' }}
              >
                DOX.ba
              </span>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                letterSpacing: '-0.01em',
                maxWidth: '22ch',
                lineHeight: 1.45,
              }}
            >
              {tagline}
            </p>
          </div>

          {/* Abstract UI suggestion */}
          <div className="w-full max-w-[18rem]">
            <div
              className="mb-2.5 flex h-8 items-center rounded-sm px-3"
              style={{
                background: 'oklch(0.80 0.105 188 / 0.06)',
                border: '1px solid oklch(0.80 0.105 188 / 0.18)',
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: '0.5625rem', letterSpacing: '0.06em', color: 'var(--signal)', opacity: 0.7 }}
              >
                Find a verified doctor
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {([0.85, 0.65, 0.45, 0.3] as const).map((opacity, i) => (
                <div
                  key={i}
                  className="h-12 rounded-sm"
                  style={{ background: 'var(--ink-surface-2)', border: '1px solid var(--ink-line)', opacity }}
                />
              ))}
            </div>
          </div>

          <p
            className="font-mono text-center"
            style={{
              fontSize: '0.5rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-faint)',
              opacity: 0.45,
            }}
          >
            Screenshots coming soon
          </p>
        </div>
      </div>
    </div>
  );
}

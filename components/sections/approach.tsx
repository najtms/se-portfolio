'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Tag } from '@/components/ui/tag';
import { ahmed } from '@/content/ahmed';
import * as mv from '@/lib/motion';

const CAPABILITY_GROUPS = [
  { label: 'Languages',  items: ahmed.capabilities.languages },
  { label: 'Frameworks', items: ahmed.capabilities.frameworks },
  { label: 'Cloud',      items: ahmed.capabilities.cloud },
  { label: 'Data',       items: ahmed.capabilities.data },
  { label: 'Tooling',    items: ahmed.capabilities.tooling },
] satisfies Array<{ label: string; items: readonly string[] }>;

export function ApproachSection() {
  const isReduced = useReducedMotion();
  const rf = (full: Variants): Variants => (isReduced ? mv.reducedFade : full);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="approach"
      aria-label="Approach and Capabilities"
      className="section-gap"
      ref={ref}
    >
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20">

          {/* Statement */}
          <motion.div
            variants={rf(mv.sectionReveal)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <h2 className="type-h1 text-hi mb-6">
              Approach &amp; Capabilities
            </h2>
            <p className="type-body text-muted" style={{ maxWidth: '38ch' }}>
              Three years in production at HYCU — enterprise Java services, three cloud
              platforms, clients who can&apos;t afford downtime. Building DOX added the
              rest: full product ownership, healthcare as a design constraint, decisions
              with no playbook. I bring both to every problem.
            </p>
          </motion.div>

          {/* Grouped tag rows — no bars, no percentages */}
          <motion.div
            className="flex flex-col gap-6"
            variants={rf(mv.timelineContainer)}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {CAPABILITY_GROUPS.map(({ label, items }) => (
              <motion.div
                key={label}
                variants={rf(mv.timelineEntry)}
                className="sm:grid sm:items-start gap-x-6 gap-y-2"
                style={{ gridTemplateColumns: '88px 1fr' }}
              >
                <p className="type-label text-faint mb-2 sm:mb-0 sm:pt-1">{label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

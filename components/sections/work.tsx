'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Tag } from '@/components/ui/tag';
import * as mv from '@/lib/motion';

/* ─── Data ─────────────────────────────────────────────────────────────── */

interface WorkCta {
  label: string;
  href: string;
  external?: boolean;
}

interface WorkProject {
  id: string;
  title: string;
  company?: string;
  role: string;
  period: string;
  location: string;
  description: string;
  challenge?: string;
  approach?: string;
  responsibilities?: readonly string[];
  tags: readonly string[];
  cta?: WorkCta;
  tier: 1 | 2 | 3 | 4;
}

const PROJECTS: readonly WorkProject[] = [
  {
    id: 'dox',
    title: 'DOX.ba',
    role: 'Founder & Product Developer',
    period: 'Oct 2025 – Present',
    location: 'Sarajevo, BiH',
    description:
      'Healthcare discovery platform connecting patients with verified doctors and clinics across Bosnia.',
    challenge:
      'Healthcare access in Bosnia depends on word-of-mouth and outdated directories. Patients had no reliable way to find verified specialists; clinics lacked a trusted digital presence.',
    approach:
      'Built the full product from zero — product strategy through cloud deployment. Every architectural and UX decision anchored in earning patient trust: verified listings, clean search, direct booking flows, no dark patterns.',
    responsibilities: [
      'Product Strategy',
      'Backend Architecture',
      'Frontend Engineering',
      'Cloud Infrastructure',
      'Go-To-Market',
      'User Research',
      'AI Integration',
    ],
    tags: ['Java', 'Spring Boot', 'Laravel', 'Next.js', 'PostgreSQL', 'Docker', 'GCP', 'Cloudflare', 'AI Integration'],
    cta: { label: 'View Full Case Study', href: '#dox' },
    tier: 1,
  },
  {
    id: 'hycu',
    title: 'HYCU',
    role: 'Software Engineer',
    period: 'Jun 2022 – Oct 2025',
    location: 'Boston, United States',
    description:
      "Enterprise SaaS data protection platform serving thousands of businesses across cloud and on-prem environments.",
    challenge:
      "HYCU's platform required reliable integrations across 8+ enterprise ecosystems — Atlassian, Microsoft 365, Salesforce, Google Workspace, AWS, Azure, Nutanix, and GCP — under strict SLA requirements.",
    approach:
      'Backend services in Java and Spring Boot, backed by PostgreSQL. Reliability engineering, automated operations tooling, and production-grade infrastructure built to handle real enterprise load.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Terraform', 'AWS', 'Azure', 'GCP', 'GitLab CI/CD', 'Linux'],
    cta: { label: 'Visit HYCU', href: 'https://www.hycu.com', external: true },
    tier: 2,
  },
  {
    id: 'client-platforms',
    title: 'Client Platforms & Mobile Applications',
    role: 'Frontend Engineer & Mobile Developer',
    period: 'Jan 2022 – Present',
    location: 'Sarajevo, BiH',
    description:
      'Designed, built, and maintain multiple client-facing products — including a healthcare provider website (dr-hakim.ba) and a retail services platform (frisal.ba). Also independently built ScamAway, an Android app helping users identify and avoid online scams. Full lifecycle ownership: UX design, frontend engineering, mobile development, deployment, and ongoing maintenance.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Android', 'Kotlin', 'REST APIs', 'UI/UX Design'],
    tier: 3,
  },
  {
    id: 'pantheon',
    title: 'Pantheon RA/RC',
    company: 'App IT d.o.o.',
    role: 'Android Developer',
    period: 'Mar 2022 – Jun 2022',
    location: 'Sarajevo, BiH',
    description:
      'Developed and maintained the Pantheon RA/RC Android application — implementing new features, REST API integrations, and performance improvements for production users.',
    tags: ['Android', 'Kotlin', 'REST APIs'],
    tier: 4,
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    company: 'Solution404',
    role: 'Frontend Developer',
    period: 'Jul 2021 – Mar 2022',
    location: 'Sarajevo, BiH',
    description:
      'Built a React-based e-commerce web application — integrating Firebase, REST APIs, and a responsive component library for a production retail client.',
    tags: ['React', 'Firebase', 'REST APIs', 'JavaScript'],
    tier: 4,
  },
  {
    id: 'logistics',
    title: 'Logistics Management System',
    company: 'IMTEC d.o.o.',
    role: 'Backend Developer',
    period: 'Jan 2021 – Jun 2021',
    location: 'Sarajevo, BiH',
    description:
      'Designed and built backend services for internal logistics operations — REST API development, workflow automation, route tracking, and PostgreSQL schema design.',
    tags: ['PHP', 'Laravel', 'PostgreSQL', 'REST APIs'],
    tier: 4,
  },
] as const;

/* ─── Shared arrow ──────────────────────────────────────────────────────── */

function Arrow({ size = 10 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path
        d="M1 9L9 1M9 1H3M9 1V7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ─── Section ───────────────────────────────────────────────────────────── */

export function WorkSection() {
  const isReduced = useReducedMotion();
  const rf = (full: Variants): Variants => (isReduced ? mv.reducedFade : full);

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="section-gap"
      ref={ref}
    >
      <div className="container-site">
        <motion.h2
          className="type-h1 text-hi mb-10 lg:mb-14"
          variants={rf(mv.sectionReveal)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Selected Work
        </motion.h2>

        <motion.div
          className="flex flex-col"
          variants={rf(mv.workContainer)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {PROJECTS.map((project, i) => (
            <WorkEntry key={project.id} project={project} isFirst={i === 0} rf={rf} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Entry ─────────────────────────────────────────────────────────────── */

function WorkEntry({
  project,
  isFirst,
  rf,
}: {
  project: WorkProject;
  isFirst: boolean;
  rf: (full: Variants) => Variants;
}) {
  const { tier, title, company, role, period, location, description, challenge, approach, responsibilities, tags, cta } = project;

  const titleSize =
    tier === 1 ? 'clamp(2.25rem, 4vw, 3.5rem)'     :
    tier === 2 ? 'clamp(1.625rem, 2.5vw, 2.25rem)'  :
    tier === 3 ? 'clamp(1.25rem, 2vw, 1.625rem)'    :
                 '1.0625rem';

  const titleTracking = tier <= 2 ? '-0.025em' : '-0.015em';

  const blockPaddingTop    = tier === 1 ? '4.5rem' : tier === 2 ? '3.5rem' : tier === 3 ? '3rem' : '2rem';
  const blockPaddingBottom = tier === 1 ? '4rem'   : tier === 2 ? '3rem'   : tier === 3 ? '2.5rem' : '1.75rem';

  const metaMarginTop = tier === 1 ? '0.875rem' : '0.625rem';
  const headerMarginBottom = tier === 1 ? '1.75rem' : '1.25rem';
  const descMarginBottom = tier === 1 ? '1.75rem' : '1.5rem';

  const metaLabel = [company, role, period, location].filter(Boolean).join(' · ');

  return (
    <motion.div
      variants={rf(mv.workItem)}
      style={{
        borderTop: isFirst ? 'none' : '1px solid var(--ink-line)',
        paddingTop: blockPaddingTop,
        paddingBottom: blockPaddingBottom,
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: headerMarginBottom }}>
        <h3
          className="text-hi"
          style={{
            fontSize: titleSize,
            fontWeight: 500,
            letterSpacing: titleTracking,
            lineHeight: 1.1,
            textWrap: 'balance',
          } as React.CSSProperties}
        >
          {title}
        </h3>
        <p className="type-label text-faint" style={{ marginTop: metaMarginTop }}>
          {metaLabel}
        </p>
      </div>

      {/* Description */}
      <p
        className={`${tier === 1 ? 'type-body-lg' : 'type-body'} text-muted`}
        style={{
          maxWidth: tier === 1 ? '56ch' : '62ch',
          marginBottom: (challenge || approach) ? '1rem' : descMarginBottom,
        }}
      >
        {description}
      </p>

      {/* Challenge + Approach — case-study depth for featured entries */}
      {(challenge || approach) && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: descMarginBottom,
          }}
        >
          {challenge && (
            <div>
              <p className="type-label text-faint" style={{ marginBottom: '0.375rem' }}>
                Challenge
              </p>
              <p
                className={`${tier === 1 ? 'type-body-lg' : 'type-body'} text-muted`}
                style={{ maxWidth: tier === 1 ? '56ch' : '62ch' }}
              >
                {challenge}
              </p>
            </div>
          )}
          {approach && (
            <div>
              <p className="type-label text-faint" style={{ marginBottom: '0.375rem' }}>
                Approach
              </p>
              <p
                className={`${tier === 1 ? 'type-body-lg' : 'type-body'} text-muted`}
                style={{ maxWidth: tier === 1 ? '56ch' : '62ch' }}
              >
                {approach}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Responsibilities — DOX only */}
      {responsibilities && (
        <ul
          aria-label="Key responsibilities"
          style={{
            columns: '2 200px',
            columnGap: '3rem',
            marginBottom: '2rem',
            listStyle: 'none',
            padding: 0,
          }}
        >
          {responsibilities.map((r) => (
            <li
              key={r}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                marginBottom: '0.5rem',
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: 'var(--signal)',
                  flexShrink: 0,
                }}
              />
              <span className="type-body text-muted" style={{ fontSize: '0.9375rem' }}>
                {r}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Footer: tags + optional CTA */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {cta && (
          <a
            href={cta.href}
            target={cta.external ? '_blank' : undefined}
            rel={cta.external ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1.5 transition-opacity duration-[var(--dur-fast)] hover:opacity-75"
            style={{
              color: tier === 1 ? 'var(--signal)' : 'var(--text-muted)',
              fontSize: tier === 1 ? '0.9375rem' : '0.875rem',
              fontWeight: tier === 1 ? 500 : 400,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {cta.label}
            <Arrow size={tier === 1 ? 11 : 10} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

// lib/motion.ts
// Motion (motion/react) animation variants — §6.1, §6.2 of PORTFOLIO_MASTER_PLAN.md.
// Hero sequence: 6 choreographed beats, each at a specific delay.
// Reduced motion: a single 200ms crossfade (no transforms).

import type { Variants } from 'motion/react';
import { duration, easing } from './tokens';

const expo = easing.outExpo;

// ─── Hero arrival sequence (§6.2) ────────────────────────────────────────────

/** Beat 1-2: background + waveform handled in CSS / component */

/** Beat 3: portrait — scale 0.96→1, rises 24px, fades in */
export const portrait: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: duration.cine, ease: expo, delay: 0.5 },
  },
};

/** Beat 4: headline — fades + rises 16px */
export const headline: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: duration.slow, ease: expo, delay: 1.0 },
  },
};

/** Beat 5: supporting copy (role line + statement), staggered */
export const roleLine: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: duration.slow, ease: expo, delay: 1.3 },
  },
};

export const statement: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: duration.slow, ease: expo, delay: 1.45 },
  },
};

/** Beat 6: CTAs — primary then secondary ~80ms stagger */
export const ctaPrimary: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: duration.base, ease: expo, delay: 1.6 },
  },
};

export const ctaSecondary: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: duration.base, ease: expo, delay: 1.68 },
  },
};

// ─── Reduced-motion fallback (§6.6) ──────────────────────────────────────────
// Apply when useReducedMotion() returns true — single crossfade, no transforms.

export const reducedFade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.fast },
  },
};

// ─── Section scroll reveals (§6.3) ───────────────────────────────────────────
// Each section gets a *different* reveal — avoids the uniform-entrance tell.

/** DOX media — scale-in + subtle glow (applied via CSS class) */
export const doxMedia: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: duration.slow, ease: expo },
  },
};

/** Experience entries — staggered left-slide from timeline */
export const timelineEntry: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1, x: 0,
    transition: { duration: duration.base, ease: expo },
  },
};

export const timelineContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

/** Community figures — count-up is handled in component; this fades in */
export const communityFigure: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: duration.base, ease: expo },
  },
};

/** Selected work items — short stagger slide-fade */
export const workItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: duration.base, ease: expo },
  },
};

export const workContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

/** Default section reveal — generous but distinct from above */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: duration.slow, ease: expo },
  },
};
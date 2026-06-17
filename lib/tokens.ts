// lib/tokens.ts
// JS/TS exports of design tokens for use in Motion animations and dynamic styles.
// CSS counterparts live in app/globals.css — keep in sync with §4.5.

export const colors = {
  inkBase:      'oklch(0.08 0.004 215)',
  inkSurface1:  'oklch(0.14 0.007 215)',
  inkSurface2:  'oklch(0.19 0.009 215)',
  inkLine:      'oklch(0.30 0.010 215)',
  textHi:       'oklch(0.99 0 0)',
  text:         'oklch(0.96 0.004 215)',
  textMuted:    'oklch(0.78 0.006 215)',
  textFaint:    'oklch(0.63 0.006 215)',
  signal:       'oklch(0.80 0.105 188)',
  signalStrong: 'oklch(0.72 0.125 190)',
  signalSoft:   'oklch(0.40 0.060 195)',
  signalGhost:  'oklch(0.80 0.105 188 / 0.10)',
} as const;

// Duration in SECONDS (Motion uses seconds, not ms)
export const duration = {
  fast: 0.2,
  base: 0.45,
  slow: 0.8,
  cine: 1.2,
} as const;

// Cubic bezier arrays for Motion ease prop
export const easing = {
  outQuart: [0.25, 1, 0.5, 1] as const,
  outExpo:  [0.16, 1, 0.3, 1] as const,
} as const;

export type EasingArray = readonly [number, number, number, number];
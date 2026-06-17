// components/ui/section.tsx
// Anchor-able section with fluid vertical rhythm — §2.1 site structure.
// Content is always visible (no opacity gate) — §6.3 / §3.4.

import { type ReactNode } from 'react';

interface SectionProps {
  id: string;
  'aria-label': string;
  children: ReactNode;
  className?: string;
  size?: 'default' | 'lg';
}

export function Section({
  id,
  'aria-label': ariaLabel,
  children,
  className = '',
  size = 'default',
}: SectionProps) {
  const gap = size === 'lg' ? 'section-gap-lg' : 'section-gap';
  return (
    <section id={id} aria-label={ariaLabel} className={`${gap} ${className}`}>
      {children}
    </section>
  );
}
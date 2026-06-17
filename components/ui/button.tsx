'use client';

// components/ui/button.tsx
// Primary / secondary / ghost variants — §7 primitives.
// Micro-interaction: subtle lift + signal-ghost halo on hover — §6.5.

import { type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  'aria-label'?: string;
  type?: 'button' | 'submit' | 'reset';
}

const variantStyles: Record<Variant, string> = {
  primary: [
    'inline-flex items-center justify-center gap-2',
    'rounded-md px-6 py-3',
    'bg-signal text-base font-medium text-sm',
    'transition-[transform,box-shadow] duration-[var(--dur-fast)]',
    'hover:-translate-y-0.5 hover:shadow-[0_0_0_3px_var(--signal-ghost)]',
    'active:translate-y-0',
    'focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-base',
  ].join(' '),

  secondary: [
    'inline-flex items-center justify-center gap-2',
    'rounded-md px-6 py-3',
    'border-hairline text-body font-medium text-sm',
    'transition-[transform,color,border-color] duration-[var(--dur-fast)]',
    'hover:-translate-y-0.5 hover:text-hi hover:border-signal',
    'active:translate-y-0',
  ].join(' '),

  ghost: [
    'inline-flex items-center justify-center gap-2',
    'rounded-md px-4 py-2',
    'text-muted font-medium text-sm',
    'transition-[color] duration-[var(--dur-fast)]',
    'hover:text-hi',
  ].join(' '),
};

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  'aria-label': ariaLabel,
  type = 'button',
}: ButtonProps) {
  const styles = `${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        className={styles}
        aria-label={ariaLabel}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
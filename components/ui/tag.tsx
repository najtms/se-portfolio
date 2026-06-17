// components/ui/tag.tsx
// Capability chip — small, quiet. NO bars, no percentages — §1.6 / §7.
// Used in Approach & Capabilities section.

import { type ReactNode } from 'react';

interface TagProps {
  children: ReactNode;
  className?: string;
}

export function Tag({ children, className = '' }: TagProps) {
  return (
    <span
      className={[
        'inline-flex items-center',
        'px-2.5 py-1',
        'rounded-sm',         // 2px radius per §4.8
        'text-sm font-medium',
        'text-muted',
        'border-subtle',
        'bg-surface-1',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
// components/ui/container.tsx
// Max-width 1200px with fluid gutter — §4.8.

import { type ReactNode, type ElementType } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

export function Container({ children, className = '', as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag className={`container-site ${className}`}>
      {children}
    </Tag>
  );
}
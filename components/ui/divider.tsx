// components/ui/divider.tsx
// Plain hairline OR signal pulse variant — §6.4.
// Pulse variant used max 2-3 times across the whole page.

interface DividerProps {
  variant?: 'plain' | 'pulse';
  className?: string;
}

export function Divider({ variant = 'plain', className = '' }: DividerProps) {
  if (variant === 'pulse') {
    return (
      <div className={`relative flex items-center ${className}`} aria-hidden="true">
        <div className="border-hairline-t flex-1" />
        <span
          className="mx-4 h-px w-12 flex-shrink-0"
          style={{
            background: `linear-gradient(90deg, transparent, var(--signal), transparent)`,
            opacity: 0.6,
          }}
        />
        <div className="border-hairline-t flex-1" />
      </div>
    );
  }

  return (
    <hr
      className={`border-none border-hairline-t ${className}`}
      aria-hidden="true"
    />
  );
}
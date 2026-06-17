// components/ui/status-dot.tsx
// Pulsing signal dot — §6.4 signature motif.
// Used in DOX status line: "● DOX.ba · Sarajevo · In development".
// Animation disabled under prefers-reduced-motion via CSS.

interface StatusDotProps {
  label?: string;
  className?: string;
}

export function StatusDot({ label = 'Live', className = '' }: StatusDotProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={`signal-dot flex-shrink-0 ${className}`}
    />
  );
}
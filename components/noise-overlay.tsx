// components/noise-overlay.tsx
// Grain/noise overlay — §4.7: 3-4% opacity over the page avoids flat-black banding.
// Rendered as a fixed SVG filter; no texture file needed.
// aria-hidden so screen readers skip it entirely.

export function NoiseOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 select-none"
      style={{ zIndex: 'var(--z-overlay)', opacity: 0.035 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="h-full w-full"
      >
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
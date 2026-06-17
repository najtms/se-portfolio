'use client';

// components/motion-provider.tsx
// Initialises Lenis smooth scroll and wires it to Motion's frame loop.
// Disabled entirely when prefers-reduced-motion is active — §6.6.

import { useEffect } from 'react';
import { useReducedMotion } from 'motion/react';
import Lenis from 'lenis';

interface MotionProviderProps {
  children: React.ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // §6.7: Lenis is fully disabled under reduced motion — no smooth hijack.
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
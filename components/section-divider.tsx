'use client';

import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

interface SectionDividerProps {
  ecg?: boolean;
}

// QRS complex — reads left-to-right, arrives at anchor dot
const ECG_PATH = 'M0,7 L20,7 L24,2 L28,12 L32,7 L52,7';

export function SectionDivider({ ecg = false }: SectionDividerProps) {
  const ref      = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });
  const reduced  = useReducedMotion();

  const show = reduced || isInView;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{ position: 'relative', height: '1px' }}
    >
      {/* Bloom glow — blurred, wide */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '-3px',
          height: '7px',
          background:
            'linear-gradient(to right, transparent 0%, oklch(0.80 0.105 188 / 0.07) 15%, oklch(0.80 0.105 188 / 0.22) 50%, oklch(0.80 0.105 188 / 0.07) 85%, transparent 100%)',
          filter: 'blur(4px)',
          pointerEvents: 'none',
        }}
      />

      {/* Crisp gradient line */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          height: '1px',
          background:
            'linear-gradient(to right, transparent 0%, oklch(0.80 0.105 188 / 0.05) 8%, oklch(0.80 0.105 188 / 0.42) 50%, oklch(0.80 0.105 188 / 0.05) 92%, transparent 100%)',
        }}
      />

      {/* Anchor cluster — centered on the line */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: ecg ? '8px' : '0',
        }}
      >
        {/* ECG segment — only on DOX boundary, draws left-to-right into the dot */}
        {ecg && (
          <motion.svg
            width="52"
            height="14"
            viewBox="0 0 52 14"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: show ? 0.32 : 0 }}
            transition={
              reduced
                ? { duration: 0 }
                : { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.25 }
            }
          >
            <motion.path
              d={ECG_PATH}
              stroke="var(--signal)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: reduced ? 1 : 0 }}
              animate={{ pathLength: 1 }}
              transition={
                reduced
                  ? { duration: 0 }
                  : { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
              }
            />
          </motion.svg>
        )}

        {/* Anchor dot — the pulse point */}
        <motion.div
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            background: 'var(--signal)',
            boxShadow:
              '0 0 6px oklch(0.80 0.105 188 / 0.80), 0 0 18px oklch(0.80 0.105 188 / 0.28)',
            flexShrink: 0,
          }}
          initial={{ scale: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
          animate={{ scale: 1, opacity: show ? 1 : 0 }}
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: ecg ? 0.55 : 0.1 }
          }
        />
      </div>
    </div>
  );
}

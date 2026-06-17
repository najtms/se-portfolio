'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import type { Variants } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Waveform } from '@/components/waveform';
import { ahmed } from '@/content/ahmed';
import * as mv from '@/lib/motion';

export function HeroSection() {
  const isReduced = useReducedMotion();
  const v = (full: Variants): Variants => (isReduced ? mv.reducedFade : full);

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex items-center min-h-[76dvh] py-20 lg:py-0"
    >
      {/* Signal waveform — brand motif, draws in on load */}
      <Waveform />

      <div className="container-site relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_minmax(320px,42%)] gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* ── Copy ──────────────────────────────────────── */}
          <div className="order-2 lg:order-1 flex flex-col gap-6 lg:gap-7">
            <motion.h1
              className="type-display"
              variants={v(mv.headline)}
              initial="hidden"
              animate="visible"
            >
              Ahmed
              <br />
              Assaad
            </motion.h1>

            <motion.p
              className="type-body-lg text-muted"
              variants={v(mv.roleLine)}
              initial="hidden"
              animate="visible"
            >
              {ahmed.roles.map((role, i) => (
                <span key={role}>
                  {i > 0 && <>&nbsp;&middot;&nbsp;</>}
                  {role}
                </span>
              ))}
            </motion.p>

            <motion.p
              className="type-body text-body max-w-[52ch]"
              variants={v(mv.statement)}
              initial="hidden"
              animate="visible"
            >
              Three years shipping backend systems at&nbsp;HYCU. Now founding{' '}
              <span className="text-signal">DOX.ba</span>
              {' '}&mdash; because finding a trusted doctor in Bosnia should be
              simpler than it is.
            </motion.p>

            <div className="flex flex-wrap gap-3 lg:gap-4 pt-2">
              <motion.div
                variants={v(mv.ctaPrimary)}
                initial="hidden"
                animate="visible"
              >
                <Button variant="primary" href="#dox">
                  View DOX
                </Button>
              </motion.div>
              <motion.div
                variants={v(mv.ctaSecondary)}
                initial="hidden"
                animate="visible"
              >
                <Button variant="secondary" href="#contact">
                  Get in touch
                </Button>
              </motion.div>
            </div>
          </div>

          {/* ── Portrait ──────────────────────────────────── */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            variants={v(mv.portrait)}
            initial="hidden"
            animate="visible"
          >
            <div className="relative flex items-center justify-center w-[220px] sm:w-[280px] lg:w-full max-w-[420px]">
              {/* Radial signal glow behind portrait */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '145%',
                  height: '135%',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(ellipse at 50% 50%, var(--color-signal-soft) 0%, transparent 65%)',
                  filter: 'blur(64px)',
                  opacity: 0.42,
                  pointerEvents: 'none',
                }}
              />

              {/* Portrait — radial mask creates editorial floating effect */}
              <Image
                src="/images/ahmedassaad.png"
                alt="Ahmed Assaad — Software Engineer, Founder & Community Leader"
                width={440}
                height={440}
                priority
                className="relative w-full h-auto object-contain"
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 280px, 420px"
                style={{
                  maskImage:
                    'radial-gradient(ellipse 82% 90% at 50% 40%, black 50%, transparent 74%)',
                  WebkitMaskImage:
                    'radial-gradient(ellipse 82% 90% at 50% 40%, black 50%, transparent 74%)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
'use client';

// components/nav.tsx
// Sticky top nav — transparent over hero, blurred once scrolled ~80px.
// §2.2: wordmark (AA) + 4 anchor links + primary CTA.
// Mobile: wordmark + Contact button + hamburger → slide-down sheet.
// Scroll-spy: active section gets signal accent indicator.

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { label: 'DOX',        href: '#dox' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work',       href: '#work' },
  { label: 'Community',  href: '#community' },
  { label: 'Contact',    href: '#contact' },
] as const;

const SECTION_IDS = ['top', 'intro', 'dox', 'experience', 'community', 'work', 'approach', 'contact'] as const;

export function Nav() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [activeId, setActiveId]     = useState<string>('top');

  // Blur nav after 80px scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: observe which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        role="banner"
        style={{ zIndex: 'var(--z-nav)' }}
        className={[
          'fixed top-0 inset-x-0 transition-[background,border-color,backdrop-filter]',
          'duration-[var(--dur-base)]',
          scrolled
            ? 'bg-base/85 backdrop-blur-md border-hairline-b'
            : 'bg-transparent border-transparent border-b',
        ].join(' ')}
      >
        <div className="container-site flex h-16 items-center justify-between gap-6">

          {/* Wordmark */}
          <a
            href="#top"
            aria-label="Ahmed Assaad — back to top"
            className="flex items-center hover:opacity-80 transition-opacity duration-[var(--dur-fast)]"
            onClick={closeMenu}
          >
            <img
              src="/images/logo.svg"
              alt="Ahmed Assaad"
              style={{ height: '32px', width: 'auto' }}
            />
          </a>

          {/* Desktop nav links */}
          <nav aria-label="Site navigation" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => {
              const sectionId = href.slice(1);
              const isActive = activeId === sectionId;
              return (
                <a
                  key={href}
                  href={href}
                  className={[
                    'text-sm font-medium transition-colors duration-[var(--dur-fast)]',
                    'relative pb-0.5',
                    isActive ? 'text-hi' : 'text-muted hover:text-hi',
                  ].join(' ')}
                >
                  {label}
                  {/* Active indicator */}
                  {isActive && (
                    <span
                      className="absolute inset-x-0 -bottom-0.5 h-px"
                      style={{ background: 'var(--signal)' }}
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* Primary CTA — always visible */}
            <Button href="#contact" variant="primary" className="text-xs px-4 py-2">
              Get in touch
            </Button>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span
                className={[
                  'block h-px w-5 bg-body transition-transform duration-[var(--dur-fast)]',
                  menuOpen ? 'translate-y-2 rotate-45' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block h-px w-5 bg-body transition-opacity duration-[var(--dur-fast)]',
                  menuOpen ? 'opacity-0' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block h-px w-5 bg-body transition-transform duration-[var(--dur-fast)]',
                  menuOpen ? '-translate-y-2 -rotate-45' : '',
                ].join(' ')}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — slide-down sheet */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={[
          'fixed inset-0 md:hidden',
          'transition-opacity duration-[var(--dur-base)]',
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        ].join(' ')}
        style={{ zIndex: 'calc(var(--z-nav) - 1)' }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-base/90 backdrop-blur-lg"
          aria-hidden="true"
          onClick={closeMenu}
        />

        {/* Links */}
        <nav
          className="relative flex flex-col gap-2 pt-24 px-6"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="type-h2 text-muted hover:text-hi py-3 border-hairline-b transition-colors duration-[var(--dur-fast)]"
            >
              {label}
            </a>
          ))}
          <Button href="#contact" variant="primary" className="mt-6 w-full justify-center" onClick={closeMenu}>
            Get in touch
          </Button>
        </nav>
      </div>
    </>
  );
}
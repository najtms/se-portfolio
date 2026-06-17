// components/footer.tsx
// Quiet footer — §2.3: email, LinkedIn, location, back-to-top.

import { ahmed } from '@/content/ahmed';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-hairline-t"
      style={{ background: 'var(--ink-surface-1)' }}
    >
      <div className="container-site py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Left: contact links */}
        <div className="flex flex-col gap-1">
          <a
            href={`mailto:${ahmed.contact.email}`}
            className="type-label text-muted hover:text-signal transition-colors duration-[var(--dur-fast)]"
          >
            {ahmed.contact.email}
          </a>
          <a
            href={ahmed.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="type-label text-muted hover:text-signal transition-colors duration-[var(--dur-fast)]"
          >
            linkedin.com/in/ahmed-assaad
          </a>
          <span className="type-label">{ahmed.location}</span>
        </div>

        {/* Right: copyright + back-to-top */}
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <a
            href="#top"
            aria-label="Back to top"
            className="type-label text-muted hover:text-signal transition-colors duration-[var(--dur-fast)]"
          >
            ↑ Back to top
          </a>
          <span className="type-label">
            © {year} {ahmed.name}
          </span>
        </div>

      </div>
    </footer>
  );
}
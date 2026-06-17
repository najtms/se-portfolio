import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { MotionProvider } from '@/components/motion-provider';
import { NoiseOverlay } from '@/components/noise-overlay';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Ahmed Assaad — Software Engineer, Founder & Community Leader',
    template: '%s | Ahmed Assaad',
  },
  description:
    'Software engineer building backend systems at scale. Founder of DOX.ba, a healthcare platform connecting patients with verified doctors. Co-Organizer of GDG Sarajevo.',
  keywords: [
    'Software Engineer',
    'Founder',
    'DOX',
    'DOX.ba',
    'Healthcare',
    'Backend Engineering',
    'Java',
    'Spring Boot',
    'GDG Sarajevo',
    'Sarajevo',
  ],
  authors: [{ name: 'Ahmed Assaad' }],
  creator: 'Ahmed Assaad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ahmed Assaad',
    title: 'Ahmed Assaad — Software Engineer, Founder & Community Leader',
    description:
      'Software engineer building backend systems at scale. Founder of DOX.ba, a healthcare platform connecting patients with verified doctors. Co-Organizer of GDG Sarajevo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Assaad — Software Engineer, Founder & Community Leader',
    description:
      'Software engineer building backend systems at scale. Founder of DOX.ba.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className={`${GeistMono.variable} font-sans`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <NoiseOverlay />
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
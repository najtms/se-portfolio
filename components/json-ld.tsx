// components/json-ld.tsx
// JSON-LD Person schema — §10.5 SEO & sharing.
// Injected in <head> via layout.tsx.

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ahmed Assaad',
    jobTitle: 'Software Engineer',
    description:
      'Software engineer building backend systems at scale. Founder of DOX.ba, a healthcare platform connecting patients with verified doctors. Co-Organizer of GDG Sarajevo.',
    email: 'assaadahmed7@gmail.com',
    url: process.env['NEXT_PUBLIC_SITE_URL'] ?? 'https://ahmedassaad.com',
    sameAs: ['https://linkedin.com/in/ahmed-assaad'],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'International Burch University',
    },
    knowsAbout: [
      'Software Engineering',
      'Backend Development',
      'Java',
      'Spring Boot',
      'Cloud Computing',
      'Healthcare Technology',
      'Product Development',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
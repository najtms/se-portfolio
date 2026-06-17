// content/ahmed.ts
// Canonical source of truth — extracted from CV and §8.1 of PORTFOLIO_MASTER_PLAN.md.
// DO NOT invent content. If unsure, use null or empty arrays.

export interface ContactInfo {
  email: string;
  linkedin: string;
  phone: string;
}

export interface Language {
  language: string;
  level: 'Native' | 'Fluent' | 'Basic';
}

export interface Education {
  institution: string;
  degree: string;
  years: string;
}

export interface ExperiencePeriod {
  start: string;
  end: string;
  isCurrent: boolean;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  period: ExperiencePeriod;
  description: string;
  featured: boolean;
}

export interface CommunityData {
  organization: string;
  role: string;
  durationApprox: string;
  responsibilities: readonly string[];
  // Awaiting photos from Ahmed — open question §13.3
  eventPhotos: string[];
  events: string[];
}

export interface DoxData {
  name: string;
  tagline: string;
  status: string;
  location: string;
  problem: string;
  approach: string;
  ownership: readonly string[];
  // Real assets to be provided by Ahmed — §0.1 confirmed decision 2
  logo: null;
  screenshots: string[];
  media: string[];
}

export interface CapabilityGroups {
  languages: readonly string[];
  frameworks: readonly string[];
  cloud: readonly string[];
  data: readonly string[];
  tooling: readonly string[];
  operatingSystems: readonly string[];
}

export interface AhmedData {
  name: string;
  title: string;
  roles: readonly string[];
  location: string;
  contact: ContactInfo;
  languages: readonly Language[];
  education: readonly Education[];
  experience: readonly ExperienceEntry[];
  community: CommunityData;
  dox: DoxData;
  capabilities: CapabilityGroups;
}

// §2.1 ordering: DOX first (ownership signal), HYCU second (engineering anchor)
export const ahmed: AhmedData = {
  name: 'Ahmed Assaad',
  title: 'Software Engineer',
  roles: ['Software Engineer', 'Founder', 'Community Leader'],
  location: 'Sarajevo, BiH',

  contact: {
    email: 'assaadahmed7@gmail.com', // confirmed §0.1
    linkedin: 'https://linkedin.com/in/ahmed-assaad',
    phone: '+387 60 332 2750',
  },

  languages: [
    { language: 'English', level: 'Fluent' },
    { language: 'Bosnian', level: 'Native' },
    { language: 'Arabic', level: 'Basic' },
  ],

  education: [
    {
      institution: 'International Burch University',
      degree: "Bachelor's Degree in Information Technologies",
      years: '2018–2024',
    },
  ],

  experience: [
    {
      id: 'dox',
      role: 'Founder & Product Developer',
      company: 'DOX.ba',
      location: 'Sarajevo, BiH',
      period: { start: 'Oct 2025', end: 'Present', isCurrent: true },
      description:
        'Founding DOX.ba — a healthcare discovery platform connecting patients with verified doctors and clinics across Bosnia.',
      featured: true,
    },
    {
      id: 'hycu',
      role: 'Software Engineer',
      company: 'HYCU Inc.',
      location: 'Boston, United States',
      period: { start: 'Jun 2022', end: 'Oct 2025', isCurrent: false },
      description:
        "Backend services for HYCU's enterprise SaaS platform — Java/Spring Boot, PostgreSQL, and reliability engineering across GCP, AWS, and Azure.",
      featured: true,
    },
    {
      id: 'appit',
      role: 'Android Developer',
      company: 'App IT d.o.o.',
      location: 'Sarajevo, BiH',
      period: { start: 'Mar 2022', end: 'Jun 2022', isCurrent: false },
      description:
        'Contributed to the development and maintenance of the Phanteon financial Android application using Android Studio, implementing features, integrating with REST APIs, handling JSON data, and ensuring smooth performance and user experience.',
      featured: false,
    },
    {
      id: 'freelance',
      role: 'Android/Web Developer',
      company: 'Freelance',
      location: 'Sarajevo, BiH',
      period: { start: 'Jan 2022', end: 'Mar 2022', isCurrent: false },
      description:
        "Built a doctor's website with Next.js and Tailwind CSS and an Android booking app for a hair salon, handling API integration, UI/UX, and full development lifecycle.",
      featured: false,
    },
    {
      id: 'solution404',
      role: 'Frontend Developer',
      company: 'Solution404',
      location: 'Sarajevo, BiH',
      period: { start: 'Jul 2021', end: 'Mar 2022', isCurrent: false },
      description:
        'Developed an e-commerce web app using React and Firebase, integrating REST APIs, managing state, and creating responsive, high-performance interfaces.',
      featured: false,
    },
    {
      id: 'imtec',
      role: 'Backend Developer',
      company: 'IMTEC d.o.o.',
      location: 'Sarajevo, BiH',
      period: { start: 'Jan 2021', end: 'Jun 2021', isCurrent: false },
      description:
        'Developed a logistics management app using PHP and Laravel, implementing REST APIs, database workflows, authentication, and scalable backend solutions.',
      featured: false,
    },
  ],

  community: {
    organization: 'Google Developers Group (GDG) Sarajevo',
    role: 'Co-Organizer',
    durationApprox: '~3.8 years',
    responsibilities: [
      'Co-Organizer of GDG Sarajevo',
      'Organizer of multiple DevFest Sarajevo events',
      'Google Cloud Platform Mentor',
      'Supporting developers through technical workshops, mentorship, and community initiatives',
    ],
    eventPhotos: [
      '/images/community/gdg-1.png',
      '/images/community/gdg-2.png',
      '/images/community/gdg-3.png',
    ],
    events: [],     // awaiting from Ahmed — §13 open question 3
  },

  dox: {
    name: 'DOX.ba',
    tagline: 'Healthcare, easier to reach.',
    status: 'In development',
    location: 'Sarajevo',
    problem:
      'In Bosnia, finding the right doctor or clinic means asking around, navigating scattered directories, and hoping the listing is still current. DOX fixes that — a discovery platform where every healthcare professional is verified, searchable, and directly contactable.',
    approach:
      'Built end-to-end from zero: product strategy, backend architecture, database design, cloud infrastructure, and go-to-market. Every decision anchored in earning patient trust — verified listings, a clean search experience, and no dark patterns.',
    ownership: [
      'Product Strategy',
      'Backend Architecture',
      'Cloud Infrastructure',
      'Frontend Engineering',
      'Database Design',
      'User Research',
      'Go-To-Market',
      'AI Integration',
    ],
    logo: null,        // real assets coming from Ahmed — §0.1 confirmed
    screenshots: ['/dox-landing.png'],
    media: [],         // real assets coming from Ahmed — §0.1 confirmed
  },

  capabilities: {
    languages: ['Java', 'JavaScript', 'Kotlin', 'PHP', 'Python'],
    frameworks: ['Spring Boot', 'React', 'React Native', 'Laravel', 'Next.js'],
    cloud: ['GCP', 'AWS', 'Azure'],
    data: ['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma'],
    tooling: ['Git', 'GitHub', 'GitLab', 'Docker', 'Jenkins', 'Android Studio'],
    operatingSystems: ['Linux', 'Windows', 'macOS'],
  },
};
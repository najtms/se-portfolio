# Portfolio Site

A personal portfolio site built with Next.js — clean, fast, and fully animated. Deployed on Vercel.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** [Motion](https://motion.dev/) (Framer Motion) + [Lenis](https://lenis.darkroom.engineering/) for smooth scrolling
- **Fonts:** Geist Mono + Satoshi
- **Deployment:** Vercel

## Features

- Fully responsive, single-page layout with smooth-scroll navigation
- Section-based structure: hero, intro, experience, community, project showcase, contact
- SEO metadata, Open Graph image generation, and JSON-LD structured data
- Custom noise overlay and motion-driven micro-interactions

## Getting Started

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Available Scripts

| Command              | Description                     |
| --------------------- | -------------------------------- |
| `npm run dev`         | Start the development server     |
| `npm run build`       | Build for production             |
| `npm run start`       | Serve the production build       |
| `npm run lint`        | Run ESLint                       |
| `npm run type-check`  | Run TypeScript checks            |

## Project Structure

```
app/                  # Routes, layout, metadata, global styles
components/           # UI components and page sections
  sections/           # Hero, intro, experience, community, work, contact
  ui/                 # Shared primitives (button, tag, divider, etc.)
content/              # Structured content data
lib/                  # Motion config and design tokens
public/               # Static assets (images, fonts)
```

## Environment Variables

| Variable               | Description                                  |
| ----------------------- | --------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`  | Base URL used for metadata and Open Graph tags |

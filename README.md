# 3D Developer Portfolio

Production-ready interactive portfolio built with Next.js App Router, TypeScript, Tailwind CSS, React Three Fiber, Drei, Framer Motion, Zustand, React Hook Form, and Zod.

## Features

- Dynamic 3D hero scene with particles, lighting, cursor parallax, and postprocessing.
- Responsive sections for hero, about, skills, projects, experience, and contact.
- Typed content layer in `data/portfolio.ts`.
- Reusable motion, UI, validation, and state utilities.
- SEO metadata, Open Graph image, sitemap, robots, and Vercel-ready config.
- Accessible navigation, reduced-motion support, semantic layout, and validated contact form.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Commands

```bash
npm run typecheck
npm run lint
npm run build
```

## Structure

- `app/` App Router routes and metadata.
- `components/3d/` React Three Fiber scene system.
- `components/animations/` reusable motion effects.
- `components/sections/` page sections.
- `components/ui/` reusable UI primitives.
- `data/` typed portfolio content.
- `hooks/` browser and interaction hooks.
- `lib/` utilities, motion variants, validation schemas.
- `store/` Zustand UI state.
- `styles/` global theme and Tailwind layers.
- `public/assets/` optimized static visual assets.

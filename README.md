# Mutaz Alqaimary — Front-End Developer Portfolio

Personal portfolio website for Mutaz Alqaimary, a front-end developer, built with the Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

Live site: [https://frontend-developer-portfolio-bice.vercel.app](https://frontend-developer-portfolio-bice.vercel.app)

## Overview

This project presents a personal portfolio with sections for hero, about, skills, projects, experience, and contact. The content is typed and centralized in `data/portfolio.ts`, while the UI is split into reusable sections, animation helpers, and small interface primitives.

## Features

- App Router architecture with server-rendered pages and metadata.
- Responsive portfolio sections for profile, skills, projects, experience, and contact.
- Interactive 3D hero scene using Three.js, React Three Fiber, Drei, and postprocessing.
- Motion system with Framer Motion reveal effects, scroll progress, and reduced-motion support.
- Dark and light theme support through `next-themes`.
- Typed portfolio data, project modals, active-section navigation, and reusable UI components.
- SEO setup with Metadata API, Open Graph image, sitemap, robots, JSON-LD, and configurable site URL.
- Honest, API-free contact section: Zod-validated `mailto:` composer plus prominent direct email and LinkedIn links.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Three.js, React Three Fiber, Drei
- Zustand
- Zod
- Lucide React and React Icons

## Project Structure

```txt
app/                    App Router pages, layout, loading, not-found, sitemap, robots
components/3d/          React Three Fiber hero scene
components/animations/  Cursor, loader, reveal, and scroll progress components
components/sections/    Main portfolio sections
components/ui/          Reusable UI primitives
data/                   Typed portfolio content
hooks/                  Browser, interaction, and accessibility hooks
lib/                    Utilities, motion variants, and validation schemas
providers/              Theme provider
store/                  Zustand UI state
styles/                 Global Tailwind and CSS variable theme
public/                 Static assets, favicon, and Open Graph image
types/                  Shared TypeScript models
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact

The contact section is intentionally free of any third-party email service or API. The primary
contact methods are shown prominently as direct links:

- Email: `mutazalqaimary5@gmail.com`
- LinkedIn: <https://www.linkedin.com/in/mutaz-alqaimary-0a53a125a>

The form is a convenience composer: it validates input with Zod on the client, then opens the
visitor's own email app pre-filled with their message via a `mailto:` link. No data is sent to any
server, no secrets are required, and there is no fake "message sent" state.

## Customizing Content

Most portfolio content lives in `data/portfolio.ts`:

- `navItems` controls the navigation links.
- `skills` controls the skills grid.
- `projects` controls project cards, modal details, images, GitHub links, and demos.
- `experience` controls the timeline content.
- `socials` controls footer and contact links.

Project screenshots are stored in `public/assets/projects/`.

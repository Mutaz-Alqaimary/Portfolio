import { BriefcaseBusiness, Code2, Mail, MessageCircle } from "lucide-react";
import type { Experience, NavItem, Project, Skill, SocialLink } from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", section: "home" },
  { label: "About", href: "#about", section: "about" },
  { label: "Skills", href: "#skills", section: "skills" },
  { label: "Projects", href: "#projects", section: "projects" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Contact", href: "#contact", section: "contact" }
];

export const skills: Skill[] = [
  { name: "Next.js App Router", level: 96, category: "Core" },
  { name: "React Architecture", level: 94, category: "Core" },
  { name: "TypeScript", level: 92, category: "Core" },
  { name: "Three.js / R3F", level: 88, category: "Animation" },
  { name: "Framer Motion", level: 93, category: "Animation" },
  { name: "GSAP Timelines", level: 82, category: "Animation" },
  { name: "Design Systems", level: 90, category: "Architecture" },
  { name: "State Management", level: 86, category: "Architecture" },
  { name: "Performance Budgets", level: 89, category: "Tooling" },
  { name: "Testing Strategy", level: 81, category: "Tooling" }
];

export const projects: Project[] = [
  {
    title: "Nexus Commerce Studio",
    slug: "nexus-commerce-studio",
    description: "Headless storefront interface with motion-led product discovery and realtime merch tooling.",
    details:
      "Designed a composable App Router architecture, optimized image delivery, and created interactive product modules that reduced decision friction across mobile and desktop flows.",
    image: "/assets/projects/nexus.svg",
    stack: ["Next.js", "TypeScript", "R3F", "Zustand", "Stripe"],
    github: "https://github.com/example/nexus-commerce",
    demo: "https://nexus-commerce.example.com",
    impact: "38% faster route transitions"
  },
  {
    title: "SignalOps Dashboard",
    slug: "signalops-dashboard",
    description: "Dense operational dashboard for engineering teams with accessible charts and command workflows.",
    details:
      "Built a resilient component system, keyboard-first interaction patterns, and progressive data states for high-frequency operational review.",
    image: "/assets/projects/signalops.svg",
    stack: ["React", "TanStack", "Tailwind", "Zod", "Motion"],
    github: "https://github.com/example/signalops",
    demo: "https://signalops.example.com",
    impact: "2.4s faster daily triage"
  },
  {
    title: "Astra Launch System",
    slug: "astra-launch-system",
    description: "Interactive launch site with cinematic WebGL visuals and conversion-focused content modules.",
    details:
      "Delivered a performant 3D hero, scroll choreography, and reusable content primitives tuned for Vercel edge deployment.",
    image: "/assets/projects/astra.svg",
    stack: ["Next.js", "Three.js", "GSAP", "Vercel", "MDX"],
    github: "https://github.com/example/astra-launch",
    demo: "https://astra-launch.example.com",
    impact: "96 Lighthouse performance"
  }
];

export const experience: Experience[] = [
  {
    role: "Senior Front-End Developer",
    company: "Independent Studio",
    period: "2024 - Present",
    description: "Building premium web interfaces for SaaS, commerce, and creative technology clients.",
    highlights: ["Led App Router migrations", "Created animation systems", "Improved Core Web Vitals"]
  },
  {
    role: "React Engineer",
    company: "Product Lab",
    period: "2021 - 2024",
    description: "Shipped design systems and production interfaces for fast-growing product teams.",
    highlights: ["Scaled component libraries", "Built typed form workflows", "Mentored front-end teams"]
  },
  {
    role: "UI Developer",
    company: "Digital Agency",
    period: "2019 - 2021",
    description: "Created responsive, brand-driven web experiences with animation and CMS integrations.",
    highlights: ["Delivered award-style microsites", "Optimized mobile UX", "Improved accessibility baselines"]
  }
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/example", icon: Code2 },
  { label: "LinkedIn", href: "https://linkedin.com/in/example", icon: BriefcaseBusiness },
  { label: "Twitter", href: "https://twitter.com/example", icon: MessageCircle },
  { label: "Email", href: "mailto:hello@portfolio.dev", icon: Mail }
];

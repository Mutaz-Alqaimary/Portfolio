import { Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
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
  { name: "HTML & Semantic UI", level: 100, category: "Core" },
  { name: "CSS / Tailwind CSS", level: 95, category: "Core" },
  { name: "React Fundamentals", level: 100, category: "Core" },
  { name: "TypeScript Basics", level: 93, category: "Core" },
  { name: "Next.js App Router", level: 94, category: "Architecture" },
  { name: "Component Structure", level: 100, category: "Architecture" },
  { name: "Forms & Zod Validation", level: 92, category: "Architecture" },
  { name: "Local / URL State", level: 96, category: "Architecture" },
  { name: "Framer Motion", level: 88, category: "Animation" },
  { name: "Three.js / R3F Basics", level: 86, category: "Animation" },
  { name: "Responsive Design", level: 100, category: "Tooling" },
  { name: "Git, ESLint & TypeScript", level: 92, category: "Tooling" }
];

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    description: "Responsive portfolio built to present my front-end skills, projects, learning path, and contact details",
    details:
      "Built with the Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and a lightweight 3D hero scene. The focus is clean structure, responsive layouts, accessible sections, and honest presentation for a first front-end role",
    image: "/assets/projects/nexus.svg",
    stack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "R3F"],
    github: "https://github.com/Mutaz-Alqaimary",
    demo: "https://github.com/Mutaz-Alqaimary",
    impact: "Portfolio project"
  },
  {
    title: "Dashboard UI Practice",
    slug: "dashboard-ui-practice",
    description: "A front-end practice build focused on cards, tables, filters, empty states, and responsive dashboard layout",
    details:
      "Practiced turning dashboard requirements into reusable UI sections with clear information hierarchy, keyboard-friendly controls, form validation, and maintainable component boundaries",
    image: "/assets/projects/signalops.svg",
    stack: ["React", "TypeScript", "Tailwind", "Zod", "Motion"],
    github: "https://github.com/Mutaz-Alqaimary",
    demo: "https://github.com/Mutaz-Alqaimary",
    impact: "Learning project"
  },
  {
    title: "Commerce Landing UI",
    slug: "commerce-landing-ui",
    description: "A landing page concept exploring product sections, responsive composition, motion, and clear calls to action",
    details:
      "Focused on building a polished marketing interface without overloading the page: semantic sections, optimized visual hierarchy, accessible buttons, and motion that supports the content",
    image: "/assets/projects/astra.svg",
    stack: ["Next.js", "Tailwind", "Framer Motion", "Responsive UI", "Vercel"],
    github: "https://github.com/Mutaz-Alqaimary",
    demo: "https://github.com/Mutaz-Alqaimary",
    impact: "Practice concept"
  }
];

export const experience: Experience[] = [
  {
    role: "Front-End Developer",
    company: "Personal projects and portfolio",
    period: "2026 - Present",
    description: "Building portfolio-ready projects while preparing for my first professional front-end role",
    highlights: ["Next.js App Router practice", "Responsive and accessible UI", "Project documentation"]
  },
  {
    role: "React & TypeScript Learner",
    company: "Self-directed study",
    period: "2025 - 2026",
    description: "Studying React, TypeScript, component architecture, forms, validation, and state management through practical builds",
    highlights: ["Reusable components", "Typed props and data models", "Form validation with Zod"]
  },
  {
    role: "Frontend Foundations",
    company: "Hands-on learning",
    period: "2024 - 2025",
    description: "Built a foundation in HTML, CSS, JavaScript, responsive layouts, Git workflows, and UI problem solving",
    highlights: ["Semantic HTML", "Mobile-first CSS", "JavaScript fundamentals"]
  }
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Mutaz-Alqaimary", icon: FaGithub },
  { label: "Email", href: "mailto:mutazalqaimary5@gmail.com", icon: Mail }
];

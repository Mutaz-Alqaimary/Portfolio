import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import type { Experience, NavItem, Project, SkillGroup, SocialLink } from "@/types/portfolio";

export const profile = {
  name: "Mutaz Alqaimary",
  role: "Front-End Developer",
  email: "mutazalqaimary5@gmail.com",
  github: "https://github.com/Mutaz-Alqaimary",
  linkedin: "https://www.linkedin.com/in/mutaz-alqaimary-0a53a125a"
} as const;

export const navItems: NavItem[] = [
  { label: "Home", href: "#home", section: "home" },
  { label: "About", href: "#about", section: "about" },
  { label: "Skills", href: "#skills", section: "skills" },
  { label: "Projects", href: "#projects", section: "projects" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "Contact", href: "#contact", section: "contact" }
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages & Markup",
    items: ["HTML", "CSS", "JavaScript", "TypeScript"]
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Next.js (App Router)", "React Hooks", "React Query"]
  },
  {
    title: "Styling & Animation",
    items: ["Tailwind CSS", "Responsive Design", "Framer Motion", "GSAP", "Three.js / React Three Fiber"]
  },
  {
    title: "State Management",
    items: ["Context API", "Zustand", "Redux"]
  },
  {
    title: "Architecture & Performance",
    items: ["Server & Client Components", "SSR / SSG / ISR", "Caching Strategies", "Forms & Zod Validation", "SEO"]
  },
  {
    title: "Tooling & Workflow",
    items: ["Git & GitHub", "ESLint", "Prettier", "Accessibility"]
  }
];

export const projects: Project[] = [
  {
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    description:
      "Modern portfolio website showcasing projects, technical skills, and front-end development experience.",
    details:
      "A personal portfolio built to present my work, highlight technical growth, and demonstrate modern front-end development practices. Features responsive layouts, interactive animations, dark mode support, and a 3D hero section designed to create an engaging user experience.",
    image: "/assets/projects/portfolio.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "Zod"
    ],
    github: "https://github.com/Mutaz-Alqaimary/Portfolio",
    demo: "https://frontend-developer-portfolio-bice.vercel.app",
    impact: "Personal portfolio and professional presence"
  },
  {
    title: "Hotel Administration Dashboard",
    slug: "hotel-administration-dashboard",
    description:
      "Hotel management dashboard that enables staff to manage bookings, cabins, guests, and daily operations.",
    details:
      "A full-featured administration platform built for hotel staff. Includes booking management, cabin administration, guest tracking, authentication, analytics, filtering, and form handling. Focused on creating efficient workflows and a clean user experience for operational tasks.",
    image: "/assets/projects/hotel-dashboard.png",
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "React Query",
      "React Hook Form",
      "Styled Components",
      "Recharts",
      "React Router"
    ],
    github: "https://github.com/Mutaz-Alqaimary/the-wild-oasis",
    demo: "https://the-wild-oasis-ten-xi-56.vercel.app",
    impact: "Hotel operations management platform"
  },
  {
    title: "Hotel Booking Website",
    slug: "hotel-booking-platform",
    description:
      "Online hotel booking platform where guests can browse cabins, make reservations, and manage their stays.",
    details:
      "A customer-facing booking application built to deliver a smooth reservation experience. Features cabin browsing, availability management, authentication, date selection, and booking workflows, with a strong focus on accessibility, responsiveness, and performance.",
    image: "/assets/projects/hotel-booking.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "NextAuth",
      "Framer Motion",
      "React Day Picker",
      "Date-fns"
    ],
    github: "https://github.com/Mutaz-Alqaimary/the-wild-oasis-website",
    demo: "https://the-wild-oasis-website-pi-sand.vercel.app",
    impact: "Online hotel reservation platform"
  }
];

export const experience: Experience[] = [
  {
    role: "Front-End Developer",
    company: "Personal projects and portfolio",
    period: "2026 - Present",
    description:
      "Building portfolio-ready projects while preparing for my first professional front-end role",
    highlights: [
      "Next.js App Router practice",
      "Responsive and accessible UI",
      "Project documentation"
    ]
  },
  {
    role: "React & TypeScript Learner",
    company: "Self-directed study",
    period: "2025 - 2026",
    description:
      "Studying React, TypeScript, component architecture, forms, validation, and state management through practical builds",
    highlights: ["Reusable components", "Typed props and data models", "Form validation with Zod"]
  },
  {
    role: "Frontend Foundations",
    company: "Hands-on learning",
    period: "2024 - 2025",
    description:
      "Built a foundation in HTML, CSS, JavaScript, responsive layouts, Git workflows, and UI problem solving",
    highlights: ["Semantic HTML", "Mobile-first CSS", "JavaScript fundamentals"]
  }
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail }
];

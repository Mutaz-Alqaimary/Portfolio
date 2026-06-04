import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";


export type NavItem = {
  label: string;
  href: string;
  section: string;
};

export type Skill = {
  name: string;
  level: number;
  category: "Core" | "Animation" | "Architecture" | "Tooling";
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  details: string;
  image: string;
  stack: string[];
  github: string;
  demo: string;
  impact: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon | IconType;
};

"use client";

import dynamic from "next/dynamic";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { LinkButton } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { fadeUp, stagger } from "@/lib/motion";
import Link from "next/link";

const HeroScene = dynamic(() => import("@/components/3d/hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.14),transparent_34rem)]" />
  )
});

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden">
      <div className="absolute inset-0">
        <HeroScene />
      </div>
      <div className="from-background/20 via-background/30 to-background absolute inset-0 bg-linear-to-b" />
      <motion.div
        className="relative z-10 container flex min-h-svh max-w-5xl flex-col items-start justify-center pt-28 pb-24 sm:pt-32"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUp}
          className="border-primary/35 bg-primary/12 text-primary mb-4 inline-flex max-w-full items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-medium sm:mb-5 sm:px-4 sm:text-sm"
        >
          <Sparkles className="size-4" />
          <span className="truncate">Front-End Developer · Available for work</span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="text-hero-title max-w-2xl text-[clamp(2rem,6vw,4.4rem)] leading-[1.08] font-semibold tracking-tight drop-shadow-[0_1px_14px_hsl(var(--card)/0.86)]"
        >
          <span className="text-primary mb-2 block text-[clamp(1.1rem,2.6vw,1.6rem)] font-medium tracking-normal drop-shadow-none sm:mb-3">
            Mutaz Alqaimary
          </span>
          Crafting sleek React and Next.js interfaces for the modern web
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="text-foreground/78 mt-4 max-w-xl text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8"
        >
          I build responsive, accessible web interfaces with React, Next.js, and TypeScript, with a
          focus on clean architecture, motion, and performance.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-7 flex w-full flex-wrap gap-3 sm:mt-9 sm:w-auto sm:gap-4"
        >
          <MagneticButton>
            <LinkButton href="#projects">View projects</LinkButton>
          </MagneticButton>
          <MagneticButton>
            <LinkButton
              href="https://github.com/Mutaz-Alqaimary"
              target="_blank"
              variant="secondary"
              aria-label="Open GitHub profile"
            >
              <Code2 className="size-4" />
              GitHub
            </LinkButton>
          </MagneticButton>
        </motion.div>
      </motion.div>
      <Link
        href="#about"
        aria-label="Scroll to about section"
        className="border-border bg-card/75 text-muted-foreground hover:text-primary absolute bottom-5 left-1/2 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-2xl border backdrop-blur transition sm:bottom-8 sm:size-12"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </Link>
    </section>
  );
}

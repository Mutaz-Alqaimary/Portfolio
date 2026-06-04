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
  loading: () => <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.14),transparent_34rem)]" />
});

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-svh overflow-hidden">
      <div className="absolute inset-0">
        <HeroScene />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/30 to-background" />
      <motion.div
        className="container relative z-10 flex min-h-svh max-w-5xl flex-col items-start justify-center pb-24 pt-28 sm:pt-32"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUp} className="mb-4 inline-flex max-w-full items-center gap-2 rounded-2xl border border-primary/35 bg-primary/12 px-3 py-2 text-xs font-medium text-primary sm:mb-5 sm:px-4 sm:text-sm">
          <Sparkles className="size-4" />
          <span className="truncate">Fresh front-end developer</span>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          className="max-w-3xl text-[clamp(2.35rem,8vw,5.65rem)] font-semibold leading-[1.04] tracking-tight text-foreground drop-shadow-[0_1px_18px_hsl(var(--background)/0.76)]"
        >
          Building clean React interfaces while growing into production front-end work
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-4 max-w-xl text-base leading-7 text-foreground/78 sm:mt-5 sm:text-lg sm:leading-8"
        >
          I am a junior front-end developer focused on React, Next.js, TypeScript, responsive UI, accessibility, and practical project-based learning
        </motion.p>
        <motion.div variants={fadeUp} className="mt-7 flex w-full flex-wrap gap-3 sm:mt-9 sm:w-auto sm:gap-4">
          <MagneticButton>
            <LinkButton href="#projects">View projects</LinkButton>
          </MagneticButton>
          <MagneticButton>
            <LinkButton href="https://github.com/Mutaz-Alqaimary" target="_blank" variant="secondary" aria-label="Open GitHub profile">
              <Code2 className="size-4" />
              GitHub
            </LinkButton>
          </MagneticButton>
        </motion.div>
      </motion.div>
      <Link
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-5 left-1/2 z-10 grid size-11 -translate-x-1/2 place-items-center rounded-2xl border border-border bg-card/75 text-muted-foreground backdrop-blur transition hover:text-primary sm:bottom-8 sm:size-12"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </Link>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Cpu, Layers3, Rocket } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/portfolio";

const pillars = [
  { icon: Layers3, title: "Structured components", copy: "Reusable React pieces, typed props, and clear styling patterns." },
  { icon: Cpu, title: "Performance mindset", copy: "Learning to keep interfaces fast, responsive, and light on unnecessary JavaScript." },
  { icon: Rocket, title: "Product details", copy: "Small interaction choices that make pages easier to read, use, and trust." }
];

export function AboutSection() {
  return (
    <section id="about" className="container py-16 sm:py-24 lg:py-32">
      <SectionHeading
        eyebrow="About"
        title="A fresh developer with strong front-end focus"
        description="I do not have previous job experience yet, so this portfolio focuses on what I can build, how I learn, and the standards I am practicing every day"
      />
      <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
        {pillars.map((pillar) => (
          <Reveal key={pillar.title}>
            <motion.article
              whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
              className="glass min-h-52 rounded-2xl p-5 sm:min-h-64 sm:p-6"
            >
              <pillar.icon className="size-7 text-primary sm:size-8" />
              <h3 className="mt-6 text-lg font-semibold sm:mt-8 sm:text-xl">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:mt-4 sm:text-base">{pillar.copy}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-6 glass rounded-2xl p-5 sm:mt-8 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-primary sm:text-sm sm:tracking-[0.32em]">Current focus</p>
            <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">React fundamentals, Next.js App Router, TypeScript, and accessible UI</h3>
          </div>
          <div className="space-y-5">
            {experience.slice(0, 2).map((item) => (
              <div key={item.company} className="rounded-2xl border border-border/70 bg-background/50 p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="font-semibold">{item.role}</h4>
                  <span className="text-sm text-primary">{item.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.company}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

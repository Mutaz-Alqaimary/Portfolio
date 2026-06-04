"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 45%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" ref={ref} className="container relative py-16 sm:py-24 lg:py-32">
      <SectionHeading
        eyebrow="Experience"
        title="Learning path of my journey to become a front-end developer"
        description="I am looking for my first front-end role, so this timeline shows my current practice, study focus, and project-based growth"
      />
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border sm:left-1/2" />
        <motion.div className="absolute left-4 top-0 w-0.5 bg-primary sm:left-1/2" style={{ height }} />
        <div className="space-y-6 sm:space-y-8">
          {experience.map((item, index) => (
            <Reveal key={`${item.company}-${item.period}`}>
              <article className={`relative grid gap-6 sm:grid-cols-2 ${index % 2 === 0 ? "" : "sm:[&>div]:col-start-2"}`}>
                <span className="absolute left-[0.55rem] top-6 size-4 rounded-full border-2 border-primary bg-background sm:left-[calc(50%-0.45rem)]" />
                <div className="glass ml-10 rounded-2xl p-5 sm:ml-0 sm:p-6">
                  <p className="text-sm text-primary">{item.period}</p>
                  <h3 className="mt-3 text-lg font-semibold sm:text-xl">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.company}</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">{item.description}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>- {highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

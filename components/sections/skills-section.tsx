"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skills } from "@/data/portfolio";

const categories = ["Core", "Animation", "Architecture", "Tooling"] as const;

export function SkillsSection() {
  return (
    <section id="skills" className="container py-16 sm:py-24 lg:py-32">
      <SectionHeading
        eyebrow="Skills"
        title="Skills I am actively building through practice"
        description="My current front-end toolkit covers React, Next.js, TypeScript, responsive styling, motion, validation, and the development workflow around them"
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {categories.map((category) => (
          <Reveal key={category}>
            <div className="glass h-full rounded-2xl p-4 sm:p-5">
              <h3 className="mb-4 text-lg font-semibold sm:mb-5">{category}</h3>
              <div className="space-y-4 sm:space-y-5">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.025 }}
                      className="border-border/60 bg-background/50 rounded-2xl border p-4"
                    >
                      <div className="flex items-center justify-between gap-4 text-sm">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="bg-muted mt-3 h-2 overflow-hidden rounded-full">
                        <motion.div
                          className="from-primary to-accent h-full rounded-full bg-linear-to-r"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

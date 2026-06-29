import { Reveal } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="container py-16 sm:py-24 lg:py-32">
      <SectionHeading
        eyebrow="Skills"
        title="Skills and technologies I work with"
        description="A front-end toolkit spanning React, Next.js, and TypeScript, with styling, motion, state management, architecture, and the workflow around them."
      />
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <Reveal key={group.title}>
            <div className="glass h-full rounded-2xl p-5 sm:p-6">
              <h3 className="mb-4 text-lg font-semibold">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border-border/60 bg-background/50 rounded-full border px-3 py-1 text-sm text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

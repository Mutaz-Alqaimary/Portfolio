"use client";

import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { ProjectModal } from "@/components/ui/project-modal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/portfolio";
import { useUiStore } from "@/store/use-ui-store";
import Link from "next/link";

export function ProjectsSection() {
  const openProject = useUiStore((state) => state.openProject);

  return (
    <section id="projects" className="container py-16 sm:py-24 lg:py-32">
      <SectionHeading
        eyebrow="Projects"
        title="Selected builds with interaction depth."
        description="A sample of product interfaces, dashboards, and WebGL experiences shaped for measurable quality and memorable UX."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Reveal key={project.slug}>
            <motion.article
              whileHover={{ y: -10, rotateX: 3, rotateY: -3 }}
              className="glass group flex h-full flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-16/11 overflow-hidden">
                <Image src={project.image} alt={`${project.title} interface preview`} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 33vw, 100vw" />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-sm text-primary">{project.impact}</p>
                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground sm:text-base">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button variant="secondary" onClick={() => openProject(project.slug)}>Details</Button>
                  <Link target="_blank" href={project.github} aria-label={`${project.title} GitHub`} className="grid size-11 place-items-center rounded-2xl border border-border transition hover:border-primary sm:size-12">
                    <Code2 className="size-4" />
                  </Link>
                  <Link target="_blank" href={project.demo} aria-label={`${project.title} live demo`} className="grid size-11 place-items-center rounded-2xl border border-border transition hover:border-primary sm:size-12">
                    <ExternalLink className="size-4" />
                  </Link>
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <ProjectModal />
    </section>
  );
}

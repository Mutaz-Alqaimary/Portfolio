"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { projects } from "@/data/portfolio";
import { useUiStore } from "@/store/use-ui-store";

export function ProjectModal() {
  const projectSlug = useUiStore((state) => state.projectSlug);
  const closeProject = useUiStore((state) => state.closeProject);
  const project = projects.find((item) => item.slug === projectSlug);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-background/86 p-3 backdrop-blur-xl sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
          onClick={closeProject}
        >
          <motion.div
            className="glass max-h-[90svh] w-full max-w-3xl overflow-auto rounded-2xl"
            initial={{ y: 36, scale: 0.96 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 24, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-16/10 sm:aspect-16/8">
              <Image src={project.image} alt="" fill className="object-cover" sizes="768px" />
              <button
                type="button"
                aria-label="Close project details"
                className="cursor-pointer transition hover:border-primary hover:text-primary absolute right-3 top-3 grid size-10 place-items-center rounded-2xl bg-background/85 backdrop-blur sm:right-4 sm:top-4 sm:size-11"
                onClick={closeProject}
              >
                <X className="size-5" />
              </button>
            </div>
            <div className="p-5 sm:p-8">
              <p className="text-sm text-primary">{project.impact}</p>
              <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">{project.details}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

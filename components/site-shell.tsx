"use client";

import { useEffect, useMemo, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedCursor } from "@/components/animations/animated-cursor";
import { ScrollProgress } from "@/components/animations/scroll-progress";
import { Navbar } from "@/components/navbar";
import { useActiveSection } from "@/hooks/use-active-section";
import { navItems } from "@/data/portfolio";
import { useUiStore } from "@/store/use-ui-store";

export function SiteShell({ children }: { children: ReactNode }) {
  const sectionIds = useMemo(() => navItems.map((item) => item.section), []);
  const projectOpen = useUiStore((state) => Boolean(state.projectSlug));

  useActiveSection(sectionIds);

  useEffect(() => {
    document.documentElement.style.setProperty("--x", "50%");
    document.documentElement.style.setProperty("--y", "20%");
  }, []);

  return (
    <div id="app-shell" inert={projectOpen}>
      <ScrollProgress />
      <AnimatedCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          className="bg-radial-fade relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

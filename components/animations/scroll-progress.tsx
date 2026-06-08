"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 26 });

  return <motion.div className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-primary lg:hidden" style={{ scaleX }} />;
}

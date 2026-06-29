"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export function AnimatedCursor() {
  const isTouch = useMediaQuery("(pointer: coarse)");
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 36 });
  const springY = useSpring(y, { stiffness: 500, damping: 36 });

  useEffect(() => {
    if (isTouch) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX - 10);
      y.set(event.clientY - 10);
      setVisible(true);
      document.documentElement.style.setProperty("--x", `${(event.clientX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty("--y", `${(event.clientY / window.innerHeight) * 100}%`);
    };

    const hide = () => setVisible(false);

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerleave", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", hide);
    };
  }, [isTouch, x, y]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-50 hidden size-5 rounded-full border border-primary/80 mix-blend-screen md:block"
      style={{ x: springX, y: springY, opacity: visible ? 1 : 0 }}
    />
  );
}

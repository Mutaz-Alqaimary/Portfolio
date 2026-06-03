"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader({ fixed = false }: { fixed?: boolean }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 950);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className={
            fixed
              ? "bg-background fixed inset-0 z-60 grid place-items-center"
              : "bg-background grid place-items-center"
          }
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <motion.div
            className="border-primary/40 bg-primary/10 shadow-glow size-16 rounded-2xl border"
            animate={{ rotate: 360, scale: [1, 1.08, 1] }}
            transition={{
              rotate: { duration: 1.6, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

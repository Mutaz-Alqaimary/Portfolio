"use client";

import { motion } from "framer-motion";

export function Loader({ fixed = false }: { fixed?: boolean }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={
        fixed
          ? "bg-background fixed inset-0 z-60 grid place-items-center"
          : "bg-background grid place-items-center"
      }
    >
      <motion.div
        aria-hidden="true"
        className="border-primary/40 bg-primary/10 shadow-glow size-16 rounded-2xl border"
        animate={{ rotate: 360, scale: [1, 1.08, 1] }}
        transition={{
          rotate: { duration: 1.6, repeat: Infinity, ease: "linear" },
          scale: { duration: 1, repeat: Infinity }
        }}
      />
    </div>
  );
}

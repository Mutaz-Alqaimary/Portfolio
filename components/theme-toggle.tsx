"use client";

import { Check, Laptop, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RefObject, useMemo, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useMounted } from "@/hooks/use-mounted";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";

const themeOptions = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Laptop }
] as const;

export function ThemeToggle() {
  const [open, setOpen] = useState(false);
  const mounted = useMounted();
  const shouldReduceMotion = useReducedMotion();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme, setTheme, theme } = useTheme();

  const currentTheme = mounted ? theme ?? "system" : "system";
  const currentOption = useMemo(
    () => themeOptions.find((option) => option.value === currentTheme) ?? themeOptions[2],
    [currentTheme]
  );
  const CurrentIcon = mounted && resolvedTheme === "dark" ? Moon : currentOption.icon;

  useOutsideClick(menuRef, () => setOpen(false), { enabled: open });

  return (
    <div ref={menuRef as RefObject<HTMLDivElement>} className="relative">
      <button
        type="button"
        className="border-border/80 bg-card/72 text-foreground hover:border-primary/45 hover:bg-muted/80 focus:ring-primary/45 grid size-10 cursor-pointer place-items-center rounded-2xl border shadow-sm transition focus:outline-hidden focus:ring-2 sm:size-11"
        aria-label={`Theme mode: ${currentOption.label}`}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        <CurrentIcon className="size-4.5" aria-hidden="true" />
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="theme-menu"
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -6, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -6, scale: shouldReduceMotion ? 1 : 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.18, ease: "easeOut" }}
            className="border-border/80 bg-background/96 absolute right-0 top-[calc(100%+0.5rem)] z-50 w-40 origin-top-right rounded-2xl border p-1.5 shadow-xl shadow-black/15 backdrop-blur-xl"
            role="menu"
          >
            {themeOptions.map((option) => {
              const Icon = option.icon;
              const active = currentTheme === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                    active
                      ? "bg-primary/14 text-primary"
                      : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  )}
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => {
                    setTheme(option.value);
                    setOpen(false);
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="size-4" aria-hidden="true" />
                    {option.label}
                  </span>
                  {active ? <Check className="size-4" aria-hidden="true" /> : null}
                </button>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

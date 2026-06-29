"use client";

import Link from "next/link";
import { Code2, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { RefObject, useCallback, useRef, useState } from "react";
import { navItems } from "@/data/portfolio";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import { useUiStore } from "@/store/use-ui-store";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const menuOffset = shouldReduceMotion ? 0 : -8;
  const activeSection = useUiStore((state) => state.activeSection);
  const setActiveSection = useUiStore((state) => state.setActiveSection);
  const logoActive = activeSection === "home";
  const closeMenu = useCallback(() => setOpen(false), []);

  useOutsideClick(menuRef, closeMenu, { enabled: open });

  return (
    <header className="fixed top-0 right-0 left-0 z-40 px-2 py-2.5 sm:px-4 sm:py-3">
      <nav className="border-border/80 bg-background/84 container flex min-h-14 items-center justify-between gap-2 rounded-2xl border px-2.5 py-2 shadow-lg shadow-black/12 backdrop-blur-xl sm:min-h-16 sm:gap-3 sm:px-4">
        <Link
          href="#home"
          className={cn(
            "flex min-w-0 flex-1 items-center gap-2 rounded-2xl py-1 pr-1 text-sm font-semibold transition-colors sm:gap-3 sm:pr-3 lg:flex-none lg:text-base",
            "text-foreground hover:text-primary"
          )}
          aria-label="Mutaz Alqaimary — back to top"
          aria-current={logoActive ? "page" : undefined}
          onClick={() => setActiveSection("home")}
        >
          <span
            className={cn(
              "grid size-9 shrink-0 place-items-center rounded-2xl border transition-colors sm:size-10","bg-primary/12 text-primary border-transparent"
            )}
          >
            <Code2 className="size-5" />
          </span>
          <span className="hidden truncate sm:inline lg:max-w-46 xl:max-w-none">
            Mutaz Alqaimary
          </span>
        </Link>

        <div className="hidden min-w-0 items-center justify-center gap-1 lg:flex xl:gap-1.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setActiveSection(item.section)}
              className={cn(
                "text-muted-foreground hover:border-primary/30 hover:bg-primary/10 hover:text-foreground relative rounded-2xl border px-2.5 py-2 text-[0.8125rem] font-medium transition-colors xl:px-4 xl:text-sm",
                activeSection === item.section
                  ? "border-primary/40 bg-primary/15 text-primary shadow-glow"
                  : "border-transparent"
              )}
              aria-current={activeSection === item.section ? "page" : undefined}
            >
              {activeSection === item.section ? (
                <motion.span
                  layoutId="nav-pill"
                  className="bg-primary/15 absolute inset-0 rounded-2xl"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : null}
              <span className="relative">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="border-border/80 bg-card/72 text-foreground hover:border-primary/45 hover:bg-muted/80 focus:ring-primary/45 grid size-10 cursor-pointer place-items-center rounded-2xl border transition focus:ring-2 focus:outline-hidden sm:size-11 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            key="mobile-menu"
            ref={menuRef as RefObject<HTMLDivElement>}
            initial={{ opacity: 0, y: menuOffset, scale: shouldReduceMotion ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: menuOffset, scale: shouldReduceMotion ? 1 : 0.98 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.22, ease: "easeOut" }}
            className="border-border/80 bg-background/96 container mt-2 origin-top rounded-2xl border p-2 shadow-xl shadow-black/15 backdrop-blur-xl lg:hidden"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -4 }}
                transition={{
                  duration: shouldReduceMotion ? 0.01 : 0.18,
                  delay: shouldReduceMotion ? 0 : index * 0.025,
                  ease: "easeOut"
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.section);
                    setOpen(false);
                  }}
                  className={cn(
                    "block rounded-2xl border px-4 py-3 text-sm font-medium transition-colors",
                    activeSection === item.section
                      ? "border-primary/40 bg-primary/15 text-primary shadow-glow"
                      : "text-muted-foreground hover:border-primary/30 hover:bg-muted hover:text-foreground border-transparent"
                  )}
                  aria-current={activeSection === item.section ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

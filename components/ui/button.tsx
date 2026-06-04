import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary text-background shadow-glow hover:bg-primary/90",
  secondary: "border border-border bg-card/70 text-foreground hover:border-primary/70",
  ghost: "text-muted-foreground hover:bg-muted hover:text-foreground"
};

type ButtonBase = {
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

type ButtonProps = ButtonBase & ButtonHTMLAttributes<HTMLButtonElement>;
type LinkButtonProps = ButtonBase & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex cursor-pointer min-h-11 items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition focus:outline-hidden focus:ring-2 focus:ring-primary/60 sm:min-h-12 sm:px-5 sm:py-3",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function LinkButton({ children, className, variant = "primary", href, ...props }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition focus:outline-hidden focus:ring-2 focus:ring-primary/60 sm:min-h-12 sm:px-5 sm:py-3",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

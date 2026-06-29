"use client";

import { useEffect, type RefObject } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])'
].join(",");

type UseDialogOptions = {
  open: boolean;
  onClose: () => void;
};

/**
 * Accessibility behavior for a modal dialog: moves focus into the panel on open,
 * traps focus inside it, closes on Escape, locks body scroll (compensating for the
 * scrollbar to avoid layout shift), and restores focus to the trigger on close.
 */
export function useDialog<TElement extends HTMLElement>(
  ref: RefObject<TElement | null>,
  { open, onClose }: UseDialogOptions
) {
  useEffect(() => {
    const panel = ref.current;
    if (!open || !panel) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;

    // Lock background scroll without shifting layout when a scrollbar disappears.
    const { body } = document;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = body.style.overflow;
    const previousPaddingRight = body.style.paddingRight;
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    // Move focus into the dialog so screen readers announce its label.
    panel.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((element) => element.offsetParent !== null);

      if (focusables.length === 0) {
        // Keep focus on the panel itself if nothing inside is focusable.
        event.preventDefault();
        panel.focus();
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && (active === first || active === panel || !panel.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      body.style.overflow = previousOverflow;
      body.style.paddingRight = previousPaddingRight;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose, ref]);
}

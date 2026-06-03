"use client";

import { useEffect, type RefObject } from "react";

type OutsideClickOptions = {
  enabled?: boolean;
};

export function useOutsideClick<TElement extends HTMLElement>(
  ref: RefObject<TElement | null>,
  onDismiss: () => void,
  { enabled = true }: OutsideClickOptions = {}
) {
  useEffect(() => {
    if (!enabled) return;

    const handlePointerDown = (event: PointerEvent) => {
      const element = ref.current;
      const target = event.target;

      if (!element || !(target instanceof Node) || element.contains(target)) {
        return;
      }

      onDismiss();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onDismiss();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [enabled, onDismiss, ref]);
}

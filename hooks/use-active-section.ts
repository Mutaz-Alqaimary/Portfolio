"use client";

import { useEffect } from "react";
import { useUiStore } from "@/store/use-ui-store";

export function useActiveSection(sectionIds: string[]) {
  const setActiveSection = useUiStore((state) => state.setActiveSection);

  useEffect(() => {
    const getSections = () =>
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

    const updateActiveSection = (sectionId: string) => {
      setActiveSection(sectionId);

      const nextHash = `#${sectionId}`;
      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, "", nextHash);
      }
    };

    const detectActiveSection = () => {
      const sections = getSections();
      if (!sections.length) return;

      const navOffset = window.innerWidth < 768 ? 120 : 132;
      const scrollPosition = window.scrollY + navOffset;
      const pageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (pageBottom) {
        updateActiveSection(sections[sections.length - 1].id);
        return;
      }

      const currentSection = sections.reduce((active, section) => {
        if (section.offsetTop <= scrollPosition) {
          return section;
        }

        return active;
      }, sections[0]);

      updateActiveSection(currentSection.id);
    };

    const hashSection = window.location.hash.replace("#", "");
    if (sectionIds.includes(hashSection)) {
      setActiveSection(hashSection);
    }

    detectActiveSection();

    window.addEventListener("scroll", detectActiveSection, { passive: true });
    window.addEventListener("resize", detectActiveSection);
    window.addEventListener("hashchange", detectActiveSection);

    return () => {
      window.removeEventListener("scroll", detectActiveSection);
      window.removeEventListener("resize", detectActiveSection);
      window.removeEventListener("hashchange", detectActiveSection);
    };
  }, [sectionIds, setActiveSection]);
}

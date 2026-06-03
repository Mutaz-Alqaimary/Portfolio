"use client";

import { create } from "zustand";

type UiState = {
  activeSection: string;
  projectSlug: string | null;
  setActiveSection: (section: string) => void;
  openProject: (slug: string) => void;
  closeProject: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  activeSection: "home",
  projectSlug: null,
  setActiveSection: (activeSection) => set({ activeSection }),
  openProject: (projectSlug) => set({ projectSlug }),
  closeProject: () => set({ projectSlug: null })
}));

import { create } from "zustand";

interface PageTitleState {
  title: string;
  setTitle: (title: string) => void;
}

export const usePageTitleStore = create<PageTitleState>((set) => ({
  title: "dashboard", // default title
  setTitle: (title) => set({ title }),
}));

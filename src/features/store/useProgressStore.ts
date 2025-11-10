import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  progress: number;
  increaseProgress: (amount: number) => void;
  resetProgress: () => void;
  setProgress: (value: number) => void;
};

export const useHtmlProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      progress: 0,
      increaseProgress: (amount) =>
        set((state) => ({
          progress: Math.min(100, state.progress + amount),
        })),
      setProgress: (value) =>
        set({ progress: Math.min(100, Math.max(0, value)) }),
      resetProgress: () => set({ progress: 0 }),
    }),
    {
      name: "html-lesson-progress",
    }
  )
);

export const usePythonProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      progress: 0,
      increaseProgress: (amount) =>
        set((state) => ({
          progress: Math.min(100, state.progress + amount),
        })),
      setProgress: (value) =>
        set({ progress: Math.min(100, Math.max(0, value)) }),
      resetProgress: () => set({ progress: 0 }),
    }),
    {
      name: "python-lesson-progress",
    }
  )
);

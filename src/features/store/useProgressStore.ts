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

type State = {
  progress: number;
  activeLessonIds: string[];
  totalLessons: number;
  toggleLesson: (lessonId: string) => void;
  setTotalLessons: (n: number) => void;
  resetProgress: () => void;
};

export const usePythonProgressStore = create<State>()(
  persist(
    (set, get) => ({
      progress: 0,
      activeLessonIds: [],
      totalLessons: 0,
      toggleLesson: (lessonId: string) => {
        const { activeLessonIds, totalLessons } = get();
        const exists = activeLessonIds.includes(lessonId);
        const updated = exists
          ? activeLessonIds.filter((id) => id !== lessonId)
          : [...activeLessonIds, lessonId];

        const percentage = totalLessons
          ? Math.round((updated.length / totalLessons) * 100)
          : 0;

        set({ activeLessonIds: updated, progress: percentage });
      },
      setTotalLessons: (n: number) => {
        const { activeLessonIds } = get();
        const percentage = n
          ? Math.round((activeLessonIds.length / n) * 100)
          : 0;
        set({ totalLessons: n, progress: percentage });
      },
      resetProgress: () => set({ activeLessonIds: [], progress: 0 }),
    }),
    { name: "python-progress-storage" }
  )
);

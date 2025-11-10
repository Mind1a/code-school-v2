import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProgressState = {
  progress: number;
  activeLessonIds: string[];
  totalLessons: number;
  toggleLesson: (lessonId: string) => void;
  setTotalLessons: (n: number) => void;
  resetProgress: () => void;
};

export const useHtmlProgressStore = create<ProgressState>()(
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
    { name: "html-progress-storage" }
  )
);

export const usePythonProgressStore = create<ProgressState>()(
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

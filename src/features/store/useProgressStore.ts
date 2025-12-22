import { create } from 'zustand';
import { ProgressState } from '../htmlBasic/type';

const createProgressStore = () =>
  create<ProgressState>((set) => ({
    progress: 0,
    currentElement: 0,
    totalElements: 0,

    setProgress: (current: number, total: number) => {
      const percentage = total > 0 ? Math.round((current / total) * 100) : 0;

      set({ progress: percentage });
    },

    resetProgress: () =>
      set({
        progress: 0,
      }),
  }));

export const useHtmlProgressStore = createProgressStore();
export const usePythonProgressStore = createProgressStore();

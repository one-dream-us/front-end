import { IQuestionResult } from '@/types/interface';
import { create } from 'zustand';

interface QuizResultStore {
  results: IQuestionResult[];
  setResults: (payload: IQuestionResult) => void;
  resetResults: () => void;
}

const quizResultStore = create<QuizResultStore>((set) => ({
  results: [],
  setResults: (payload: IQuestionResult) =>
    set((prev) => ({
      results: [...prev.results, payload],
    })),
  resetResults: () => set({ results: [] }),
}));

export default quizResultStore;

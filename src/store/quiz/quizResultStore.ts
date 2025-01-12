import { IQuestionResult } from '@/types/interface';
import { create } from 'zustand';

interface QuizResultStore {
  results: IQuestionResult[];
  setResults: (payload: IQuestionResult) => void;
}

const quizResultStore = create<QuizResultStore>((set) => ({
  results: [],
  setResults: (payload: IQuestionResult) =>
    set((prev) => ({
      results: [...prev.results, payload],
    })),
}));

export default quizResultStore;

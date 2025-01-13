import { IQuizResult } from '@/types/interface';
import { create } from 'zustand';

interface QuizCompleteStore {
  result: IQuizResult | null;
  setResult: (result: IQuizResult) => void;
}

const quizCompleteStore = create<QuizCompleteStore>((set) => ({
  result: null,
  setResult: (result: IQuizResult) => set({ result }),
}));

export default quizCompleteStore;

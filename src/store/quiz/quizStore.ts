import { create } from 'zustand';

interface QuizStore {
  index: number;
  myChoice: string | null;
  isCorrect: boolean | null;
  quizType: 'random' | 'normal' | null;
  remainQuestion: number;
  setIndex: (index: number) => void;
  setMyChoice: (myChoice: string | null) => void;
  setIsCorrect: (isCorrect: boolean | null) => void;
  setQuizType: (quizType: 'random' | 'normal') => void;
  setRemainQuestion: () => void;
  resetQuizStore: () => void;
}

const quizStore = create<QuizStore>((set) => ({
  index: 0,
  isCorrect: null,
  myChoice: null,
  quizType: null,
  remainQuestion: 5,
  setIndex: (index: number) => set({ index }),
  setMyChoice: (myChoice: string | null) => set({ myChoice }),
  setIsCorrect: (isCorrect: boolean | null) => set({ isCorrect }),
  setQuizType: (quizType: 'random' | 'normal') => set({ quizType }),
  setRemainQuestion: () =>
    set((prev) => ({ remainQuestion: prev.remainQuestion === 0 ? 0 : prev.remainQuestion - 1 })),
  resetQuizStore: () =>
    set({
      index: 0,
      isCorrect: null,
      myChoice: null,
      quizType: null,
      remainQuestion: 5,
    }),
}));

export default quizStore;

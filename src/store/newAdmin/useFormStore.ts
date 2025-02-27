import { create } from 'zustand';

export type AdminDict = {
  sentence: string;
  word: string;
  wordSearch: string;
  definition: string;
  desc: string;
  wordId: null | number;
  id: number;
  draggedWord: string;
  startIndex: number | null;
  endIndex: number | null;
};
export interface UseNewsListStore {
  dictList: AdminDict[];
  setDictList: <T>(payload: { key: keyof AdminDict; value: T; index: number }) => void;
  resetDictList: () => void;
}
export const useNewsListStore = create<UseNewsListStore>((set) => ({
  dictList: [
    {
      id: 0,
      sentence: '',
      word: '',
      wordSearch: '',
      definition: '',
      desc: '',
      wordId: null,
      draggedWord: '',
      startIndex: 0,
      endIndex: 0,
    },
    {
      id: 1,
      sentence: '',
      word: '',
      wordSearch: '',
      definition: '',
      desc: '',
      wordId: null,
      draggedWord: '',
      startIndex: 0,
      endIndex: 0,
    },
    {
      id: 2,
      sentence: '',
      word: '',
      wordSearch: '',
      definition: '',
      desc: '',
      wordId: null,
      draggedWord: '',
      startIndex: 0,
      endIndex: 0,
    },
  ],
  setDictList: ({ index, key, value }) =>
    set((prev) => {
      const newDictList = prev.dictList.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            [key]: value,
          };
        } else {
          return { ...item };
        }
      });
      return { dictList: newDictList };
    }),
  resetDictList: () =>
    set({
      dictList: [
        {
          id: 0,
          sentence: '',
          word: '',
          wordSearch: '',
          definition: '',
          desc: '',
          wordId: null,
          draggedWord: '',
          startIndex: 0,
          endIndex: 0,
        },
        {
          id: 1,
          sentence: '',
          word: '',
          wordSearch: '',
          definition: '',
          desc: '',
          wordId: null,
          draggedWord: '',
          startIndex: 0,
          endIndex: 0,
        },
        {
          id: 2,
          sentence: '',
          word: '',
          wordSearch: '',
          definition: '',
          desc: '',
          wordId: null,
          draggedWord: '',
          startIndex: 0,
          endIndex: 0,
        },
      ],
    }),
}));

export interface UseScheduleStore {
  isSchedule: boolean;
  setIsSchedule: (isSchedule: boolean) => void;
  toggleSchedule: () => void;
  date: string;
  setDate: (date: string) => void;
}

export const useScheduleStore = create<UseScheduleStore>((set) => ({
  isSchedule: false,
  setIsSchedule: (isSchedule) => set({ isSchedule }),
  toggleSchedule: () => set((prev) => ({ isSchedule: !prev.isSchedule })),
  date: '',
  setDate: (date) => set({ date }),
}));

export interface UseUploadTypeStore {
  uploadType: 'immediately' | 'scheduled' | 'draft' | null;
  setUploadType: (uploadType: UseUploadTypeStore['uploadType']) => void;
}
export const useUplodTypeStore = create<UseUploadTypeStore>((set) => ({
  uploadType: null,
  setUploadType: (uploadType) => set({ uploadType }),
}));

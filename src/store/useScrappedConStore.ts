import { create } from 'zustand';

interface ContentState {
  isScrapped: boolean;
  setIsScrapped: (isScrapped: boolean) => void;
}

const useScrappedConStore = create<ContentState>((set) => ({
  isScrapped: false,
  setIsScrapped: (isScrapped: boolean) => set({ isScrapped: isScrapped }),
}));

export default useScrappedConStore;

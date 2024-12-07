import { create } from 'zustand';

interface ScrappedItem {
  dictionaryId: number;
  dictionaryScrapId: number | null;
  scrapped: boolean;
}

interface ScrappedState {
  scrappedData: ScrappedItem[];
  setScrappedData: (data: ScrappedItem[]) => void;
}

const useScrappedStore = create<ScrappedState>((set) => ({
  scrappedData: [],
  setScrappedData: (data) => set({ scrappedData: data }),
}));

export default useScrappedStore;

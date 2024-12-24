import { create } from 'zustand';
import { ScrappedItem } from '@/types/interface';

interface ScrappedState {
  scrappedData: ScrappedItem[];
  setScrappedData: (data: ScrappedItem[]) => void;
}

const useScrappedStore = create<ScrappedState>((set) => ({
  scrappedData: [],
  setScrappedData: (data) => set({ scrappedData: data }),
}));

export default useScrappedStore;

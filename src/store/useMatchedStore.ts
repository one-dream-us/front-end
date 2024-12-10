import { create } from 'zustand';
import { Dictionary } from '@/types/interface';

interface MatchedState {
  matched: Dictionary;
  setMatched: (data: Dictionary) => void;
}

const useMatchedStore = create<MatchedState>((set) => ({
  matched: {} as Dictionary,
  setMatched: (data) => set({ matched: data }),
}));

export default useMatchedStore;

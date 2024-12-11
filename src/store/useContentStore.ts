import { create } from 'zustand';

interface ContentState {
  contentId: number;
  setContentId: (id: number) => void;
}

const useContentStore = create<ContentState>((set) => ({
  contentId: 0,
  setContentId: (id: number) => set({ contentId: id }),
}));

export default useContentStore;

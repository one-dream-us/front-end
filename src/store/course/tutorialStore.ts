import { create } from 'zustand';

interface TutorialStore {
  isNewUser: boolean | null;
  setIsNewUser: (isNewUser: boolean) => void;
}

const tutorialStore = create<TutorialStore>((set) => ({
  isNewUser: null,
  setIsNewUser: (isNewUser: boolean) => set({ isNewUser }),
}));

export default tutorialStore;

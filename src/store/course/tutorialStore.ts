import { create } from 'zustand';

interface TutorialStore {
  newsDeatilTutorial: boolean | null;
  newsCompleteTutorial: boolean | null;
  setNewsDeatilTutorial: (newsDeatilTutorial: boolean) => void;
  setNewsCompleteTutorial: (newsCompleteTutorial: boolean) => void;
}

const tutorialStore = create<TutorialStore>((set) => ({
  newsDeatilTutorial: null,
  setNewsDeatilTutorial: (newsDeatilTutorial: boolean) => set({ newsDeatilTutorial }),
  newsCompleteTutorial: null,
  setNewsCompleteTutorial: (newsCompleteTutorial: boolean) => set({ newsCompleteTutorial }),
}));

export default tutorialStore;

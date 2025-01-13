import { create } from 'zustand';

interface IWord {
  description: string;
  definition: string;
  setDescription: (description: string) => void;
  setDefinition: (definition: string) => void;
}

const useWordStore = create<IWord>((set) => ({
  description: '',
  definition: '',
  setDescription: (description) => set({ description }),
  setDefinition: (definition) => set({ definition }),
}));

export default useWordStore;

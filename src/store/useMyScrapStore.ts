import { create } from 'zustand';

export type MyScrapStoreState = {
  isEditing: boolean;
  selectedIdList: number[];
  allIdList: number[];
  isDelModalOpen: boolean;
  isAllChecked: boolean;

  setIsEditing: (isEditing: boolean) => void;
  setSelectedIdList: (selectedIdList: number[]) => void;
  setAllIdList: (allIdList: number[]) => void;
  setIsDelModalOpen: (isDelModalOpen: boolean) => void;
  setIsAllChecked: (isAllChecked: boolean) => void;
  actions: {
    reset: () => void;
  };
};

const useMyScrapStore = create<MyScrapStoreState>((set) => ({
  isEditing: false,
  selectedIdList: [],
  allIdList: [],
  isDelModalOpen: false,
  isAllChecked: false,

  setIsEditing: (isEditing) => set({ isEditing }),
  setSelectedIdList: (selectedIdList) => set({ selectedIdList }),
  setAllIdList: (allIdList) => set({ allIdList }),
  setIsDelModalOpen: (isDelModalOpen) => set({ isDelModalOpen }),
  setIsAllChecked: (isAllChecked) => set({ isAllChecked }),

  actions: {
    reset: () =>
      set({
        isEditing: false,
        selectedIdList: [],
        allIdList: [],
        isAllChecked: false,
      }),
  },
}));
export default useMyScrapStore;

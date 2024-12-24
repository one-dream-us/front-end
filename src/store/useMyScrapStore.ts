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
};

const useMyScrapStore = create<MyScrapStoreState>((set) => ({
  isEditing: false,
  selectedIdList: [] as number[],
  allIdList: [] as number[],
  isDelModalOpen: false,
  isAllChecked: false,

  setIsEditing: (isEditing: boolean) => set({ isEditing }),
  setSelectedIdList: (selectedIdList: number[]) => set({ selectedIdList }),
  setAllIdList: (allIdList: number[]) => set({ allIdList }),
  setIsDelModalOpen: (isDelModalOpen: boolean) => set({ isDelModalOpen }),
  setIsAllChecked: (isAllChecked: boolean) => set({ isAllChecked }),
}));

export default useMyScrapStore;

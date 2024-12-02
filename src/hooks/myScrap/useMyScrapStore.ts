import { create } from 'zustand';
import { MyScrapStoreState } from '@/types/types';

const useMyScrapStore = create<MyScrapStoreState>((set) => ({
  isEditing: false,
  selectedIdList: [] as number[],
  allIdList: [] as number[],
  isDelModalOpen: false,
  isComModalOpen: false,
  isAllChecked: false,

  setIsEditing: (isEditing: boolean) => set({ isEditing }),
  setSelectedIdList: (selectedIdList: number[]) => set({ selectedIdList }),
  setAllIdList: (allIdList: number[]) => set({ allIdList }),
  setIsDelModalOpen: (isDelModalOpen: boolean) => set({ isDelModalOpen }),
  setIsComModalOpen: (isComModalOpen: boolean) => set({ isComModalOpen }),
  setIsAllChecked: (isAllChecked: boolean) => set({ isAllChecked }),
}));

export default useMyScrapStore;

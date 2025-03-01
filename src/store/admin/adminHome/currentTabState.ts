import { CurrentTabType } from '@/types/interface';
import { create } from 'zustand';

interface CurrentTabStateState {
  currentTab: CurrentTabType;
  setCurrentTab: (currentTab: CurrentTabType) => void;
}

const currentTabState = create<CurrentTabStateState>((set) => ({
  currentTab: (new URLSearchParams(location.search).get('status') as CurrentTabType) ?? 'uploaded',
  setCurrentTab: (currentTab: CurrentTabType) => set({ currentTab }),
}));

export default currentTabState;

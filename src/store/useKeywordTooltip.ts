import { create } from 'zustand';

interface TooltipState {
  showTooltip: boolean;
  setShowTooltip: (tooltipStatus: boolean) => void;
}

const useKeywordTooltip = create<TooltipState>((set) => ({
  showTooltip: false,
  setShowTooltip: (tooltipStatus) => set({ showTooltip: tooltipStatus }),
}));

export default useKeywordTooltip;

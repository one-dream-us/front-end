import { create } from 'zustand';

interface TooltipState {
  tooltip: {
    content: string;
    term: string;
    isScrapped: boolean;
    index: number | null;
  };
  setTooltip: (value: {
    content: string;
    term: string;

    isScrapped: boolean;
    index: number | null;
  }) => void;
}

const useTooltipStore = create<TooltipState>((set) => ({
  tooltip: { content: '', term: '', isScrapped: false, index: null },
  setTooltip: (tooltip) => set({ tooltip: tooltip }),
}));

export default useTooltipStore;

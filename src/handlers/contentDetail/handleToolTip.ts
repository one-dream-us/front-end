import { Dictionary } from '@/types/interface';
export const tooltipHandlers = {
  handleMouseOver: (
    event: MouseEvent,
    setTooltip: (value: { content: string; x: number; y: number } | null) => void,
    dictionaries: Dictionary[],
  ) => {
    const target = event.target as HTMLElement;
    const term = target.textContent || '';
    const matchedItem = dictionaries.find((item) => item.term === term);

    if (matchedItem) {
      const { clientX: x, clientY: y } = event;
      setTooltip({ content: matchedItem.details, x, y });
    }
    console.log('mouse over');
  },

  handleMouseLeave: (
    setTooltip: (value: { content: string; x: number; y: number } | null) => void,
  ) => {
    setTooltip(null);
    console.log('mouse out');
  },
};

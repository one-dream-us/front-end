import { Dictionary } from '@/types/interface';

export const tooltipHandlers = {
  handleClick: (
    event: MouseEvent,
    setTooltip: (value: {
      content: string;
      term: string;
      x: number;
      y: number;
      isScrapped: boolean;
      index: number | null;
    }) => void,
    dictionaries: Dictionary[],
    setMatched: (data: Dictionary) => void,
  ) => {
    const target = event.target as HTMLElement;
    const term = target.textContent?.trim() || '';
    const matchedItem = dictionaries.find((item) => item.term === term);

    setTooltip({ content: '', term: '', x: 0, y: 0, isScrapped: false, index: null });

    if (matchedItem) {
      const { clientX: x, clientY: y } = event;
      setTimeout(() => {
        setTooltip({
          content: matchedItem.details,
          term: matchedItem.term,
          x,
          y,
          index: dictionaries.indexOf(matchedItem),
          isScrapped: matchedItem.scrapped,
        });
        setMatched(matchedItem);
      }, 0);
    }
  },
};

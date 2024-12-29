import { Dictionary } from '@/types/interface';

export const tooltipHandlers = {
  handleClick: (
    event: MouseEvent,
    setTooltip: (value: {
      content: string;
      term: string;
      isScrapped: boolean;
      index: number | null;
    }) => void,
    dictionaries: Dictionary[],
    setMatched: (data: Dictionary) => void,
  ) => {
    const target = event.target as HTMLElement;
    const term = target.textContent?.trim() || '';
    const matchedItem = dictionaries.find((item) => item.term === term);

    if (matchedItem) {
      setTimeout(() => {
        setTooltip({
          content: matchedItem.details,
          term: matchedItem.term,

          index: dictionaries.indexOf(matchedItem),
          isScrapped: matchedItem.scrapped,
        });
        setMatched(matchedItem);
      }, 0);
    } else {
      return;
    }
  },
};

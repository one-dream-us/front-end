import { useLayoutEffect } from 'react';
import { ScrappedItem } from '@/types/interface';
import { MutableRefObject } from 'react';

export default function useHighlightMarks(
  scrappedData: ScrappedItem[],
  elementRefs: MutableRefObject<{ [key: string]: HTMLElement | null }>,
) {
  useLayoutEffect(() => {
    const marks = document.querySelectorAll('mark');

    marks.forEach((mark, index) => {
      const dict = scrappedData[index];

      if (dict?.scrapped) {
        mark.style.backgroundColor = '#A7FFB4';
        mark.style.padding = '2px 1px';
        mark.style.cursor = 'pointer';
        mark.className = `mark mark-${dict?.dictionaryId}`;
      } else {
        mark.style.backgroundColor = '#FFED85';
        mark.style.padding = '2px 1px';
        mark.style.cursor = 'pointer';
        mark.className = `mark mark-${dict?.dictionaryId}`;
      }

      elementRefs.current[mark.className] = mark;
    });
  }, [scrappedData, elementRefs]);
}

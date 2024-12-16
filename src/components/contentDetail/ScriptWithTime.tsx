import { useState } from 'react';
import useMarkEvent from '@/hooks/contentDetail/useMarkEvent';
import { tooltipHandlers } from '@/handlers/contentDetail/handleToolTip';
import { ScriptNTimeProps } from '@/types/interface';
import Tooltip from './Tooltip';
import { useLayoutEffect } from 'react';
import useScrappedStore from '@/store/useScrappedStore';
import useMatchedStore from '@/store/useMatchedStore';
import useToastStore from '@/store/useToastStore';
import { useScrollToElement } from '@/hooks/contentDetail/useScrollToElement';

export default function ScriptWithTime({
  id,
  time,
  script,
  onClick,
  dictionaries,
}: ScriptNTimeProps) {
  const [tooltip, setTooltip] = useState<{
    content: string;
    term: string;
    x: number;
    y: number;
    isScrapped: boolean;
    index: number | null;
  }>({ content: '', term: '', x: 0, y: 0, isScrapped: false, index: null });
  const scrappedData = useScrappedStore((state) => state.scrappedData);
  const matched = useMatchedStore((state) => state.matched);
  const setMatched = useMatchedStore((state) => state.setMatched);
  const hideToast = useToastStore((state) => state.hideToast);

  const { elementRefs } = useScrollToElement();

  useMarkEvent((event) => {
    hideToast();
    tooltipHandlers.handleClick(event, setTooltip, dictionaries, setMatched);
  });

  useLayoutEffect(() => {
    const marks = document.querySelectorAll('mark');
    marks.forEach((mark, index) => {
      const dict = scrappedData[index];
      if (dict?.scrapped) {
        mark.style.backgroundColor = '#A7FFB4';
        mark.style.padding = '2px 1px';
        mark.style.cursor = 'pointer';
        mark.className = `mark-${dict?.dictionaryId}`;
      } else {
        mark.style.backgroundColor = '#FFED85';
        mark.style.padding = '2px 1px';
        mark.style.cursor = 'pointer';
        mark.className = `mark-${dict?.dictionaryId}`;
      }

      elementRefs.current[mark.className] = mark as HTMLElement;
    });
  }, [scrappedData, elementRefs]);

  return (
    <div
      id={id}
      className='mb-8 flex w-full flex-col gap-y-1 leading-170 md:flex-row md:gap-x-[46px] desktop:gap-x-[30px]'
    >
      <button
        id='timestamp'
        type='button'
        className='flex h-5 items-center justify-center self-start rounded-[10px] bg-custom-gray-dark px-2 text-xs text-primary md:mt-1'
        onClick={onClick}
      >
        {time}
      </button>
      <p
        dangerouslySetInnerHTML={{ __html: script }}
        className='text-custom-gray-dark md:text-sm md:leading-170'
      />
      {tooltip.index !== null && (
        <Tooltip tooltip={tooltip} setTooltip={setTooltip} dictionary={matched} />
      )}
    </div>
  );
}

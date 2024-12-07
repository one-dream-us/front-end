import { useState } from 'react';
import useMarkEvent from '@/hooks/contentDetail/useMarkEvent';
import { tooltipHandlers } from '@/handlers/contentDetail/handleToolTip';
import { ScriptNTimeProps } from '@/types/interface';
import Tooltip from './Tooltip';
import { useEffect } from 'react';
import useScrappedStore from '@/store/useScrappedStore';

export default function ScriptWithTime({
  id,
  time,
  script,
  onClick,
  dictionaries,
}: ScriptNTimeProps) {
  const [tooltip, setTooltip] = useState<{
    content: string;
    x: number;
    y: number;
    index: number | null;
  }>({ content: '', x: 0, y: 0, index: null });
  const scrappedData = useScrappedStore((state) => state.scrappedData);

  useMarkEvent((event) => tooltipHandlers.handleMouseOver(event, setTooltip, dictionaries));

  useEffect(() => {
    const marks = document.querySelectorAll('mark');
    marks.forEach((mark, index) => {
      const dict = scrappedData[index];
      if (dict && dict.scrapped) {
        mark.style.backgroundColor = '#A7FFB4';
        mark.style.padding = '2px 1px';
      } else {
        mark.style.backgroundColor = '#FFED85';
        mark.style.padding = '2px 1px';
      }
    });
  }, [scrappedData]);

  return (
    <div
      id={id}
      className='mb-8 flex w-full flex-col gap-y-1 leading-170 md:flex-row md:gap-x-[46px] desktop:gap-x-[30px]'
    >
      <button
        type='button'
        className='flex h-5 items-center justify-center self-start rounded-[10px] bg-custom-gray-dark px-2 text-xs font-medium text-primary md:mt-1'
        onClick={onClick}
      >
        {time}
      </button>
      <div
        dangerouslySetInnerHTML={{ __html: script }}
        className='text-sm leading-170 text-custom-gray-dark'
      />
      {tooltip.index !== null &&
        dictionaries.map((dict, index) => (
          <Tooltip
            key={index}
            content={tooltip.content}
            setTooltip={setTooltip}
            dictionary={dict}
          />
        ))}
    </div>
  );
}

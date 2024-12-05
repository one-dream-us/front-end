import useMarkEvent from '@/hooks/contentDetail/useMarkEvent';
import { tooltipHandlers } from '@/handlers/contentDetail/handleToolTip';
import { Dictionary } from '@/types/interface';
import { useState } from 'react';
import Tooltip from './Tooltip';
import { useRef } from 'react';

export default function ScriptWithTime({
  id,
  time,
  script,
  onClick,
  dictionaries,
}: {
  id: string;
  time: string;
  script: string;
  onClick: () => void;
  dictionaries: Dictionary[];
}) {
  const [tooltip, setTooltip] = useState<{ content: string; x: number; y: number } | null>(null);
  const targetRef = useRef<HTMLElement>(null);

  useMarkEvent(
    (event) => tooltipHandlers.handleMouseOver(event, setTooltip, dictionaries),
    () => tooltipHandlers.handleMouseLeave(setTooltip),
  );

  return (
    <div
      className='mb-8 flex w-full flex-col gap-y-1 md:flex-row md:gap-x-[46px] desktop:gap-x-6'
      id={id}
    >
      <button
        type='button'
        className='flex h-5 items-center justify-center self-start rounded-[10px] bg-gray-300 px-2 text-xs font-medium leading-5 md:mt-1'
        onClick={onClick}
      >
        {time}
      </button>
      {tooltip && <Tooltip content={tooltip.content} targetRef={targetRef} />}
      <div dangerouslySetInnerHTML={{ __html: script }} className='relative' />
    </div>
  );
}

import useTooltipPosition from '@/hooks/contentDetail/useTooltipPosition';
import { useRef } from 'react';

export default function Tooltip({
  content,
  targetRef,
}: {
  content: string;
  targetRef: React.RefObject<HTMLElement>;
}) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  useTooltipPosition(targetRef, tooltipRef);

  return (
    <div
      ref={tooltipRef}
      className='absolute z-10 py-1 px-2 max-w-xs text-xs text-white bg-black rounded'
    >
      {content}
      <div className='absolute bottom-[-5px] left-1/2 h-0 w-0 -translate-x-1/2 transform border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-black' />
    </div>
  );
}

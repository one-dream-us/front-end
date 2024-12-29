import useTooltip from '@/hooks/contentDetail/useTooltip';
import { TooltipProps } from '@/types/interface';

export default function Tooltip({ tooltip, setTooltip, dictionary }: TooltipProps) {
  const { isScrapped, handleScrapClick } = useTooltip(dictionary, setTooltip);

  return (
    <div className='fixed bottom-3 z-10 flex max-h-80 w-[calc(100%-32px)] flex-col rounded-[10px] bg-custom-gray-dark p-4 text-custom-gray-300 opacity-95 shadow-custom md:right-6 md:w-[628px] desktop:absolute desktop:left-0 desktop:top-[310px] desktop:h-56 desktop:max-h-56 desktop:w-[533px]'>
      <span className='mb-1 font-medium desktop:text-sm'>{tooltip.term}</span>
      <p className='overflow-hidden desktop:text-sm'>{tooltip.content}</p>
      <div className='flex gap-x-8 self-end mt-6 desktop:mt-auto'>
        <button
          className='text-xs cursor-pointer'
          onClick={() => setTooltip({ content: '', term: '', isScrapped: false, index: null })}
        >
          닫기
        </button>
        <button
          id={!isScrapped ? 'scrap-term' : undefined}
          className={`cursor-pointer text-xs ${isScrapped ? 'text-custom-gray-lighter' : 'text-primary'}`}
          onClick={handleScrapClick}
        >
          {isScrapped ? '스크랩 취소' : '스크랩하기'}
        </button>
      </div>
    </div>
  );
}

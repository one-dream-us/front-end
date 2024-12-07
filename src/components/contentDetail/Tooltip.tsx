import useTooltip from '@/hooks/contentDetail/useTooltip';
import { TooltipProps } from '@/types/interface';

export default function Tooltip({ content, setTooltip, dictionary }: TooltipProps) {
  const { isScrapped, handleScrapClick } = useTooltip(dictionary, setTooltip);

  return (
    <div className='fixed bottom-3 z-10 flex w-[calc(100%-32px)] flex-col rounded-[10px] bg-custom-gray-dark p-4 text-xs text-custom-gray-300 opacity-95 shadow-custom md:right-6 md:w-[628px] desktop:absolute desktop:-bottom-6 desktop:left-0 desktop:w-[533px]'>
      <span className='mb-1 text-xs font-bold'>{dictionary.term}</span>
      <p>{content}</p>
      <div className='mt-6 flex gap-x-8 self-end'>
        <button
          className='cursor-pointer text-xs'
          onClick={() => setTooltip({ content: '', x: 0, y: 0, index: null })}
        >
          닫기
        </button>
        <button
          className={`cursor-pointer text-xs font-medium ${isScrapped ? 'text-custom-gray-lighter' : 'text-primary'}`}
          onClick={handleScrapClick}
        >
          {isScrapped ? '스크랩 취소' : '스크랩하기'}
        </button>
      </div>
    </div>
  );
}

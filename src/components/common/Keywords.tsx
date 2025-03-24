import bookmarkIcon from '@/assets/p2/P2 에셋_2차전달/icon_bookmark_green fill22.svg';

export default function Keywords({
  tags,
  isToday = false,
  showTooltip = false,
}: {
  tags: string[];
  isToday?: boolean;
  showTooltip?: boolean;
}) {
  return (
    <div className='relative flex items-center gap-x-1.5'>
      <img src={bookmarkIcon} alt='북마크' className='icon_scrap h-[22px] w-[22px]' />
      <div className='flex h-6 w-full gap-x-1 text-[10px] font-medium'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className='relative flex items-center justify-center rounded border border-custom-gray-400 p-1.5 leading-6 text-custom-gray-700 drop-shadow-md'
          >
            <span className='whitespace-nowrap'>#{tag}</span>
            {index === 0 ? (
              <div
                className={`absolute -bottom-3.5 h-0 w-0 border-x-[6px] border-b-[9px] border-transparent border-b-custom-gray-dark ${isToday && showTooltip ? 'block' : 'hidden'}`}
              />
            ) : null}
          </div>
        ))}
        <p
          className={`absolute -bottom-11 left-0 z-20 h-8 shrink-0 whitespace-nowrap rounded bg-custom-gray-dark px-2.5 py-2 text-xs text-custom-cream-light shadow-md shadow-zinc-300 after:left-4 ${isToday && showTooltip ? 'block' : 'hidden'}`}
        >
          해당 머니뉴스를 통해 공부할 수 있는 단어에요.
        </p>
      </div>
    </div>
  );
}

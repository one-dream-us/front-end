import bookmarkIcon from '@/assets/p2/P2 에셋_2차전달/icon_bookmark_green fill22.svg';
import useKeywords from '@/hooks/dashboard/useKeywords';

export default function Keywords({
  tags,
  withTooltip = false,
}: {
  tags: string[];
  withTooltip?: boolean;
}) {
  const showTooltip = useKeywords(withTooltip);

  return (
    <div className='flex items-center gap-x-1.5'>
      <img src={bookmarkIcon} alt='북마크' className='h-[22px] w-[22px]' />
      <div className='flex h-6 w-full gap-x-1 text-[10px] font-medium leading-120'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className='relative flex items-center justify-center rounded border border-custom-gray-400 p-1.5 text-custom-gray-700 drop-shadow-md'
          >
            <span className='whitespace-nowrap'>#{tag}</span>
            {withTooltip && showTooltip && index === 0 && (
              <p className="absolute -left-7 -top-2.5 z-[999] -translate-y-full whitespace-nowrap rounded bg-custom-gray-dark px-2.5 py-2 text-xs text-custom-cream-light drop-shadow-xl after:absolute after:left-8 after:top-full after:border-x-[6px] after:border-t-[8px] after:border-transparent after:border-t-custom-gray-dark after:content-['']">
                해당 머니뉴스를 통해 공부할 수 있는 단어에요.
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

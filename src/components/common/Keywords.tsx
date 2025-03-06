import bookmarkIcon from '@/assets/p2/P2 에셋_2차전달/icon_bookmark_green fill22.svg';

export default function Keywords({ tags }: { tags: string[] }) {
  return (
    <div className='flex items-center gap-x-1.5'>
      <img src={bookmarkIcon} alt='북마크' className='icon_scrap h-[22px] w-[22px]' />
      <div className='flex h-6 w-full gap-x-1 text-[10px] font-medium'>
        {tags.map((tag, index) => (
          <div
            key={index}
            className='flex items-center justify-center rounded border border-custom-gray-400 p-1.5 leading-6 text-custom-gray-700 drop-shadow-md'
          >
            <span className='whitespace-nowrap'>#{tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

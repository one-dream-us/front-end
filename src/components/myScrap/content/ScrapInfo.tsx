export default function ScrapInfo({ date }: { date: string }) {
  return (
    <div className='flex h-[14px] items-center text-xs text-custom-gray-400'>
      <span className='leading-none'>스크랩</span>
      <span className='mx-1 flex h-[2px] w-[2px] items-center justify-center rounded-full bg-custom-gray-400'></span>
      {date}
    </div>
  );
}

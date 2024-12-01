export default function ScrapInfo({ date }: { date: string }) {
  return (
    <p className='flex h-[14px] items-center text-xs text-gray-300'>
      스크랩
      <span className='mx-1 flex items-center justify-center'>
        <span className='block h-[2px] w-[2px] rounded-full bg-gray-300'></span>
      </span>
      {date}
    </p>
  );
}

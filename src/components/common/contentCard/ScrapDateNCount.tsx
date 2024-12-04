export default function ScrapDateNCount({
  date,
  scrapCount,
}: {
  date: string;
  scrapCount: number;
}) {
  return (
    <div className='flex h-[14px] items-center text-xs text-gray-400'>
      <span>{date}</span>
      <span className='mx-1 flex h-[2px] w-[2px] items-center justify-center rounded-full bg-gray-400'></span>
      <span>조회수 {scrapCount}</span>
    </div>
  );
}

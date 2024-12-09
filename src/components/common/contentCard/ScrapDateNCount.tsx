export default function ScrapDateNCount({
  date,
  scrapCount,
}: {
  date: string;
  scrapCount: string;
}) {
  return (
    <div className='leading-120 flex h-[14px] items-center text-xs text-custom-gray-400'>
      <span>{date}</span>
      <span className='mx-1 flex h-[2px] w-[2px] items-center justify-center rounded-full bg-custom-gray-400'></span>
      <span>조회수 {scrapCount}</span>
    </div>
  );
}

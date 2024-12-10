export default function ScrapDateNCount({
  date,
  scrapCount,
}: {
  date: string;
  scrapCount: string;
}) {
  return (
    <div className='flex h-[14px] items-center text-xs leading-[120%] tracking-[-2%] text-custom-gray-400'>
      <span>{date}</span>
      <span className='mx-1 flex h-[2px] w-[2px] items-center justify-center rounded-full bg-custom-gray-400'></span>
      <span>읽음 {scrapCount}</span>
    </div>
  );
}

export default function KeywordTags({ keywords }: { keywords: string[] }) {
  return (
    <div className='flex h-5 w-full gap-x-1 text-[9px]'>
      {keywords.map((keyword) => (
        <span
          key={keyword}
          className='h-5 whitespace-nowrap rounded-[4px] border p-1 leading-[10px]'
        >
          {keyword}
        </span>
      ))}
    </div>
  );
}

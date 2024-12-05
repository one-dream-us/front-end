export default function KeywordTags({ tags }: { tags: string[] }) {
  return (
    <div className='flex h-5 w-full gap-x-1 text-[9px]'>
      {tags.map((tag, index) => (
        <span key={index} className='h-5 whitespace-nowrap rounded-[4px] border p-1 leading-[10px]'>
          #{tag}
        </span>
      ))}
    </div>
  );
}

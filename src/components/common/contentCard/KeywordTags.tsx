export default function KeywordTags({ tags }: { tags: string[] }) {
  return (
    <div className='mb-2 flex h-[19px] w-full gap-x-1 text-[9px]'>
      {tags.map((tag, index) => (
        <span
          key={index}
          className='whitespace-nowrap rounded-[4px] border border-custom-gray-500 p-1 leading-tight text-custom-gray-700'
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}

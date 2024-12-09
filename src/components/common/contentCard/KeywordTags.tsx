export default function KeywordTags({ tags }: { tags: string[] }) {
  return (
    <div className='mb-2 flex h-[19px] w-full gap-x-1 text-[9px]'>
      {tags.map((tag, index) => (
        <span
          key={index}
          className='leading-120 flex whitespace-nowrap rounded-[4px] border-[0.5px] border-custom-gray-500 p-1 text-custom-gray-700'
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}

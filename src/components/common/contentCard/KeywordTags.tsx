export default function KeywordTags({ tags }: { tags: string[] }) {
  return (
    <div className='mb-2 flex h-[19px] w-full gap-x-1 text-[10px]'>
      {tags.map((tag, index) => (
        <div
          key={index}
          className='leading-120 flex items-center justify-center rounded-[4px] border-[0.5px] border-custom-gray-500 tracking-[-2%]'
        >
          <span className='whitespace-nowrap p-1 leading-[150%] text-custom-gray-700'>#{tag}</span>
        </div>
      ))}
    </div>
  );
}

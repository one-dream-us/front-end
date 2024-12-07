export default function ContentSummary({ summary }: { summary: string }) {
  return (
    <div className='flex flex-col gap-y-1 mb-5 w-full text-sm leading-170 text-custom-gray-dark desktop:flex-row desktop:gap-x-6'>
      <span className='whitespace-nowrap font-bold desktop:mt-0.5'>💡 핵심 요약</span>
      <p className='desktop:w-[533px]'>{summary}</p>
    </div>
  );
}

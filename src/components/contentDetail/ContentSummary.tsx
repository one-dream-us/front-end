export default function ContentSummary({ summary }: { summary: string }) {
  return (
    <div className='mb-5 flex w-full flex-col gap-y-1 text-sm desktop:flex-row desktop:gap-x-6'>
      <span className='whitespace-nowrap font-bold desktop:mt-0.5'>💡 핵심 요약</span>
      <p className='leading-6 desktop:w-[533px]'>{summary}</p>
    </div>
  );
}

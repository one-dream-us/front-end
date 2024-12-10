export default function ContentSummary({ summary }: { summary: string }) {
  return (
    <div className='mb-5 flex w-full flex-col gap-y-1 leading-170 text-custom-gray-dark md:text-sm desktop:flex-row desktop:gap-x-6'>
      <span className='whitespace-nowrap font-medium desktop:mt-0.5'>💡 핵심 요약</span>
      <div
        dangerouslySetInnerHTML={{ __html: summary }}
        className='leading-170 md:text-sm md:leading-170 desktop:w-[533px]'
      />
    </div>
  );
}

export default function ScriptWithTime({
  id,
  time,
  script,
  onClick,
}: {
  id: string;
  time: string;
  script: string;
  onClick: () => void;
}) {
  return (
    <div
      className='mb-8 flex w-full flex-col gap-y-1 md:flex-row md:gap-x-[46px] desktop:gap-x-6'
      id={id}
    >
      <button
        type='button'
        className='flex h-5 items-center justify-center self-start rounded-[10px] bg-gray-300 px-2 text-xs font-medium leading-5 md:mt-1'
        onClick={onClick}
      >
        {time}
      </button>
      <div dangerouslySetInnerHTML={{ __html: script }} />
    </div>
  );
}

export default function NextButton({
  onClick,
  disable,
}: {
  onClick: () => void;
  disable: boolean;
}) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disable}
        className={`absolute -right-[61px] bottom-0 top-0 my-auto hidden h-[38px] w-[38px] items-center justify-center rounded-full border-2 text-custom-gray-400 transition-all duration-200 hover:bg-[rgba(0,0,0,.5)] md:flex ${disable && 'opacity-0'}`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-7'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
        </svg>
      </button>
    </>
  );
}

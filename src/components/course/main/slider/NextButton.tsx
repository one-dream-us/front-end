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
        id='move_news_card'
        onClick={onClick}
        disabled={disable}
        aria-label='next button'
        className={`absolute -right-[61px] bottom-0 top-0 my-auto hidden h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-custom-gray-400 text-custom-gray-400 transition-all duration-200 hover:border-custom-gray-600 hover:text-custom-gray-600 md:flex ${disable && 'opacity-0'}`}
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

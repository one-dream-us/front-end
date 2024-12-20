export default function DetailButton({
  handleButtonClick,
  detail,
  item,
}: {
  handleButtonClick: () => void;
  detail: number | null;
  item: number;
}) {
  return (
    <button
      onClick={handleButtonClick}
      className={`m-auto flex h-[24px] w-[80px] items-center justify-center rounded-[4px] border border-custom-green-money ${detail === null ? 'bg-custom-gray-dark' : item === detail ? 'bg-custom-gray-dark' : 'border-white bg-view-bg text-white'} px-[10px] text-custom-green-money hover:bg-custom-gray-700 active:bg-custom-gray-dark`}
    >
      <span className='text-[12px] font-medium leading-170'>상세보기</span>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
      </svg>
    </button>
  );
}

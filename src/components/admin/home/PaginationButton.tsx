export default function PaginationButton() {
  return (
    <div className='m-auto mb-[32px] flex h-[28px] w-[101px] items-center justify-between rounded-[1000px] border border-custom-gray-300 px-[10px] py-[4px] text-[12px]'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4 cursor-pointer text-custom-gray-400 hover:text-custom-gray-500'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
      </svg>

      <span className='mx-[6px] font-medium leading-170 tracking-[-2%] text-custom-gray-dark'>
        1
      </span>
      <span className='mr-[6px] leading-170 tracking-[-2%] text-custom-gray-600'>/ 2</span>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='size-4 cursor-pointer text-custom-gray-400 hover:text-custom-gray-500'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
      </svg>
    </div>
  );
}

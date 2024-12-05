export default function HomeLatestContentSkeleton() {
  return (
    <div className='px-4 md:px-6 desktop:px-[129px]'>
      <div className='mb-5 flex items-center justify-between'>
        <h1 className='text-lg font-bold md:text-xl desktop:text-[22px]'>오늘 업로드 된 콘텐츠</h1>
        <div className='flex items-center justify-center text-xs text-custom-gray-600'>
          전체보기
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
        </div>
      </div>

      <div className='flex max-w-[343px] flex-col gap-y-5 md:max-w-full md:flex-row md:items-center md:gap-x-6'>
        <div className='h-[190px] max-w-[343px] animate-pulse rounded-lg bg-custom-gray-medium md:w-[343px]'></div>

        <div className='h-[154px] w-full flex-1'>
          <div className='mb-4 flex items-center justify-start gap-x-3'>
            {' '}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className='h-[20px] w-[50px] animate-pulse rounded-lg bg-custom-gray-medium'
              ></div>
            ))}
          </div>
          <div className='mb-4 h-[30px] w-[180px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
          <div className='mb-1 h-[20px] w-[220px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
          <div className='mb-2 h-[20px] w-[120px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
          <div className='h-[20px] w-[100px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
        </div>
      </div>
    </div>
  );
}

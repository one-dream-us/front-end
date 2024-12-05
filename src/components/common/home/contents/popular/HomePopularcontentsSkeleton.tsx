export default function HomePopularcontentsSkeleton() {
  return (
    <div className='pl-4 md:pl-6 desktop:pl-[129px]'>
      <h1 className='mb-5 text-lg font-bold md:text-xl desktop:text-[22px]'>인기 콘텐츠</h1>

      <div className='inline-flex w-full items-center gap-x-3 overflow-x-auto overflow-y-hidden'>
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className='max-w-[254px] shrink-0 md:max-w-[260px]'>
            <div className='mb-5 h-[140px] w-full animate-pulse rounded-lg bg-custom-gray-medium md:h-[145px]' />

            <div>
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
        ))}
      </div>
    </div>
  );
}

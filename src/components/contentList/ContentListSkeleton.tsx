export default function ContentListSkeleton() {
  return (
    <div className='des flex h-[364px] max-w-[343px] flex-col gap-y-5 md:h-[190px] md:max-w-[723px] md:flex-row md:items-center md:gap-x-[25px] desktop:h-[354px] desktop:max-w-[347px] desktop:shrink-0 desktop:flex-col'>
      <div className='h-[190px] w-full animate-pulse rounded-lg bg-custom-gray-medium md:w-[343px] desktop:h-[190px] desktop:w-full' />

      <div className='min-h-[154px] w-full md:w-[354px] desktop:w-full'>
        <div className='mb-4 flex items-center justify-start gap-x-3'>
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className='h-[20px] w-[50px] animate-pulse rounded-lg bg-custom-gray-medium'
            ></div>
          ))}
        </div>
        <div className='mb-1 mt-2 min-h-[22px] w-[200px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
        <div className='mb-2 min-h-[22px] w-[140px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
        <div className='mb-1 h-[20px] w-[220px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
        <div className='mb-2 h-[20px] w-[120px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
        <div className='h-[20px] w-[100px] animate-pulse rounded-lg bg-custom-gray-medium'></div>
      </div>
    </div>
  );
}

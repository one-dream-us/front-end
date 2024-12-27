export default function ContentListSkeleton() {
  return (
    <div className='mb-[32px] flex h-[364px] max-w-[343px] flex-col items-center justify-start gap-y-5 md:h-[190px] md:max-w-[723px] md:flex-row md:items-center md:gap-x-[25px] md:px-0 desktop:mb-0 desktop:h-[354px] desktop:max-w-[347px] desktop:shrink-0 desktop:flex-col'>
      <div className='h-[190px] w-[343px] animate-pulse rounded-[10px] bg-custom-gray-300 md:w-[343px] desktop:h-[190px] desktop:w-[347px]' />

      <div className='min-h-[154px] w-full md:w-[354px] desktop:w-full'>
        <div className='mb-[12px] h-[20px] w-[166px] animate-pulse rounded-[4px] bg-custom-gray-300 desktop:h-[22px] desktop:w-[190px]'></div>
        <div className='mb-[10px] h-[18px] w-[254px] animate-pulse rounded-[4px] bg-custom-gray-300 desktop:max-w-[346px]'></div>
        <div className='mb-[12px] h-[18px] w-[166px] animate-pulse rounded-[4px] bg-custom-gray-300 desktop:max-w-[346px]'></div>

        <div className='mb-2 h-[16px] animate-pulse rounded-[4px] bg-custom-gray-300 desktop:max-w-[346px]'></div>
        <div className='mb-[12px] h-[16px] animate-pulse rounded-[4px] bg-custom-gray-300 desktop:max-w-[346px]'></div>

        <div className='h-[12px] w-[165px] animate-pulse rounded-[4px] bg-custom-gray-300'></div>
      </div>
    </div>
  );
}

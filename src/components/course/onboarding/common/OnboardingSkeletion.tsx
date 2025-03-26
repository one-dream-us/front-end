export default function OnboardingSkeletion({ type }: { type: 'detail' | 'complete' }) {
  return (
    <div className='fixed left-0 top-0 z-[1000] flex h-dvh w-full items-center justify-center bg-black bg-opacity-50'>
      <div
        className={`skeleton w-[280px] md:w-[320px] ${type === 'detail' ? 'h-[270px] md:h-[288px]' : 'h-[293px] md:h-[320px]'}`}
      ></div>
    </div>
  );
}

// detail sm : 280 * 270 md : 320 * 288
// complete sm : 280 * 293 md : 320 * 320

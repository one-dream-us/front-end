export default function QuizResultItem({
  status,
  quantity,
  unit,
  src,
  duration,
}: {
  status: string;
  quantity: number | number[];
  unit: string;
  src?: string;
  duration?: boolean;
}) {
  return (
    <div className='flex flex-col items-center justify-center gap-y-2'>
      <div className='flex h-[16px] w-[114px] items-center justify-center gap-x-1'>
        {src && <img src={src} alt='result-image' className='size-4' />}
        <h2 className='text-[12px] leading-120 text-custom-gray-700'>{status}</h2>
      </div>
      <div className='flex h-[16px] w-full items-center justify-center gap-x-1 text-center'>
        {duration ? (
          <>
            <h1 className='text-[16px] font-bold leading-[100%] text-custom-gray-dark'>
              {Array.isArray(quantity) && quantity[0]}
            </h1>
            <span className='text-[12px] leading-[120%] text-custom-gray-600'>분</span>
            <h1 className='text-[16px] font-bold leading-[100%] text-custom-gray-dark'>
              {Array.isArray(quantity) && quantity[1]}
            </h1>
            <span className='text-[12px] leading-[120%] text-custom-gray-600'>초</span>
          </>
        ) : (
          <>
            <h1 className='text-[16px] font-bold leading-[100%] text-custom-gray-dark'>
              {quantity}
            </h1>
            <span className='text-[12px] leading-[120%] text-custom-gray-600'>{unit}</span>
          </>
        )}
      </div>
    </div>
  );
}

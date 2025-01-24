export default function QuizResultItemSkeleton() {
  return (
    <>
      {[1, 2, 3].map((item) => (
        <div key={item} className='flex flex-col items-center justify-center gap-y-2'>
          <div className='flex h-[16px] w-[114px] items-center justify-center gap-x-1'>
            <h2 className='skeleton h-[10px] w-1/2'></h2>
          </div>
          <div className='flex h-[16px] w-full items-center justify-center gap-x-1 text-center'>
            <h2 className='skeleton h-[10px] w-1/3'></h2>
          </div>
        </div>
      ))}
    </>
  );
}

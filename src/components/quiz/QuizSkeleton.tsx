export default function QuizSkeleton() {
  return (
    <div className='m-auto h-[478px] w-[343px] rounded-[10px] bg-white p-4 md:h-[779px] md:w-[353px] md:p-5 desktop:w-[812px] desktop:p-[40px]'>
      {/* 문제 */}
      <div className='mb-[40px] h-[158px] w-full text-custom-black desktop:mb-[30px]'>
        <div className='mb-[20px] flex h-[42px] w-full items-center gap-x-3 border-b border-custom-gray-200'>
          <div className='skeleton size-8'></div>
          <div className='skeleton h-[22px] w-[163px]'></div>
        </div>

        <div className='flex h-[96px] flex-col justify-between'>
          <div className='skeleton h-[20px] w-full'></div>
          <div className='skeleton h-[20px] w-full'></div>
          <div className='skeleton h-[20px] w-full'></div>
          <div className='skeleton h-[20px] w-1/3'></div>
        </div>
      </div>

      {/* 선지 */}
      <ul className='h-[248px] w-full'>
        {[1, 2, 3, 4].map((item) => (
          <li key={item}>
            <button className='skeleton mb-2 flex h-[56px] w-full cursor-pointer items-center justify-start gap-x-2 rounded-[10px] p-4 text-[14px] font-bold desktop:h-[62px]'></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

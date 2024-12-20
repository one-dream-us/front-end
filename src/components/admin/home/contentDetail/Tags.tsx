export default function Tags() {
  return (
    <div>
      <h1 className='mb-[8px] text-[16px] font-bold text-custom-gray-dark'>태그</h1>
      <div className='flex h-[68px] w-[346px] items-center justify-between rounded-[4px] border border-custom-gray-300 px-[16px] py-[22px]'>
        {['#태그1', '#태그2', '#태그3'].map((item) => (
          <span className='text-[14px] leading-170 text-custom-gray-dark' key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

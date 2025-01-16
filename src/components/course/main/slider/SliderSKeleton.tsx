export default function SliderSKeleton() {
  return (
    <div className='relative flex'>
      <div className='mySwiper skeleton flex h-[144px] w-full flex-col-reverse rounded-[10px] p-[24px]'>
        <div className='mt-auto'>
          <div className='h-auto text-[16px] tracking-[-0.16px] text-custom-gray-200' />
        </div>
      </div>

      <button
        className={`skeleton absolute -right-[61px] bottom-0 top-0 my-auto hidden h-[38px] w-[38px] items-center justify-center rounded-full border-2 text-custom-gray-400 transition-all duration-200 hover:border-custom-gray-600 hover:text-custom-gray-600 md:flex`}
      ></button>
    </div>
  );
}

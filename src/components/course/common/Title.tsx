export default function Title({ sub, main }: { sub: string; main: string }) {
  return (
    <>
      <span className='mb-1 text-[12px] leading-[120%] text-custom-gray-700'>{sub}</span>
      <h1 className='text-[22px] font-bold text-custom-gray-dark'>{main}</h1>
    </>
  );
}

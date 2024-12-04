export default function HomeBanner() {
  return (
    <section className='desktop:mb-[80px] desktop:h-[502px] mb-[40px] flex h-[200px] w-full items-center justify-start bg-custom-gray-light px-4 md:mb-[60px] md:h-[268px] md:justify-end md:px-6'>
      <div className='desktop:h-[193px] h-[90px] w-[278px] md:h-[174px] md:w-[444px]'>
        <h3 className='text-sm text-custom-gray-600'>Our Mission</h3>
        <h1 className='text-[22px] font-extrabold md:mb-3'>
          투자를 매일 쉽고 재미있게 <br /> 데일리 투자 스터디를 돕습니다.
        </h1>
        <span className='hidden text-sm text-custom-black md:block'>
          친구따라 투자에 나선 나, 결과는 실패! 투자에는 성공 방정식이 없어요. <br />
          실패와 성공을 반복하며 나만의 방식을 찾아갈 뿐. <br />
          그렇게 투자의 기초 용어부터 재미있게 배워보고자 만들어진 '이게 MONEY'
        </span>
      </div>
    </section>
  );
}

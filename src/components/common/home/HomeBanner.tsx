import mobileBanner from '@/assets/this_is_money_imgs/img_png/상단 배너 이미지_수정 Mobile_343_212.png';
export default function HomeBanner() {
  return (
    <div className='bg-custom-cream-light'>
      <section className='md: m-auto mb-[40px] h-[321px] w-full md:mb-[60px] md:flex md:h-[268px] md:flex-row-reverse md:items-center md:justify-end desktop:mb-[80px] desktop:h-[376px] desktop:max-w-[1440px] desktop:justify-end'>
        <div className='px-4 pt-5 md:px-0 md:pt-0 desktop:h-[193px]'>
          <h3 className='deesktop:text-[14px] text-sm text-custom-gray-600 md:text-[14px] md:text-[#6DE67F] desktop:mb-1'>
            Our Mission
          </h3>
          <h1 className='text-lg font-bold leading-[34px] md:mb-2 desktop:mb-3 desktop:text-[28px]'>
            이게 머니가 알려줄게 <br /> 이게 뭐니? 이게 MONEY!
          </h1>
          <span className='hidden text-xs text-custom-gray-dark md:block desktop:text-sm'>
            친구따라 큰맘먹고 시작한 투자, '근데 내 차트는 왜 파랗지...?'
            <br />
            투자 정보는 홍수처럼 쏟아지고, 뭐부터 공부할 지 몰라서 미뤄둔 사람? <br />
            이게머니가 선별한 콘텐츠로 트렌드도 잡고, 용어도 쉽게 공부해보자구!
          </span>
        </div>

        <img
          className='m-auto mx-3 h-[211px] w-[343px] md:ml-5 md:mr-7 md:w-[375px] desktop:ml-[129px] desktop:mr-[48px] desktop:h-full desktop:w-[610px]'
          src={mobileBanner}
          alt=''
        />
      </section>
    </div>
  );
}

import mobileBanner from '@/assets/this_is_money_imgs/img_png/상단 배너 이미지_수정 Mobile_343_212.png';
export default function HomeBanner() {
  return (
    <div className='bg-custom-cream-light'>
      <section className='m-auto mb-[40px] h-[321px] w-full pt-5 md:mb-[60px] md:flex md:h-[268px] md:flex-row-reverse md:items-center md:justify-end md:pt-0 desktop:mb-[80px] desktop:h-[376px] desktop:max-w-[1440px]'>
        <div className='mx-4 min-h-[79px] w-[230px] md:mx-[28px] desktop:mx-[48px] desktop:h-[200px] desktop:w-[524px]'>
          <p className='mb-1 text-sm font-medium text-[#6DE67F]'>Our Mission</p>
          <h1 className='text-lg font-bold leading-[150%] text-custom-black md:mb-2 desktop:text-[28px]'>
            이게머니가 알려줄게 <br />
            이게 뭐니? 이게 MONEY!
          </h1>
          <div className='hidden h-[54px] w-[349px] md:block desktop:h-[72px] desktop:w-full'>
            <p className='text-xs leading-[170%] text-custom-gray-dark desktop:text-[14px]'>
              친구따라 큰맘먹고 시작한 투자, '근데 내 차트는 왜 파랗지...?' <br />
              투자 정보는 홍수처럼 쏟아지고, 뭐부터 공부할 지 몰라서 미뤄둔 사람? <br />
              이게머니가 선별한 콘텐츠로 트렌드도 잡고, 용어도 쉽게 공부해보자구!
            </p>
          </div>
        </div>
        <img
          className='h-[211px] w-[375px] px-3 md:ml-5 md:h-[211px] md:w-[375px] md:px-0 desktop:ml-[129px] desktop:h-full desktop:w-[610px]'
          src={mobileBanner}
          alt=''
        />
      </section>
    </div>
  );
}

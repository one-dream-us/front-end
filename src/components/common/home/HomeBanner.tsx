import banner_png from '@/assets/this_is_money_imgs/img_png/top_banner_web_final.png';
import banner_webp from '@/assets/this_is_money_imgs/img_webp/top_banner_web_final.webp';
import ImgContainer from '../ImgContainer';
export default function HomeBanner() {
  return (
    <section className='mb-[40px] h-[321px] w-full bg-custom-cream-light md:mb-[60px] md:flex md:h-[268px] md:flex-row-reverse md:items-center md:justify-center desktop:mb-[80px] desktop:h-[380px] desktop:justify-end desktop:pl-[129px]'>
      <div className='p-5'>
        <h3 className='text-sm text-custom-gray-600 md:text-[#6DE67F]'>Our MISSion</h3>
        <h1 className='text-lg font-bold md:mb-2'>
          이게 머니가 알려줄게 <br /> 이게 뭐니? 이게 MONEY!
        </h1>
        <span className='hidden text-xs text-custom-gray-dark md:block'>
          친구따라 큰맘먹고 시작한 투자, '근데 내 차트는 왜 파랗지...?'
          <br />
          투자 정보는 홍수처럼 쏟아지고, 뭐부터 공부할 지 몰라서 미뤄둔 사람? <br />
          이게머니가 선별한 콘텐츠로 트렌드도 잡고, 용어도 쉽게 공부해보자구!
        </span>
      </div>
      <ImgContainer
        imgs={{ png: banner_png, webp: banner_webp }}
        className='m-auto h-[211px] w-[375px] desktop:h-[344px] desktop:w-[610px]'
      />
    </section>
  );
}

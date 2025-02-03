import { SHOW_NEWS_DETAIL_PAGE_TURORIAL_KEY, tutorialTitleList } from '@/constants/constants';
import tutorialStore from '@/store/course/tutorialStore';
import { useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function NewsTutorial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { setNewsDeatilTutorial } = tutorialStore();
  const isLast = activeIndex === 2;
  return (
    <div className='fixed left-0 top-0 z-[1000] flex h-screen w-full items-center justify-center bg-black bg-opacity-50'>
      <div className='relative'>
        <Swiper
          id='news_tutorial'
          pagination={true}
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={50}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className={`h-[279px] w-[343px] rounded-[10px] bg-custom-gray-lighter px-[32px] pt-[41px] md:w-[376px] ${isLast ? 'rounded-b-none' : ''}`}
        >
          {tutorialTitleList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='mb-[16px] h-[48px] w-full text-[16px] font-bold text-custom-gray-dark'>
                <h1 className='text-center'>
                  {item.top} <br />
                  {item.bottom}
                </h1>
              </div>
              <img className='h-[137px] w-full border' src='' alt={`img ${item.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        {isLast && (
          <button
            onClick={() => {
              localStorage.setItem(SHOW_NEWS_DETAIL_PAGE_TURORIAL_KEY, 'false');
              setNewsDeatilTutorial(true);
            }}
            className='absolute -bottom-[48px] z-[100] h-[48px] w-[343px] rounded-bl-[10px] rounded-br-[10px] bg-custom-gray-dark text-[14px] font-bold text-primary transition-all duration-200 hover:bg-hover-80 md:w-[376px]'
          >
            학습 시작하기
          </button>
        )}
      </div>
    </div>
  );
}

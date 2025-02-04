import { SHOW_NEWS_DETAIL_PAGE_TURORIAL_KEY, tutorialTitleList } from '@/constants/constants';
import { useEffect, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function NewsTutorial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLast = activeIndex === 2;
  const [showTutorial, setShowTurotial] = useState(
    localStorage.getItem(SHOW_NEWS_DETAIL_PAGE_TURORIAL_KEY) ?? 'true',
  );
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    localStorage.setItem(SHOW_NEWS_DETAIL_PAGE_TURORIAL_KEY, showTutorial);
  }, [showTutorial]);
  return (
    <>
      {visible && (
        <div className='fixed left-0 top-0 z-[1000] flex h-screen w-full items-center justify-center bg-black bg-opacity-50'>
          <div className='absolute bottom-[100px] right-[100px]'>
            <div className='flex items-center'>
              <input
                id='link-checkbox'
                type='checkbox'
                className={`focus:ring-main-lime disabled:border-steel-400 disabled:bg-steel-400 h-4 w-4 rounded-sm border-gray-300 bg-gray-100 bg-center bg-no-repeat text-blue-600 checked:bg-[url('@/assets/icons/check.svg')] focus:outline-none focus:ring-1 focus:ring-offset-0`}
                onChange={(e) => {
                  if (e.target.checked) {
                    setShowTurotial('false');
                  } else {
                    setShowTurotial('true');
                  }
                }}
                checked={showTutorial === 'false'}
              />
              <label
                htmlFor='link-checkbox'
                className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                그만보기
              </label>
            </div>
          </div>
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
                onClick={() => setVisible(false)}
                className='absolute -bottom-[48px] z-[100] h-[48px] w-[343px] rounded-bl-[10px] rounded-br-[10px] bg-custom-gray-dark text-[14px] font-bold text-primary transition-all duration-200 hover:bg-hover-80 md:w-[376px]'
              >
                학습 시작하기
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

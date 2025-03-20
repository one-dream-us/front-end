import { SHOW_NEWS_DETAIL_ONBOARDING_KEY, tutorialTitleList } from '@/constants/constants';
import useCheckShowOnboarding from '@/hooks/newDetail/useCheckShowOnboarding';
import { Dispatch, SetStateAction, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import OnboardingCheckBox from '../common/OnboardingCheckBox';

export default function NewsDetailOnboarding() {
  const { setShowOnboarding, showOnboarding, closeModal, visible } = useCheckShowOnboarding(
    SHOW_NEWS_DETAIL_ONBOARDING_KEY,
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const isLast = activeIndex === 2;

  return (
    <>
      {visible && (
        <div
          style={{ height: '100dvh' }}
          className='fixed left-0 top-0 z-[1000] flex w-full items-center justify-center bg-black bg-opacity-50'
        >
          <div className='relative'>
            <OnboardingModal
              isLast={isLast}
              setActiveIndex={setActiveIndex}
              handleHiddenOnboarding={closeModal}
            />
            <div
              className={`absolute -bottom-8 right-0 ${isLast ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
              <OnboardingCheckBox
                setShowOnboarding={setShowOnboarding}
                showOnboarding={showOnboarding}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const OnboardingModal = ({
  isLast,
  setActiveIndex,
  handleHiddenOnboarding,
}: {
  isLast: boolean;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  handleHiddenOnboarding: () => void;
}) => {
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handleModal = () => (isLast ? handleHiddenOnboarding() : swiper?.slideNext());
  return (
    <div className='w-[280px] drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)] md:w-[320px]'>
      <Swiper
        id='news_tutorial'
        pagination={true}
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={50}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(e) => setSwiper(e)}
        className={`h-[222px] w-full rounded-t-[10px] bg-custom-gray-lighter pt-[28px] md:h-[240px]`}
      >
        {tutorialTitleList.map((item) => (
          <SwiperSlide key={item.id}>
            <div className='mb-[16px] h-[48px] w-full text-[16px] font-bold text-custom-gray-dark md:text-[18px]'>
              <h1 className='text-center'>
                {item.top} <br />
                {item.bottom}
              </h1>
            </div>
            <img
              className='m-auto w-[224px] md:w-[260px]'
              srcSet={`${item.src.mobile} 768w, ${item.src.tab} 769w`}
              sizes='(max-width: 768px) 224px, 260px'
              src={item.src.mobile}
              alt={`img ${item.id}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={handleModal}
        className={`z-[100] h-[48px] w-full rounded-bl-[10px] rounded-br-[10px] bg-custom-gray-dark text-[14px] font-bold transition-all duration-200 desktop:hover:bg-hover-80 ${isLast ? 'text-primary' : 'text-white'}`}
      >
        {isLast ? '학습 시작하기' : '다음'}
      </button>
    </div>
  );
};

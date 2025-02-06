import { SHOW_NEWS_DETAIL_ONBOARDING_KEY, tutorialTitleList } from '@/constants/constants';
import useCheckShowOnboarding from '@/hooks/newDetail/useCheckShowOnboarding';
import { Dispatch, SetStateAction, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

export default function NewsDetailOnboarding() {
  const { setShowOnboarding, showOnboarding, closeModal, visible } = useCheckShowOnboarding(
    SHOW_NEWS_DETAIL_ONBOARDING_KEY,
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const isLast = activeIndex === 2;

  // useEffect(() => {
  //   const setScreensize = () => {
  //     //먼저 뷰포트의 실제 높이를 100등분하여, 새로 정의할 1 vh의 값을 얻습니다.
  //     let vh = window.innerHeight * 0.01;
  //     //--vh를 키워드로 삼아서 활용합니다.
  //     document.documentElement.style.setProperty('--vh', `${vh}px`);
  //     console.log(vh);
  //   };

  //   window.addEventListener('resize', setScreensize);

  //   return () => window.removeEventListener('resize', setScreensize);
  // }, []);

  return (
    <>
      {visible && (
        <div
          style={{ height: '100dvh' }}
          className='fixed left-0 top-0 z-[1000] w-full items-center justify-center bg-black bg-opacity-50'
        >
          <CheckBox setShowOnboarding={setShowOnboarding} showOnboarding={showOnboarding} />
          <OnboardingModal
            isLast={isLast}
            setActiveIndex={setActiveIndex}
            handleHiddenOnboarding={closeModal}
          />
        </div>
      )}
    </>
  );
}

const CheckBox = ({
  showOnboarding,
  setShowOnboarding,
}: {
  showOnboarding: string;
  setShowOnboarding: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className='absolute left-0 right-0 m-auto'>
      <div className='flex items-center'>
        <input
          id='link-checkbox'
          type='checkbox'
          className={`focus:ring-main-lime disabled:border-steel-400 disabled:bg-steel-400 h-4 w-4 rounded-sm border-gray-300 bg-gray-100 bg-center bg-no-repeat text-blue-600 checked:bg-[url('@/assets/icons/check.svg')] focus:outline-none focus:ring-1 focus:ring-offset-0`}
          onChange={(e) => {
            if (e.target.checked) {
              setShowOnboarding('false');
            } else {
              setShowOnboarding('true');
            }
          }}
          checked={showOnboarding === 'false'}
        />
        <label
          htmlFor='link-checkbox'
          className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
        >
          그만보기
        </label>
      </div>
    </div>
  );
};

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
    <div
      style={{ transform: 'translate(-50%, -50%)' }}
      className='absolute left-1/2 top-1/2 w-[280px] -translate-y-1/2 drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)] md:w-[320px]'
    >
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
        className={`z-[100] h-[48px] w-full rounded-bl-[10px] rounded-br-[10px] bg-custom-gray-dark text-[14px] font-bold transition-all duration-200 hover:bg-hover-80 ${isLast ? 'text-primary' : 'text-white'}`}
      >
        {isLast ? '학습 시작하기' : '다음'}
      </button>
    </div>
  );
};

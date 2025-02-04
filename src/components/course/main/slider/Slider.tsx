import { highlightedDesc } from '@/utils/contentDetail/highlightedDesc';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useStore } from 'zustand';
import courseIndexState from '@/store/course/courseStore';
import { Swiper as SwiperType } from 'swiper/types';
import { useEffect, useState } from 'react';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
// import tutorialStore from '@/store/course/tutorialStore';
// import swipeImg from '@/assets/p2/P2 에셋_2차전달/swipe_image.png';
import useNewsDetail from '@/hooks/newDetail/useNewsDetail';
// import { SHOW_NEWS_DETAIL_ONBOARDING } from '@/constants/constants';
import SliderSKeleton from './SliderSKeleton';

export default function Slider() {
  const { news, isLoading } = useNewsDetail((data) => data.descriptions);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const { setIndex, index } = useStore(courseIndexState);
  // const { newsDeatilTutorial } = useStore(tutorialStore);

  const handleSlide = (swiper: SwiperType) => {
    setIndex(swiper.activeIndex);
  };

  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();

  useEffect(() => {
    setIndex(0);
  }, []);

  if (isLoading || !news) return <SliderSKeleton />;
  return (
    <div className='relative flex'>
      <PrevButton disable={index === 0} onClick={handlePrev} />

      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={50}
        onSlideChange={handleSlide}
        onSwiper={(e) => {
          setSwiper(e);
        }}
        className='mySwiper flex h-auto w-full flex-col-reverse rounded-[10px] bg-custom-gray-dark p-[24px]'
      >
        {news?.map((item) => (
          <SwiperSlide key={item.dictionaryId} className='mt-auto'>
            <div
              dangerouslySetInnerHTML={{
                __html: highlightedDesc(item.sentence, item.term, 'highlight_text'),
              }}
              className='h-auto text-[16px] tracking-[-0.16px] text-custom-gray-200'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* tutorial */}
      {/* {SHOW_NEWS_DETAIL_ONBOARDING && !newsDeatilTutorial && (
        <>
          <div className='absolute -top-[60px] right-0 z-[10000] md:-right-[65px] md:-top-[10px]'>
            <div className='chat-bubble chat-bubble-rb h-[37px] w-[255px]'>
              좌우로 넘겨서 문장별로 단어를 공부해요!
            </div>
          </div>

          <img
            className='absolute right-[35px] top-[30px] z-[10000] block h-[38px] w-[45px] md:hidden'
            src={swipeImg}
            alt='tutorial swipe img'
          />
        </>
      )} */}

      <NextButton disable={index === 2} onClick={handleNext} />
    </div>
  );
}

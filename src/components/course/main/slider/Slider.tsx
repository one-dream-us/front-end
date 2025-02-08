import { highlightedDesc } from '@/utils/contentDetail/highlightedDesc';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { useStore } from 'zustand';
import courseIndexState from '@/store/course/courseStore';
import { Swiper as SwiperType } from 'swiper/types';
import { useEffect } from 'react';
import useNewsDetail from '@/hooks/newDetail/useNewsDetail';
import SliderSKeleton from './SliderSKeleton';

export default function Slider() {
  const { news, isLoading } = useNewsDetail((data) => data.descriptions);
  const { setIndex, setSwiper } = useStore(courseIndexState);

  const handleSlide = (swiper: SwiperType) => {
    setIndex(swiper.activeIndex);
  };

  useEffect(() => {
    setIndex(0);
  }, []);

  if (isLoading || !news) return <SliderSKeleton />;
  return (
    <div className='relative flex'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={50}
        onSlideChange={handleSlide}
        onSwiper={(e) => {
          setSwiper(e);
        }}
        className='mySwiper flex w-full flex-col-reverse rounded-[10px] bg-custom-gray-dark p-[24px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.2)]'
      >
        {news?.map((item) => (
          <SwiperSlide key={item.dictionaryId} className='flex items-center justify-center'>
            <div
              dangerouslySetInnerHTML={{
                __html: highlightedDesc(item.sentence, item.term, 'highlight_text'),
              }}
              className='text-[16px] tracking-[-0.16px] text-custom-gray-200'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

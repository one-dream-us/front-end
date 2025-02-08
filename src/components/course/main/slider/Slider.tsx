import { highlightedDesc } from '@/utils/contentDetail/highlightedDesc';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
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
    </div>
  );
}

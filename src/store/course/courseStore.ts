import { SwiperClass } from 'swiper/react';
import { create } from 'zustand';

interface CourseIndexStore {
  index: number;
  setIndex: (index: number) => void;
  swiper: SwiperClass | undefined;
  setSwiper: (s: SwiperClass) => void;
}
const courseIndexState = create<CourseIndexStore>((set) => ({
  index: 0,
  setIndex: (index: number) => set({ index }),
  swiper: undefined,
  setSwiper: (s: SwiperClass) => set({ swiper: s }),
}));

export default courseIndexState;

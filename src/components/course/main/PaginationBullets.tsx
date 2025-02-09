import courseIndexState from '@/store/course/courseStore';
import { useStore } from 'zustand';

export default function PaginationBullets() {
  const { index, swiper } = useStore(courseIndexState);

  return (
    <div className='m-auto mb-[24px] flex h-[6px] w-[34px] items-center justify-between'>
      {[0, 1, 2].map((item) => (
        <div
          onClick={() => swiper?.slideTo(item)}
          className={`size-[6px] cursor-pointer rounded-full ${index === item ? 'bg-[#1BBA71]' : 'bg-inactive'}`}
          key={item}
        ></div>
      ))}
    </div>
  );
}

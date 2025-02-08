import courseIndexState from '@/store/course/courseStore';
import { useStore } from 'zustand';

export default function PaginationBullets() {
  const { index } = useStore(courseIndexState);
  return (
    <div className='m-auto mb-[24px] flex h-[6px] w-[34px] items-center justify-between'>
      {[0, 1, 2].map((item) => (
        <div
          className={`size-[6px] rounded-full ${index === item ? 'bg-[#1BBA71]' : 'bg-inactive'}`}
          key={item}
        ></div>
      ))}
    </div>
  );
}

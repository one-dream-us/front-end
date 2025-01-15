import courseIndexState from '@/store/course/courseStore';
import { useStore } from 'zustand';

export default function NewsLink() {
  const { index } = useStore(courseIndexState);
  return (
    <button
      disabled={index !== 2}
      className={`m-auto flex h-[18px] min-w-[92px] text-center text-[12px] text-gray-070 underline underline-offset-2 ${index === 2 ? 'opacity-100' : 'opacity-0'}`}
    >
      뉴스 원문 보러가기
    </button>
  );
}

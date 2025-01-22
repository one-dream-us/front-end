import useNewsDetail from '@/hooks/newDetail/useNewsDetail';
import courseIndexState from '@/store/course/courseStore';
import { useStore } from 'zustand';

export default function NewsLink() {
  const { index } = useStore(courseIndexState);

  const { isLoading, news } = useNewsDetail((data) => data.link);
  return (
    <>
      {!isLoading && (
        <a
          href={news}
          target='_blank'
          rel='noopener noreferrer'
          className={`m-auto flex h-[18px] min-w-[92px] text-center text-[12px] text-gray-070 underline underline-offset-2 ${index === 2 ? 'visited:' : 'invisible'}`}
        >
          뉴스 원문 보러가기
        </a>
      )}
    </>
  );
}

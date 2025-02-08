import courseIndexState from '@/store/course/courseStore';
import { useStore } from 'zustand';
import { highlightedDesc } from '@/utils/contentDetail/highlightedDesc';
import useNewsDetail from '@/hooks/newDetail/useNewsDetail';
import WordDescriptionSkeleton from './slider/WordDescriptionSkeleton';

export default function WordDescription() {
  const { index: contentIndex } = useStore(courseIndexState);
  const { news, isLoading } = useNewsDetail((data) => data.descriptions[contentIndex]);

  if (isLoading || !news) return <WordDescriptionSkeleton />;
  return (
    <div className='relative mx-auto mt-[16px] h-auto w-full rounded-[10px] bg-white p-[24px]'>
      <div className='mb-[10px]'>
        <span className='text-[12px] leading-[120%] tracking-[0px] text-custom-gray-400'>
          단어 해석
        </span>
      </div>

      <p
        className='mb-[10px] font-bold'
        dangerouslySetInnerHTML={{
          __html: highlightedDesc(news.definition, news.term, 'highlight_underline'),
        }}
      />

      {news.description.split('\n').map((item, index) => (
        <p key={index} className={`${index === 1 ? '' : 'mb-[10px]'}`}>
          {item}
        </p>
      ))}
    </div>
  );
}

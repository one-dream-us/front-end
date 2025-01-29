import courseIndexState from '@/store/course/courseStore';
import { useStore } from 'zustand';
import { highlightedDesc } from '@/utils/contentDetail/highlightedDesc';
import ModalOverlay from '@/components/common/modal/ModalOverlay';
import tutorialStore from '@/store/course/tutorialStore';
import useNewsDetail from '@/hooks/newDetail/useNewsDetail';
import { SHOW_NEWS_DETAIL_PAGE_TURORIAL } from '@/constants/constants';
import WordDescriptionSkeleton from './slider/WordDescriptionSkeleton';

export default function WordDescription() {
  const { index: contentIndex } = useStore(courseIndexState);
  const { news, isLoading } = useNewsDetail((data) => data.descriptions[contentIndex]);
  const { newsDeatilTutorial } = useStore(tutorialStore);

  if (isLoading || !news) return <WordDescriptionSkeleton />;
  return (
    <div className='relative mx-auto mb-[20px] mt-[16px] h-auto w-full rounded-[10px] bg-white p-[24px] desktop:mb-[24px]'>
      <div className='mb-[10px]'>
        <span className='text-[12px] leading-[120%] tracking-[0px] text-custom-gray-400'>
          단어 해석
        </span>
      </div>

      {/* tutorial */}
      {SHOW_NEWS_DETAIL_PAGE_TURORIAL && !newsDeatilTutorial && (
        <div className='absolute top-[5px] z-[10000]'>
          <div className='chat-bubble-lb chat-bubble'>단어의 뜻을 바로 확인해요!</div>
        </div>
      )}

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

      {/* tutorial */}
      {SHOW_NEWS_DETAIL_PAGE_TURORIAL && !newsDeatilTutorial && (
        <>
          <div className='absolute z-[10000]'>
            <div className='chat-bubble-lt chat-bubble mt-[10px] h-[37px] w-[271px]'>
              해설도 함께 읽으며 뉴스의 문맥을 이해해요!
            </div>
          </div>
          <ModalOverlay isOpen={true}>
            <div></div>
          </ModalOverlay>
        </>
      )}
    </div>
  );
}

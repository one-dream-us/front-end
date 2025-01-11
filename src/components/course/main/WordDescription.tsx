import courseIndexState from '@/store/course/courseStore';
import { courseData } from '@/mocks/data/contentdetail/contentDetailList';
import { useStore } from 'zustand';
import { highlightedDesc } from '@/utils/contentDetail/highlightedDesc';
import ModalOverlay from '@/components/common/modal/ModalOverlay';
import tutorialStore from '@/store/course/tutorialStore';

export default function WordDescription() {
  const { index } = useStore(courseIndexState);
  const { isNewUser } = useStore(tutorialStore);
  return (
    <div className='relative mx-auto mb-10 mt-[16px] h-auto w-full rounded-[10px] bg-white p-[24px] desktop:mb-[24px]'>
      <div className='mb-[10px]'>
        <span className='text-[12px] leading-[120%] tracking-[0px] text-custom-gray-400'>
          단어 해석
        </span>
      </div>

      {/* tutorial */}
      {isNewUser && (
        <div className='absolute top-[5px] z-[10000]'>
          <div className='chat-bubble-lb chat-bubble'>단어의 뜻을 바로 확인해요!</div>
        </div>
      )}

      {courseData[index].desc.map((item) => (
        <p
          className={`${item.id === 3 ? 'mb-0' : 'mb-[10px]'} ${item.id === 1 ? 'font-bold' : ''} `}
          key={item.id}
          dangerouslySetInnerHTML={{
            __html: highlightedDesc(item.content, courseData[index].keyword, 'highlight_underline'),
          }}
        />
      ))}

      {/* tutorial */}
      {isNewUser && (
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

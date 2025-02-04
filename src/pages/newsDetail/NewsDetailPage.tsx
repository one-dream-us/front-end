import ModalButton from '@/components/common/modal/ModalButton';
import ModalOverlay from '@/components/common/modal/ModalOverlay';
import Title from '@/components/course/common/Title';
import CompleteButton from '@/components/course/main/CompleteButton';
import Slider from '@/components/course/main/slider/Slider';
import WordDescription from '@/components/course/main/WordDescription';
import NewsDetailOnboarding from '@/components/course/onboarding/NewsDetailOnboarding';
import { SHOW_NEWS_DETAIL_ONBOARDING } from '@/constants/constants';
import { useBlocker, useParams } from 'react-router-dom';

export default function NewsDetailPage() {
  return (
    // w-[343px] desktop:w-[440px]
    <div className='m-auto mt-[40px] w-[343px] desktop:w-[440px]'>
      <div className='m-auto mb-[24px] h-[51px] min-w-[196px] text-center'>
        <Title main='한 문장씩 읽어보세요!' sub='오늘의 뉴스 문장' />
      </div>

      {/* slider */}
      <Slider />

      <WordDescription />

      <CompleteButton />

      <NavigateBlocker />

      {/* {SHOW_NEWS_DETAIL_ONBOARDING && !newsDeatilTutorial && (
        <button
          onClick={() => {
            localStorage.setItem(SHOW_NEWS_DETAIL_ONBOARDING_KEY, 'false');
            setNewsDeatilTutorial(true);
          }}
          className='fixed bottom-[45px] left-0 right-0 z-[10000] m-auto flex h-[38px] w-[38px] items-center justify-center rounded-full border text-custom-gray-light'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-7 text-white'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
          </svg>
        </button>
      )} */}

      {SHOW_NEWS_DETAIL_ONBOARDING && <NewsDetailOnboarding />}
    </div>
  );
}

const NavigateBlocker = () => {
  const { id } = useParams();
  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    return currentLocation !== nextLocation && nextLocation.pathname !== `/newsComplete/${id}`;
  });

  return (
    <>
      {blocker.state === 'blocked' && (
        <ModalOverlay isOpen={blocker.state === 'blocked'}>
          <div className='h-[161px] w-[372px] rounded-[10px] bg-custom-gray-lighter px-[28px] py-[24px]'>
            <div className='mb-[20px] h-[49px] w-full text-center'>
              <h1 className='text-[18px] font-bold text-custom-black'>학습을 그만 하시겠어요?</h1>
              <span className='text-[12px] leading-[120%] tracking-[0px] text-custom-gray-600'>
                지금까지의 학습 정보는 저장되지 않습니다.
              </span>
            </div>

            <ModalButton
              buttonText={{ close: '그만하기', proceed: '계속하기' }}
              onClose={() => blocker.proceed()}
              onProceed={() => blocker.reset()}
            />
          </div>
        </ModalOverlay>
      )}
    </>
  );
};

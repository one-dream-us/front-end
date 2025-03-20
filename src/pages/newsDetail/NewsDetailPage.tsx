import ModalButton from '@/components/common/modal/ModalButton';
import ModalOverlay from '@/components/common/modal/ModalOverlay';
import Title from '@/components/course/common/Title';
import CompleteButton from '@/components/course/main/CompleteButton';
import PaginationBullets from '@/components/course/main/PaginationBullets';
import Slider from '@/components/course/main/slider/Slider';
import WordDescription from '@/components/course/main/WordDescription';
import OnboardingSkeletion from '@/components/course/onboarding/common/OnboardingSkeletion';
import { SHOW_NEWS_DETAIL_ONBOARDING } from '@/constants/constants';
import { lazy, Suspense } from 'react';
import { useBlocker, useParams } from 'react-router-dom';

const NewsDetailOnboarding = lazy(
  () => import('@/components/course/onboarding/detailPage/NewsDetailOnboarding'),
);
export default function NewsDetailPage() {
  return (
    // w-[343px] desktop:w-[440px]
    <div className='m-auto mt-[40px] w-[91.47%] md:w-[353px] desktop:w-[440px]'>
      <PaginationBullets />
      <div className='m-auto mb-[24px] h-[51px] min-w-[196px] text-center'>
        <Title main='한 문장씩 읽어보세요!' sub='오늘의 뉴스 문장' />
      </div>

      <Slider />

      <WordDescription />

      <CompleteButton />

      <NavigateBlocker />

      {SHOW_NEWS_DETAIL_ONBOARDING && (
        <Suspense fallback={<OnboardingSkeletion type='detail' />}>
          <NewsDetailOnboarding />
        </Suspense>
      )}
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

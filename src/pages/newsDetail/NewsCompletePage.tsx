import CompleteButton from '@/components/course/complete/CompleteButton';
import quizResult100_png from '@/assets/p2/quiz result=100.png';
import quizResult100_webp from '@/assets/webps/quiz result=100.webp';
import CardContainer from '@/components/course/complete/CardContainer';
import GridContainer from '@/components/course/complete/GridContainer';
import { SHOW_NEWS_COMPLETE_ONBOARDING } from '@/constants/constants';
// import NewsCompleteOnboarding from '@/components/course/onboarding/completePage/NewsCompleteOnboarding';
import MissionCheckComponent from '@/components/common/MissionCheckComponent';
import ImgContainer from '@/components/common/ImgContainer';
import { lazy, Suspense } from 'react';
import Loader from '@/components/common/Loader';

// const MissionCheckComponent = lazy(
//   () => import('@/components/course/onboarding/completePage/NewsCompleteOnboarding'),
// );
const NewsCompleteOnboarding = lazy(
  () => import('@/components/course/onboarding/completePage/NewsCompleteOnboarding'),
);
export default function NewsCompletePage() {
  return (
    <div className='m-auto w-[343px]'>
      <div className='mb-[20px] mt-[40px] h-[165px] w-full'>
        <h1 className='mb-[8px] text-center text-[22px] font-bold text-custom-black'>
          학습을 완료했어요!
        </h1>
        <ImgContainer
          className='h-[124px] w-full'
          imgs={{ png: quizResult100_png, webp: quizResult100_webp }}
          alt='news complete image'
        />
      </div>

      <GridContainer />

      <div className='sm: absolute left-0 h-auto w-full bg-quiz-bg pb-[350px] pt-[36px] desktop:pb-[54px]'>
        <div className='m-auto h-[276px] w-[293px] desktop:w-[440px]'>
          <div className='m-auto mb-[24px] h-[72px] min-w-[210px] text-center'>
            <span className='mb-1 text-[12px] leading-[120%] text-custom-gray-700'>
              오늘의 단어
            </span>
            <h1 className='text-[18px] font-bold text-custom-gray-dark md:text-[20px]'>
              오늘 배운 단어를 북마크하고 <br /> 복습 퀴즈를 해보세요!
            </h1>
          </div>

          <div className='relative m-auto mb-[54px] flex h-[184px] w-[293px] flex-col gap-y-2 desktop:w-full'>
            <CardContainer />
          </div>
        </div>

        <MissionCheckComponent />
        <CompleteButton />
      </div>

      {SHOW_NEWS_COMPLETE_ONBOARDING && (
        <Suspense fallback={<Loader size={5} />}>
          <NewsCompleteOnboarding />
        </Suspense>
      )}
    </div>
  );
}

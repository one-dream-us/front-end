import ModalOverlay from '@/components/common/modal/ModalOverlay';
import CompleteButton from '@/components/course/complete/CompleteButton';
import QuizResultItem from '@/components/quiz/quizResult/QuizResultItem';
import tutorialStore from '@/store/course/tutorialStore';
import { useStore } from 'zustand';
import quizResult100 from '@/assets/p2/quiz result=100.png';
import tutorialImg from '@/assets/p2/P2 에셋_2차전달/코니_학습 완료.png';
import useNewsDetail from '@/hooks/newDetail/useNewsDetail';
import {
  SHOW_NEWS_COMPLETE_PAGE_TURORIAL,
  SHOW_NEWS_COMPLETE_PAGE_TURORIAL_KEY,
} from '@/constants';
import CompleteWordCard from '@/components/course/complete/CompleteWordCard';

export default function NewsCompletePage() {
  const { newsCompleteTutorial, setNewsCompleteTutorial } = useStore(tutorialStore);

  const { news, isLoading } = useNewsDetail((data) => data.descriptions);

  return (
    <div className='m-auto w-[343px]'>
      <div className='mb-[20px] mt-[40px] h-[165px] w-full'>
        <h1 className='mb-[8px] text-center text-[22px] font-bold text-custom-black'>
          학습을 완료했어요!
        </h1>
        <img className='h-[124px] w-full' src={quizResult100} alt='img' />
      </div>

      <div
        id='quiz-result-status'
        className='m-auto mb-[24px] grid h-[60px] w-[343px] grid-cols-3 grid-rows-1'
      >
        <QuizResultItem quantity={3} status='배운 단어' unit='개' />
        <QuizResultItem quantity={2} status='학습 시간' unit='분' />
        <QuizResultItem quantity={1} status='학습 일수' unit='일차' />
      </div>

      <div className='absolute left-0 w-full bg-quiz-bg pt-[36px]'>
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
            {SHOW_NEWS_COMPLETE_PAGE_TURORIAL && !newsCompleteTutorial && (
              <>
                <img
                  className='absolute -right-[17px] bottom-0 top-[30px] z-[10001] size-9 h-[37px] w-[34px]'
                  src={tutorialImg}
                  alt='cony'
                />
                <div className='absolute -top-[75px] right-0 z-[10000]'>
                  <div className='chat-bubble chat-bubble-rb h-[58px] w-[215px]'>
                    단어를 북마크 하고 <br /> 단어장에서 복습 퀴즈를 풀어봐요!
                  </div>
                </div>
              </>
            )}

            {isLoading ? (
              <>
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className={`skeleton box-border flex h-[56px] w-full items-center justify-between rounded-[4px] px-6 py-4`}
                  ></div>
                ))}
              </>
            ) : (
              <>
                {news?.map((item, index) => (
                  <CompleteWordCard key={item.dictionaryId} {...item} index={index} />
                ))}
              </>
            )}
          </div>
        </div>

        <CompleteButton />

        {SHOW_NEWS_COMPLETE_PAGE_TURORIAL && !newsCompleteTutorial && (
          <>
            <ModalOverlay
              isOpen={SHOW_NEWS_COMPLETE_PAGE_TURORIAL && !newsCompleteTutorial}
              children={<div />}
            />
            <button
              onClick={() => {
                localStorage.setItem(SHOW_NEWS_COMPLETE_PAGE_TURORIAL_KEY, 'false');
                setNewsCompleteTutorial(true);
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
          </>
        )}
      </div>
    </div>
  );
}

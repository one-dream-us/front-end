import ModalOverlay from '@/components/common/modal/ModalOverlay';
import CompleteButton from '@/components/course/complete/CompleteButton';
import QuizResultItem from '@/components/quiz/quizResult/QuizResultItem';
import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import tutorialStore from '@/store/course/tutorialStore';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import quizResult100 from '@/assets/p2/quiz result=100.png';
import tutorialImg from '@/assets/p2/P2 에셋_2차전달/코니_학습 완료.png';

export default function CourseComplete() {
  const { setIsNewUser, isNewUser } = useStore(tutorialStore);

  useEffect(() => {
    setIsNewUser(true);
  }, []);
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
          <div className='m-auto mb-[20px] h-[72px] min-w-[210px] text-center md:mb-[24px]'>
            <span className='mb-1 text-[12px] leading-[120%] text-custom-gray-700'>
              오늘의 단어
            </span>
            <h1 className='text-[18px] font-bold text-custom-gray-dark md:text-[20px]'>
              오늘 배운 단어를 북마크하고 <br /> 복습 퀴즈를 해보세요!
            </h1>
          </div>

          <div className='relative m-auto mb-[54px] flex h-[184px] w-[293px] flex-col gap-y-2 desktop:w-full'>
            {isNewUser && (
              <>
                <img
                  className='absolute -right-[17px] bottom-0 top-[30px] z-[10001] size-9'
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
            {todayswordList.map((item, index) => (
              <TodaysWord key={item.id} {...item} index={index} />
            ))}
          </div>
        </div>

        <CompleteButton />

        {isNewUser && (
          <>
            <ModalOverlay isOpen={isNewUser} children={<div />} />
            <button
              onClick={() => setIsNewUser(false)}
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

const TodaysWord = ({ word, index }: { index: number; word: string }) => {
  const [isScrap, setIsScrap] = useState(false);
  const { data } = useAuthCheckQuery();
  const { setIsOpen, setIsNavigate } = useLoginConfirmModalState();
  const { isNewUser } = useStore(tutorialStore);

  const showTutorial = isNewUser && index === 0;

  const handleScrap = () => {
    if (!data) {
      setIsOpen(true);
      setIsNavigate(false);
    } else {
      setIsScrap((prev) => !prev);
    }
  };
  return (
    <div
      className={`flex h-[56px] w-full items-center justify-between rounded-[4px] bg-white px-6 py-4 ${isScrap ? 'todays-word-card-shadow border-[2px] border-[#5BBF6A]' : ''} ${showTutorial ? 'z-[10000]' : ''}`}
    >
      <h1 className='text-[16px] font-medium text-custom-gray-dark'>{word}</h1>

      <button onClick={handleScrap} disabled={showTutorial ?? true}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className={`size-6 ${isScrap || showTutorial ? 'fill-[#1BBA71] stroke-none' : 'stroke-1'}`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z'
          />
        </svg>
      </button>
    </div>
  );
};

const todayswordList = [
  { id: 1, word: '달러 환산 코스피' },
  { id: 2, word: '저가 매수세 유입' },
  { id: 3, word: '코스피 지수' },
];

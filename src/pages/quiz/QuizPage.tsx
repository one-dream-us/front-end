import { useBlocker } from 'react-router-dom';
import ProgressBar from '@/components/quiz/ProgressBar';
import { useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import ModalOverlay from '@/components/common/modal/ModalOverlay';
import ModalButton from '@/components/common/modal/ModalButton';
import QuizSkeleton from '@/components/quiz/QuizSkeleton';
import Accordion from '@/components/quiz/Accordion';
import BottomSheet from '@/components/quiz/common/BottomSheet';
import correctIcon from '@/assets/p2/icon_check_right.png';
import wrongIcon from '@/assets/p2/icon_x_wrg.png';
import { useStore } from 'zustand';
import quizStore from '@/store/quiz/quizStore';
import { IQuiz } from '@/types/interface';
import { formatQuestion } from '@/utils/quiz/quizHandlers';
import { useQuizHandler } from '@/hooks/quiz/useQuizHandler';
import useChoiceQuizType from '@/hooks/quiz/useChioceQuizType';
import quizResultStore from '@/store/quiz/quizResultStore';
// import QuizIntroPage from './randomQuiz/QuizIntroPage';

export default function QuizPage() {
  const { index, isCorrect, resetQuizStore } = useStore(quizStore);
  const { resetResults } = useStore(quizResultStore);
  const { data, isLoading } = useChoiceQuizType();
  // console.log(data);

  const { handlePick, handleBottomSheetClick } = useQuizHandler();

  const currentQuiz = useMemo(() => {
    if (isLoading || !data) return;
    return data[index];
  }, [isLoading, index]) as IQuiz;

  useEffect(() => {
    resetQuizStore();
    resetResults();
  }, []);
  return (
    <div className=''>
      {/* {quizType === 'random' && <QuizIntroPage />} */}
      <ProgressBar index={index + 1} />
      {(isLoading || currentQuiz === undefined) && <QuizSkeleton />}

      {currentQuiz && (
        <div
          className={`m-auto min-h-[478px] w-[343px] rounded-[10px] bg-white p-4 md:w-[353px] md:p-5 desktop:w-[812px] desktop:p-[40px] ${isCorrect !== null && 'mb-[200px]'}`}
        >
          {/* 문제 */}
          <div className='mb-[40px] min-h-[158px] w-full text-custom-black desktop:mb-[30px]'>
            <div className='mb-[20px] h-[42px] w-full border-b border-custom-gray-200'>
              <h1 className='text-[14px] leading-[160%]'>
                <span className='mr-[12px] text-[20px] font-bold leading-normal'>
                  {index + 1} / 5
                </span>
                설명과 맞는 단어를 고르세요.
              </h1>
            </div>

            <div className='min-h-[96px] w-full'>
              {currentQuiz && (
                <h2 className='text-[16px] font-medium'>{formatQuestion(currentQuiz)}</h2>
              )}
            </div>
          </div>

          {/* 선지 */}
          <ul className='min-h-[248px] w-full'>
            {currentQuiz?.choices?.map((item, index, choices) => (
              <li key={item.dictionaryId}>
                <Accordion
                  handlePick={() => {
                    const answer = choices[currentQuiz.answerNum - 1];
                    return handlePick({
                      answer: answer.term,
                      dictionaryId: answer.dictionaryId,
                      status: answer.status,
                      item,
                    });
                  }}
                  optionIndex={index}
                  answer={choices[currentQuiz.answerNum - 1].term}
                  {...item}
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <AnimatePresence>
        {isCorrect !== null && (
          <BottomSheet
            imgSrc={isCorrect ? correctIcon : wrongIcon}
            titleText={isCorrect ? '맞았어요!' : '틀렸어요!'}
            buttonText={index === 4 ? '퀴즈 결과 바로가기' : '다음 문제 도전하기'}
            buttonTextColor={index === 4 ? 'text-custom-green-money' : 'text-custom-gray-lighter'}
            handleButtonClick={handleBottomSheetClick}
          />
        )}
      </AnimatePresence>
      <Block />
    </div>
  );
}

const Block = () => {
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation !== nextLocation && nextLocation.pathname !== '/quiz-loading',
  );
  const { remainQuestion } = useStore(quizStore);
  return (
    <>
      {blocker.state === 'blocked' && (
        <ModalOverlay isOpen={blocker.state === 'blocked'}>
          <div className='h-[142px] w-[343px] rounded-[10px] bg-custom-gray-lighter p-5 md:h-[148px] md:w-[375px]'>
            <h1 className='mb-[16px] text-center text-[14px] font-medium text-custom-gray-dark md:text-[16px]'>
              퀴즈를 포기하시겠어요? <br />
              {remainQuestion === 0
                ? '퀴즈 결과를 확인해보세요.'
                : `${remainQuestion}개만 더 풀면 오늘의 퀴즈를 완료할 수
              있어요!`}
            </h1>
            <ModalButton
              onProceed={() => blocker.reset()}
              onClose={() => blocker.proceed()}
              buttonText={{ close: '그만두기', proceed: '계속하기' }}
            />
          </div>
        </ModalOverlay>
      )}
    </>
  );
};

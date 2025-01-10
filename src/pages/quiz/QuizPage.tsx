import { useBlocker, useNavigate } from 'react-router-dom';
import ProgressBar from '@/components/quiz/ProgressBar';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import ModalOverlay from '@/components/common/modal/ModalOverlay';
import ModalButton from '@/components/common/modal/ModalButton';
// import QuizSkeleton from '@/components/quiz/QuizSkeleton';
// import useQuizQuery, { IQuiz } from '@/hooks/quiz/useQuizQuery';
import Accordion from '@/components/quiz/Accordion';
import BottomSheet from '@/components/quiz/common/BottomSheet';
import correctIcon from '@/assets/imgs_v2/icon_check_green.png';
import wrongIcon from '@/assets/imgs_v2/icon_X_Pink.png';
import quiz from '@/mocks/data/quiz';

export default function QuizPage() {
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  const [myChoice, setMyChioce] = useState<null | string>(null);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  // const { data: quiz, isLoading } = useQuizQuery();

  // const currentQuiz = useMemo(() => {
  //   if (isLoading || !quiz) return;
  //   return quiz[index];
  // }, [isLoading, index]) as IQuiz;

  const currentQuiz = quiz[index];

  const formatQuestion = () => {
    if (currentQuiz === undefined) return;
    const { answer, question } = currentQuiz;
    return question.replace(answer, '_'.repeat(answer.length * 3));
  };

  const handlePick = (item: { id: number; option: string; desc: string }) => {
    setMyChioce(item.option);
    item.option === currentQuiz?.answer ? setIsCorrect(true) : setIsCorrect(false);
  };

  return (
    <div className=''>
      <ProgressBar index={index + 1} />
      {/* {(isLoading || currentQuiz === undefined) && <QuizSkeleton />} */}

      {quiz && (
        <div className='m-auto mb-40 min-h-[478px] w-[343px] rounded-[10px] bg-white p-4 md:h-[779px] md:w-[353px] md:p-5 desktop:h-[735px] desktop:w-[812px] desktop:p-[40px]'>
          {/* 문제 */}
          <div className='mb-[40px] h-[158px] w-full text-custom-black desktop:mb-[30px]'>
            <div className='mb-[20px] h-[42px] w-full border-b border-custom-gray-200'>
              <h1 className='text-[14px] leading-[160%]'>
                <span className='mr-[12px] text-[20px] font-bold leading-normal'>
                  {index + 1} / 5
                </span>
                설명과 맞는 단어를 고르세요.
              </h1>
            </div>

            <div className='h-[96px] w-full'>
              {quiz && <h2 className='text-[16px] font-medium'>{formatQuestion()}</h2>}
            </div>
          </div>

          {/* 선지 */}
          <ul className='min-h-[248px] w-full'>
            {currentQuiz?.options.map((item) => (
              <li key={item.id}>
                <Accordion
                  myChoice={myChoice}
                  handlePick={() => handlePick(item)}
                  answer={currentQuiz.answer}
                  isCorrect={isCorrect}
                  index={index}
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
            handleButtonClick={() => {
              if (index === 4) {
                return navigate('/quiz-loading');
              } else {
                setIsCorrect(null);
                setMyChioce(null);
                setIndex((prev) => (prev === 4 ? 4 : prev + 1));
              }
            }}
          />
        )}
      </AnimatePresence>
      <Block rest={5 - index} />
    </div>
  );
}

const Block = ({ rest }: { rest: number }) => {
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      currentLocation !== nextLocation && nextLocation.pathname !== '/quiz-loading',
  );
  return (
    <>
      {blocker.state === 'blocked' && (
        <ModalOverlay isOpen={blocker.state === 'blocked'}>
          <div className='h-[142px] w-[343px] rounded-[10px] bg-custom-gray-lighter p-5 md:h-[148px] md:w-[375px]'>
            <h1 className='mb-[16px] text-center text-[14px] font-medium text-custom-gray-dark md:text-[16px]'>
              퀴즈를 포기하시겠어요? <br /> {rest}개만 더 풀면 오늘의 퀴즈를 완료할 수 있어요!
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

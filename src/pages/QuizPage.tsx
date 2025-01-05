import { Blocker, useBlocker } from 'react-router-dom';
import ProgressBar from '@/components/quiz/ProgressBar';
import { useMemo, useState } from 'react';
import correctIcon from '@/assets/imgs_v2/icon_check_green.png';
import wrongIcon from '@/assets/imgs_v2/icon_X_Pink.png';
import { AnimatePresence, motion } from 'framer-motion';
import ModalOverlay from '@/components/common/modal/ModalOverlay';
import ModalButton from '@/components/common/modal/ModalButton';
import QuizSkeleton from '@/components/quiz/QuizSkeleton';
import useQuizQuery, { IQuiz } from '@/hooks/quiz/useQuizQuery';

export default function QuizPage() {
  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) => currentLocation !== nextLocation,
  );
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  const [myChoice, setMyChioce] = useState<null | string>(null);
  const [index, setIndex] = useState(0);
  const { data: quiz, isLoading } = useQuizQuery();

  const currentQuiz = useMemo(() => {
    if (isLoading || !quiz) return;
    return quiz[index];
  }, [isLoading, index]) as IQuiz;

  const formatProblem = () => {
    if (!currentQuiz) return;
    const { answer, problem } = currentQuiz;
    return problem.replace(answer, '_'.repeat(answer.length * 3));
  };

  const handlePick = (item: { id: number; option: string; desc: string }) => {
    setMyChioce(item.option);
    item.option === currentQuiz?.answer ? setIsCorrect(true) : setIsCorrect(false);
  };

  return (
    <div className='bg-quiz-bg absolute left-0 top-0 min-h-screen w-full px-[16px] pt-[52px] desktop:pt-[80px]'>
      <ProgressBar index={index + 1} />
      {isLoading && <QuizSkeleton />}

      <AnimatePresence>
        {quiz && (
          <motion.div
            key={index}
            initial={{ x: 100, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: index === 0 ? 0 : 0.5 },
            }}
            exit={{ x: -100, opacity: 0, transition: { duration: 0.5 } }}
            // transition={{ duration: 1, type: 'spring' }}
            className='m-auto h-[478px] w-[343px] rounded-[10px] bg-white p-4 md:h-[779px] md:w-[353px] md:p-5 desktop:w-[812px] desktop:p-[40px]'
          >
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
                {quiz && <h2 className='text-[16px] font-medium'>{formatProblem()}</h2>}
              </div>
            </div>

            {/* 선지 */}
            <ul className='h-[248px] w-full border'>
              {currentQuiz?.options.map((item) => (
                <li key={item.id}>
                  <button
                    className={`bg-quiz-bg mb-2 flex h-[56px] w-full cursor-pointer items-center justify-start gap-x-2 rounded-[10px] p-4 text-[14px] font-bold text-custom-gray-dark transition-all duration-200 hover:scale-105 desktop:h-[62px] ${typeof isCorrect === 'boolean' && currentQuiz.answer === item.option && 'bg-quiz-correct-bg'} ${typeof isCorrect === 'boolean' && item.option === myChoice && myChoice !== currentQuiz.answer && 'bg-quiz-wrong-bg'}`}
                    onClick={() => handlePick(item)}
                    disabled={!!myChoice}
                  >
                    {item.option}
                  </button>
                  {/* <Accordion /> */}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCorrect !== null && (
          <BottomSheet
            handleButtonClick={() => {
              if (index === 1) {
                location.href = '/quiz-counting';
              } else {
                setIsCorrect(null);
                setMyChioce(null);
                setIndex((prev) => (prev === 1 ? 1 : prev + 1));
              }
            }}
            isCorrect={isCorrect}
            isLast={index === 1}
          />
        )}
      </AnimatePresence>
      <Block rest={5 - index} blocker={blocker} />
    </div>
  );
}

const BottomSheet = ({
  isCorrect,
  handleButtonClick,
  isLast,
}: {
  isCorrect: boolean;
  handleButtonClick: () => void;
  isLast: boolean;
}) => {
  return (
    <motion.div
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      exit={{ y: 150 }}
      transition={{ duration: 0.4 }}
      className='bottom-sheet-shadow fixed bottom-0 left-0 h-[180px] w-full rounded-tl-[10px] rounded-tr-[10px] bg-custom-gray-lighter px-4 desktop:right-0 desktop:m-auto desktop:max-w-[812px]'
    >
      <div className='m-auto max-w-[375px]'>
        <div className='mb-[20px] mt-[33px] flex items-center justify-start gap-x-2 md:justify-center'>
          {isCorrect ? (
            <>
              <img className='size-6' src={correctIcon} alt='correct' />
              <h1 className='text-[22px] font-bold text-custom-gray-dark'>맞았어요!</h1>
            </>
          ) : (
            <>
              <img className='size-6' src={wrongIcon} alt='wrong' />
              <h1 className='text-[22px] font-bold text-custom-gray-dark'>틀렸어요!</h1>
            </>
          )}
        </div>

        <button
          onClick={handleButtonClick}
          className={`h-[54px] w-full rounded-[10px] bg-custom-gray-dark text-[16px] font-bold leading-170 transition-all duration-200 hover:bg-custom-gray-medium ${isLast ? 'text-custom-green-money' : 'text-custom-gray-lighter'}`}
        >
          {isLast ? '퀴즈 결과 바로가기' : '다음 문제 도전하기'}
        </button>
      </div>
    </motion.div>
  );
};

const Block = ({ blocker, rest }: { blocker: Blocker; rest: number }) => {
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

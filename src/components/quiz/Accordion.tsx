import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IChoice } from '@/types/interface';
import { useStore } from 'zustand';
import quizStore from '@/store/quiz/quizStore';

interface AccordionProps extends IChoice {
  handlePick: () => void;
  answer: string;
  index: number;
}
export default function Accordion({
  answer,
  handlePick,
  index,
  detail,
  dictionaryId,
  term,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { myChoice, isCorrect } = useStore(quizStore);

  const handleAccordion = () => {
    if (!myChoice) {
      handlePick();
    } else if (term === answer) {
      return;
    } else {
      setIsOpen((prev) => !prev);
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [index]);

  const correctBg = typeof isCorrect === 'boolean' && answer === term ? 'bg-quiz-correct-bg' : '';
  const wrongBg =
    typeof isCorrect === 'boolean' &&
    term === myChoice &&
    myChoice !== answer &&
    'bg-quiz-wrong-bg';

  return (
    <motion.div layout>
      {/* header */}
      <header
        className={`flex h-[56px] w-full cursor-pointer items-center justify-start gap-x-2 bg-quiz-bg p-4 text-[14px] font-bold text-custom-gray-dark desktop:h-[62px] ${isOpen ? 'mb-0 rounded-b-none rounded-t-[10px]' : 'mb-2 rounded-[10px]'} ${correctBg} ${wrongBg} `}
        onClick={handleAccordion}
      >
        {term}
        {myChoice && term !== answer && (
          <motion.svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='ml-auto size-6 text-custom-gray-600'
            animate={{ rotateZ: isOpen ? 180 : 0 }}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
          </motion.svg>
        )}
      </header>

      {/* desc */}
      <AnimatePresence>
        {isOpen && myChoice && (
          <motion.main
            key={dictionaryId}
            layout
            className={`mb-2 rounded-b-[10px] bg-quiz-bg ${correctBg} ${wrongBg}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            // transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          >
            <div className='px-4 pb-4 text-[14px] leading-[160%] md:leading-170'>{detail}</div>
          </motion.main>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

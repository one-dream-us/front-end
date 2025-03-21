import quizStore from '@/store/quiz/quizStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';
import quizLoading from '@/assets/p2/quiz_lottie.gif';

export default function QuizLoadingPage() {
  const { quizType } = useStore(quizStore);
  const naviagte = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      return quizType === 'normal' ? naviagte('/quiz-result') : naviagte('/random-quiz-result');
    }, 2200);

    return () => clearTimeout(timer);
  }, []);
  return <QuizLoading />;
}

export const QuizLoading = () => {
  return (
    <div className='m-auto mt-[160px] h-[158px] min-w-[168px] md:mt-[180px]'>
      <img className='m-auto h-[98px] w-[98px] border-black' src={quizLoading} alt='loading' />
      <h1 className='text-center text-[22px] font-bold text-custom-black-light'>
        모니가 퀴즈 점수를 <br />
        계산하고 있어요!
      </h1>
    </div>
  );
};

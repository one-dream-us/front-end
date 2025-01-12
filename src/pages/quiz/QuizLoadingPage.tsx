import quizStore from '@/store/quiz/quizStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';

export default function QuizLoadingPage() {
  const { quizType } = useStore(quizStore);
  const naviagte = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      return quizType === 'normal' ? naviagte('/quiz-result') : naviagte('/random-quiz-result');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='m-auto mt-[160px] h-[158px] w-[168px] md:mt-[180px]'>
      <img
        className='m-auto mb-[20px] h-[72px] w-[72px] border border-black'
        src=''
        alt='loading'
      />
      <h1 className='text-center text-[22px] font-bold text-custom-black-light'>
        모니가 퀴즈 점수를 <br />
        계산하고 있어요!
      </h1>
    </div>
  );
}

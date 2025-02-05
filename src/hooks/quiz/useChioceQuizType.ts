import { quizApi } from '@/services/quizApi';
import quizStore from '@/store/quiz/quizStore';
import { IQuiz } from '@/types/interface';
import { useEffect, useState } from 'react';
import { useStore } from 'zustand';

const useChoiceQuizType = () => {
  const [data, setData] = useState<IQuiz[]>([]);
  const [isLoading, setIsloading] = useState(true);
  const { setQuizType } = useStore(quizStore);
  useEffect(() => {
    (async () => {
      const { isFirstQuizAttempt } = await quizApi.checkIsFirstQuiz();
      // console.log(isFirstQuizAttempt);

      if (isFirstQuizAttempt) {
        console.log('random fetch');
        setQuizType('random');
        const res = await quizApi.getRandomQuizzes();
        setData(res);
        setIsloading(false);
      } else {
        console.log('normal fetch');
        setQuizType('normal');
        const res = await quizApi.getNormalQuiz();
        setData(res);
        setIsloading(false);
      }
    })();
  }, []);

  return { data, isLoading };
};

export default useChoiceQuizType;

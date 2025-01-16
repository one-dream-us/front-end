import { quizApi } from '@/services/quizApi';
import quizStore from '@/store/quiz/quizStore';
import { IQuiz } from '@/types/interface';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useStore } from 'zustand';

// const IS_FIRST_QUIZ_KEY = 'isFirstQuiz';

const useChoiceQuizType = () => {
  const [isFirst, setIsFirst] = useState<boolean | null>(true); //JSON.parse(localStorage.getItem(IS_FIRST_QUIZ_KEY) ?? 'null'),
  const { setQuizType } = useStore(quizStore);

  // useEffect(() => {
  //   (async () => {
  //     const { isFirstQuizAttempt } = await quizApi.checkIsFirstQuiz();
  //     if(isFirstQuizAttempt===false)
  //     setIsFirst(isFirstQuizAttempt);
  //   })();
  // }, []);

  const { data, isLoading } = useQuery<IQuiz[]>({
    queryKey: isFirst ? ['random-quiz'] : ['normal-quiz'],
    queryFn: async () => {
      if (isFirst) {
        setQuizType('random');
        return await quizApi.getRandomQuizzes();
      } else if (isFirst === false) {
        setQuizType('normal');
        return await quizApi.getNormalQuiz();
      } else {
        return;
      }
    },
  });

  return { data, isLoading };
};

export default useChoiceQuizType;

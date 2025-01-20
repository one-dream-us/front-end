import { quizApi } from '@/services/quizApi';
import quizStore from '@/store/quiz/quizStore';
import { IQuiz } from '@/types/interface';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useStore } from 'zustand';

// const IS_FIRST_QUIZ_KEY = 'isFirstQuiz';

const useChoiceQuizType = () => {
  const [isFirst, setIsFirst] = useState<boolean>(true); //JSON.parse(localStorage.getItem(IS_FIRST_QUIZ_KEY) ?? 'null'),
  const { setQuizType } = useStore(quizStore);
  useEffect(() => {
    (async () => {
      const { isFirstQuizAttempt } = await quizApi.checkIsFirstQuiz();
      // if (isFirstQuizAttempt === false)
      setIsFirst(isFirstQuizAttempt);
    })();
  }, []);
  const { data, isLoading } = useQuery<IQuiz[]>({
    queryKey: isFirst ? ['random-quiz'] : ['normal-quiz'],
    queryFn: async () => {
      if (isFirst === true) {
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
  console.log(isFirst);
  console.log(data);
  return { data, isLoading };
  // Isfirst enabled false해놓고 if로 로컬에 키 있는지 먼저 검사, 없으면 isfirst fetch, false면 로컬에 키 저장

  // const { setQuizType } = useStore(quizStore);

  // const IS_FIRST_QUIZ_KEY = 'isFirstQuiz';
  // if (localStorage.getItem(IS_FIRST_QUIZ_KEY)) {
  //   // normal quiz fetch
  //   return useQuery<IQuiz[]>({
  //     queryKey: ['normal-quiz'],
  //     queryFn: async () => {
  //       setQuizType('normal');
  //       return await quizApi.getNormalQuiz();
  //     },
  //   });
  // } else {
  //   const { refetch, data } = useIsFirstQuiz();
  //   refetch();
  //   if (data) {
  //     //random quiz fetch
  //     return useQuery<IQuiz[]>({
  //       queryKey: ['random-quiz'],
  //       queryFn: async () => {
  //         setQuizType('random');
  //         return await quizApi.getRandomQuizzes();
  //       },
  //     });
  //   } else {
  //     // storage key add
  //     localStorage.setItem(IS_FIRST_QUIZ_KEY, 'true');
  //     console.log('add key ,fetch normal');

  //     // noraml quiz fetch
  //     return useQuery<IQuiz[]>({
  //       queryKey: ['normal-quiz'],
  //       queryFn: async () => {
  //         setQuizType('normal');
  //         return await quizApi.getNormalQuiz();
  //       },
  //     });
  //   }
  // }

  // const { setQuizType } = useStore(quizStore);
  // const IS_FIRST_QUIZ_KEY = 'isFirstQuiz';

  // const fetchNormalQuiz = async () => {
  //   setQuizType('normal');
  //   return await quizApi.getNormalQuiz();
  // };

  // const fetchRandomQuiz = async () => {
  //   setQuizType('random');
  //   return await quizApi.getRandomQuizzes();
  // };

  // const { refetch: refetchIsFirstQuiz, data: isFirstQuizData } = useIsFirstQuiz();

  // useEffect(() => {
  //   if (!localStorage.getItem(IS_FIRST_QUIZ_KEY)) {
  //     refetchIsFirstQuiz();
  //   }
  // }, [refetchIsFirstQuiz]);

  // useEffect(() => {
  //   if (isFirstQuizData !== undefined) {
  //     if (isFirstQuizData) {
  //       localStorage.setItem(IS_FIRST_QUIZ_KEY, 'true');
  //     }
  //   }
  // }, [isFirstQuizData]);

  // if (localStorage.getItem(IS_FIRST_QUIZ_KEY)) {
  //   return useQuery<IQuiz[]>({
  //     queryKey: ['normal-quiz'],
  //     queryFn: fetchNormalQuiz,
  //   });
  // } else if (isFirstQuizData) {
  //   return useQuery<IQuiz[]>({
  //     queryKey: ['random-quiz'],
  //     queryFn: fetchRandomQuiz,
  //   });
  // } else {
  //   return useQuery<IQuiz[]>({
  //     queryKey: ['normal-quiz'],
  //     queryFn: fetchNormalQuiz,
  //   });
  // }
};

export default useChoiceQuizType;

// const useIsFirstQuiz = () => {
//   const { refetch, isLoading, data } = useQuery({
//     queryKey: ['isFirstQuiz'],
//     queryFn: async () => await quizApi.checkIsFirstQuiz(),
//     enabled: false,
//   });

//   return { refetch, isLoading, data };
// };

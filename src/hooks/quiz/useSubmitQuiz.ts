import { NORMAL_QUIZ_RESULT_KEY } from '@/constants';
import { quizApi } from '@/services/quizApi';
import quizCompleteStore from '@/store/quiz/quizCompleteStore';
import { IQuestionResult } from '@/types/interface';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';

const useSubmitQuiz = () => {
  const { setResult } = useStore(quizCompleteStore); // 삭제 예정

  const navigate = useNavigate();
  const { mutate: submitQuiz } = useMutation({
    mutationFn: async (results: IQuestionResult[]) => await quizApi.postQuizResults(results),
    onSuccess: (data) => {
      // useStore -> 새로운 상태 저장, 결과 페이지에서 렌더링
      setResult(data);
      localStorage.setItem(NORMAL_QUIZ_RESULT_KEY, JSON.stringify(data));
      navigate('/quiz-loading');
    },
  });
  return submitQuiz;
};

export default useSubmitQuiz;

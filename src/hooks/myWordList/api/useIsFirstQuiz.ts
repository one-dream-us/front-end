import { useQuery } from '@tanstack/react-query';
import { quizApi } from '@/services/quizApi';

export default function useIsFirstQuiz() {
  const { data, isLoading: isCheckFirstLoading } = useQuery({
    queryKey: ['isFirstQuiz'],
    queryFn: () => quizApi.checkIsFirstQuiz(),
  });
  const isFirstQuiz = data?.isFirstQuizAttempt;

  return { isFirstQuiz, isCheckFirstLoading };
}

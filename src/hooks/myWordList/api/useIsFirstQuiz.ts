import { useQuery } from '@tanstack/react-query';
import { quizApi } from '@/services/quizApi';
import QUERY_KEYS from '@/constants/queryKeys';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useIsFirstQuiz() {
  const { isLogin } = useLoginStore();
  const { data, isLoading: isCheckFirstLoading } = useQuery({
    queryKey: QUERY_KEYS.checkFirstQuiz,
    queryFn: () => quizApi.checkIsFirstQuiz(),
    enabled: !!isLogin,
  });
  const isFirstQuiz = data?.isFirstQuizAttempt ?? false;

  return { isFirstQuiz, isCheckFirstLoading };
}

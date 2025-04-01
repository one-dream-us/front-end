import wordListAPi from '@/services/wordListApi';
import { useQuery } from '@tanstack/react-query';
import QUERY_KEYS from '@/constants/queryKeys';
import useGetWordListData from './useGetWordListData';

export default function useLearningStatus() {
  const {
    data: userInfo,
    refetch: refetchStatus,
    isLoading: isStatusLoading,
  } = useQuery({
    queryKey: QUERY_KEYS.learningStatus,
    queryFn: wordListAPi.getLearningStatus,
  });

  const { wordList, isLoading: isHistoryLoading } = useGetWordListData('히스토리');
  const { username = '', totalScrap = 0, totalGraduation = 0, accuracyRate = 0 } = userInfo ?? {};
  const historyCnt = wordList.length;

  return {
    username,
    totalScrap,
    totalGraduation,
    accuracyRate,
    refetchStatus,
    isStatusLoading,
    historyCnt,
    isHistoryLoading,
  };
}

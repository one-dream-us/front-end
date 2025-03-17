import wordListAPi from '@/services/wordListApi';
import { useQuery } from '@tanstack/react-query';
import historyApi from '@/services/historyApi';

export default function useLearningStatus() {
  const {
    data: userInfo,
    refetch: refetchStatus,
    isLoading: isStatusLoading,
  } = useQuery({
    queryKey: ['learningStatus'],
    queryFn: wordListAPi.getLearningStatus,
  });

  const {
    data: history,
    refetch: refetchHistory,
    isLoading: isHistoryLoading,
  } = useQuery({
    queryKey: ['getHistory'],
    queryFn: historyApi.getHistory,
  });

  const { username = '', totalScrap = 0, totalGraduation = 0, accuracyRate = 0 } = userInfo ?? {};
  const { historyCnt = 0 } = history ?? {};

  return {
    username,
    totalScrap,
    totalGraduation,
    accuracyRate,
    refetchStatus,
    isStatusLoading,
    historyCnt,
    refetchHistory,
    isHistoryLoading,
  };
}

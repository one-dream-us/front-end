import QUERY_KEYS from '@/constants/queryKeys';
import authApi from '@/services/authApi';
import { missionApi } from '@/services/missionApi';
import { useQueries } from '@tanstack/react-query';

const useProfileInfo = () => {
  return useQueries({
    queries: [
      { queryKey: QUERY_KEYS.userInfo, queryFn: authApi.getInfo },
      { queryKey: QUERY_KEYS.continuousDays, queryFn: missionApi.getContinuousDays },
    ],
    combine: (res) => {
      return {
        data: {
          userInfo: res[0].data,
          continuousDays: res[1].data,
        },
        isLoading: res[0].isLoading || res[1].isLoading,
      };
    },
  });
};
export default useProfileInfo;

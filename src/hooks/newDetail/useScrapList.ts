import QUERY_KEYS from '@/constants/queryKeys';
import wordListAPi from '@/services/wordListApi';
import { IScrapList } from '@/types/interface';
import { useQuery } from '@tanstack/react-query';

const useScrapList = <T>(select?: ((data: IScrapList) => T) | undefined) => {
  const { data: scrapList, isLoading: scrapListLoading } = useQuery({
    queryKey: QUERY_KEYS.getScrapList,
    queryFn: async () => await wordListAPi.getScrap(),
    select,
  });

  return { scrapList, scrapListLoading };
};
export default useScrapList;

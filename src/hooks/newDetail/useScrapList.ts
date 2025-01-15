import wordListAPi from '@/services/wordListApi';
import { IScrapList } from '@/types/interface';
import { useQuery } from '@tanstack/react-query';

const useScrapList = <T>(select?: ((data: IScrapList) => T) | undefined) => {
  const { data: scrapList, isLoading: scrapListLoading } = useQuery({
    queryKey: ['myScrapList'],
    queryFn: async () => await wordListAPi.getScrap(),
    select,
  });

  return { scrapList, scrapListLoading };
};
export default useScrapList;

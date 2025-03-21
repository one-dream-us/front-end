import useNewsDetail from '@/hooks/newDetail/useNewsDetail';
import CompleteWordCard from './CompleteWordCard';
import { useEffect } from 'react';
import historyApi from '@/services/historyApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AddHistoriesPayload } from '@/types/interface';
import QUERY_KEYS from '@/constants/queryKeys';

export default function CardContainer() {
  const { news, isLoading } = useNewsDetail((data) => data.descriptions);

  const queryClient = useQueryClient();
  const { mutate: addHistories } = useMutation({
    mutationFn: async (payload: AddHistoriesPayload) => await historyApi.addHistories(payload),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEYS.getHistoryList }),
  });

  useEffect(() => {
    if (!isLoading) {
      const dictionaryIds = news?.map((item) => item.dictionaryId) as number[];
      addHistories({ dictionaryIds });
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <>
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`skeleton box-border flex h-[56px] w-full items-center justify-between rounded-[4px] px-6 py-4`}
            ></div>
          ))}
        </>
      ) : (
        <>{news?.map((item) => <CompleteWordCard key={item.dictionaryId} {...item} />)}</>
      )}
    </>
  );
}

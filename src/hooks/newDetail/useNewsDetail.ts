import QUERY_KEYS from '@/constants/queryKeys';
import newsApi from '@/services/newsApi';
import { INewsDetail } from '@/types/interface';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const useNewsDetail = <T>(selectFn?: ((data: INewsDetail) => T) | undefined) => {
  const { id: newsId } = useParams();
  const { data: news, isLoading } = useQuery({
    queryKey: QUERY_KEYS.newsDetail(newsId as string),
    queryFn: async () => await newsApi.fetchNewsDetail(newsId!),
    select: selectFn,
  });

  return { news, isLoading, newsId };
};
export default useNewsDetail;

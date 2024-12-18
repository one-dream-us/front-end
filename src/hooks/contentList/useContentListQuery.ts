import contentListApi from '@/services/contentListApi';
import { ContentListData } from '@/types/interface';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

export const useContentListQuery = (size: number = 10) => {
  const { data, isLoading, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['contentList'],
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      const res = (await contentListApi.getContentList({
        cursor: pageParam === 0 ? null : pageParam,
        size,
      })) as ContentListData;
      return res;
    },
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
    initialPageParam: 0,
  });

  const res = useMemo(() => {
    return data?.pages.reduce((acc, cur) => {
      const res: ContentListData = {
        ...cur,
        contents: [...acc.contents, ...cur.contents],
      };
      return res;
    });
  }, [data]) as ContentListData;

  return { res, isLoading, hasNextPage, fetchNextPage };
};

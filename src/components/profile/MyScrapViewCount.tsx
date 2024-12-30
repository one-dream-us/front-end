import contentApi from '@/services/contentAPi';
import scrapApi from '@/services/scrapApi';
import { useLoginStore } from '@/store/useIsLoginStore';
import { useQueries } from '@tanstack/react-query';

export default function MyScrapViewCount() {
  const isLogin = useLoginStore((state) => state.isLogin);
  const [scrap, viewCount] = useQueries({
    queries: [
      { queryKey: ['scrap-total'], queryFn: scrapApi.getTotalScrapCount, staleTime: 0 },
      {
        queryKey: ['myViewCount'],
        queryFn: contentApi.getMyViewCount,
        enabled: isLogin,
        staleTime: 0,
      },
    ],
  });

  return (
    <div
      style={{ gridArea: 'content-info' }}
      className='m-auto my-[24px] flex h-[20px] w-[155px] items-center justify-center text-[12px] text-custom-gray-dark'
    >
      <span className='mr-[5px] font-medium'>스크랩</span>
      <span className='font-medium'>{scrap?.data?.totalScrapCnt ?? '0'}</span>
      <span className='mx-[12px]'>|</span>
      <span className='mr-[5px] font-medium'>본 콘텐츠</span>
      <span className='font-medium'>{viewCount.data ?? 0}</span>
    </div>
  );
}

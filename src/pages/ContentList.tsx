import ContentListCard from '@/components/contentList/ContentListCard';
import ContentListSkeleton from '@/components/contentList/ContentListSkeleton';
import Observer from '@/components/contentList/Observer';
import { useContentListQuery } from '@/hooks/contentList/useContentListQuery';

export default function ContentList() {
  const { res, isLoading, fetchNextPage, hasNextPage } = useContentListQuery(6);

  return (
    <div className='mt-[40px] px-4 md:px-6 desktop:mt-[38px] desktop:px-[129px]'>
      <div className='mb-[24px] flex items-center justify-between md:mb-[20px]'>
        <h1 className='text-[22px] font-bold'>콘텐츠 목록</h1>
        <span className='flex items-center justify-center text-xs text-custom-gray-600'>
          컨텐츠 수{' '}
          {isLoading ? (
            <div className='ml-1 h-2 w-2 animate-pulse rounded-lg bg-custom-gray-medium'></div>
          ) : (
            <span className='font-bold text-black'>{res?.totalElements}</span>
          )}
        </span>
      </div>

      <div className='mx-auto mb-[60px] flex flex-col items-center gap-y-[32px] md:items-start desktop:grid desktop:grid-cols-3 desktop:justify-items-center'>
        {res?.contents?.map((item) =>
          isLoading ? (
            <ContentListSkeleton key={item.id} />
          ) : (
            <ContentListCard key={item.id} {...item} />
          ),
        )}
      </div>

      <Observer fetchNext={fetchNextPage} hasNext={hasNextPage} />
    </div>
  );
}

import ContentListCard from '@/components/contentList/ContentListCard';
import ContentListSkeleton from '@/components/contentList/ContentListSkeleton';
import Observer from '@/components/contentList/Observer';
import { useContentListQuery } from '@/hooks/contentList/useContentListQuery';

export default function ContentList() {
  const { res, isLoading, fetchNextPage, hasNextPage } = useContentListQuery(6);

  return (
    <div className='mt-[40px] px-4 md:px-6 desktop:m-auto desktop:mt-[38px] desktop:max-w-[1440px] desktop:px-[129px]'>
      <div className='mb-[24px] flex items-center justify-between md:mb-[20px]'>
        <h1 className='text-[22px] font-medium leading-[150%] tracking-[-2%] text-custom-black'>
          콘텐츠 목록
        </h1>
        {isLoading ? (
          <div className='h-[14px] w-[76px] animate-pulse rounded-[4px] bg-custom-gray-300'></div>
        ) : (
          <span className='flex items-center justify-center text-xs leading-[170%] tracking-[-2%] text-custom-gray-700'>
            콘텐츠 수
            <span className='ml-2 text-xs font-medium leading-[150%] tracking-[-2%] text-custom-gray-700'>
              {res?.totalElements}
            </span>
          </span>
        )}
      </div>

      <div className='desktop:jusise mx-auto mb-[60px] flex flex-col items-start gap-y-[32px] md:items-start desktop:flex-row desktop:flex-wrap desktop:justify-between'>
        {isLoading && [...Array(9).keys()].map((item) => <ContentListSkeleton key={item} />)}
        {res?.contents?.map((item) => <ContentListCard key={item.id} {...item} />)}
      </div>

      <Observer fetchNext={fetchNextPage} hasNext={hasNextPage} />
    </div>
  );
}

import KeywordTags from '@/components/common/contentCard/KeywordTags';
import ScrapDateNCount from '@/components/common/contentCard/ScrapDateNCount';
import { useHomeContentsQuery } from '@/hooks/homeContent/useHomeContentsQuery';
import homeContentApi from '@/services/homeContentApi';
import { ContentCardData } from '@/types/interface';
import { formatDate } from '@/utils/myScrapUtils';
import { Link } from 'react-router-dom';
import HomePopularcontentsSkeleton from './HomePopularcontentsSkeleton';
import LazyImage from '@/components/common/LazyImage';

export default function HomePopularContents() {
  const { data: contents, isLoading } = useHomeContentsQuery<ContentCardData[]>(
    'popular',
    homeContentApi.getPopular,
  );
  if (isLoading) return <HomePopularcontentsSkeleton />;
  return (
    <div className='pl-4 md:pl-6 desktop:m-auto desktop:max-w-[1440px] desktop:pl-[129px]'>
      <h1 className='mb-5 text-lg font-medium md:text-xl desktop:text-[22px]'>인기 콘텐츠</h1>

      <div className='inline-flex w-full items-center gap-x-3 overflow-x-auto overflow-y-hidden'>
        {contents?.map((item) => (
          <Link
            key={item.id}
            to={`/content/${item.id}`}
            className='max-w-[254px] shrink-0 md:max-w-[260px]'
          >
            {/* <img
              className='mb-5 h-[140px] w-full rounded-lg md:h-[145px]'
              src={item.thumbnailUrl}
              alt={`${item.title} thumbnail`}
            /> */}
            <LazyImage
              className='mb-5 h-[140px] w-full rounded-lg md:h-[145px]'
              src={item.thumbnailUrl}
              alt={`${item.title} thumbnail`}
            />

            <div>
              <KeywordTags tags={item.tags} />

              <div className='min-h-[56px]'>
                <h2 className='mb-1 mt-2 line-clamp-2 text-lg font-medium tracking-[-2%]'>
                  {item.title}
                </h2>
              </div>
              <p
                dangerouslySetInnerHTML={{ __html: item.summaryText }}
                className='mb-2 line-clamp-3 h-[60px] w-full text-sm tracking-[-2%] text-custom-black'
              />
              <ScrapDateNCount date={formatDate(item.createdAt)} scrapCount={item.viewCount} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

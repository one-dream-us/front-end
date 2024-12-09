import { useHomeContentsQuery } from '@/hooks/homeContent/useHomeContentsQuery';
import homeContentApi from '@/services/homeContentApi';
import { ContentCardData } from '@/types/interface';
import { Link } from 'react-router-dom';
import { formatDate } from '@/utils/myScrapUtils';
import KeywordTags from '@/components/common/contentCard/KeywordTags';
import ScrapDateNCount from '@/components/common/contentCard/ScrapDateNCount';
import HomeLatestContentSkeleton from './HomeLatestContentSkeleton';

export default function HomeLatestcontent() {
  const { data: content, isLoading } = useHomeContentsQuery<ContentCardData>(
    'latest',
    homeContentApi.getLatest,
  );
  if (isLoading) return <HomeLatestContentSkeleton />;
  return (
    <div className='px-4 md:px-6 desktop:px-[129px]'>
      <div className='letter mb-5 flex items-center justify-between leading-[150%]'>
        <h1 className='letter text-lg font-medium tracking-[-2%] text-custom-black md:text-xl desktop:text-[22px]'>
          오늘 업로드 된 콘텐츠
        </h1>
        <Link
          className='flex items-center justify-center gap-x-1 text-xs tracking-[-2%] text-custom-black'
          to='/contents'
        >
          전체 컨텐츠 보기
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </Link>
      </div>

      <Link
        to={`/content/${content?.id}`}
        className='flex max-w-[343px] flex-col gap-y-5 md:max-w-full md:flex-row md:items-center md:gap-x-6'
      >
        <img
          className='h-[190px] max-w-[343px] rounded-lg'
          src={content?.thumbnailUrl}
          alt={`${content?.title} thumbnail`}
        />

        <div className='h-[154px] w-full flex-1'>
          <KeywordTags tags={content?.tags ?? ['']} />
          <h2 className='mb-1 line-clamp-2 text-lg font-medium leading-[150%] tracking-[-2%] text-custom-black'>
            {content?.title}
          </h2>
          <div className='h-[60px]'>
            {' '}
            <span className='mb-2 line-clamp-3 text-sm leading-[150%] tracking-[-2%] text-custom-gray-dark'>
              {content?.summaryText}
            </span>
          </div>
          <ScrapDateNCount
            date={formatDate(content?.createdAt!)}
            scrapCount={content?.scrapCount!}
          />
        </div>
      </Link>
    </div>
  );
}

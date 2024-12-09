import { ContentCardData } from '@/types/interface';
import { Link } from 'react-router-dom';
import KeywordTags from '../common/contentCard/KeywordTags';
import ScrapDateNCount from '../common/contentCard/ScrapDateNCount';
import { formatDate } from '@/utils/myScrapUtils';

export default function ContentListCard({
  thumbnailUrl,
  title,
  tags,
  id,
  summaryText,
  createdAt,
  viewCount,
}: ContentCardData) {
  return (
    <Link
      to={`/content/${id}`}
      className='des flex h-[364px] max-w-[343px] flex-col gap-y-5 md:h-[190px] md:max-w-[723px] md:flex-row md:items-center md:gap-x-[25px] desktop:h-[354px] desktop:w-[347px] desktop:shrink-0 desktop:flex-col'
    >
      <img
        className='h-[190px] w-full rounded-lg bg-custom-gray md:w-[343px] desktop:h-[190px] desktop:w-full'
        src={thumbnailUrl}
        alt={`${title} thumbnail`}
      />

      <div className='min-h-[154px] w-full md:w-[354px] desktop:w-full'>
        <KeywordTags tags={tags} />
        <div className='min-h-[52px] w-[254px]'>
          <h2 className='mb-1 mt-2 line-clamp-2 text-lg font-medium'>{title}</h2>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: summaryText }}
          className='mb-2 line-clamp-3 max-h-[70px] w-full leading-[150%] text-custom-black md:text-sm'
        ></div>
        <ScrapDateNCount date={formatDate(createdAt)} scrapCount={viewCount} />
      </div>
    </Link>
  );
}

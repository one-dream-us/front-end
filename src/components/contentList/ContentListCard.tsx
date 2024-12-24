import { ContentCardData } from '@/types/interface';
import { Link } from 'react-router-dom';
import KeywordTags from '../common/contentCard/KeywordTags';
import ScrapDateNCount from '../common/contentCard/ScrapDateNCount';
import { formatDate } from '@/utils/myScrapUtils';
import { memo } from 'react';

function ContentListCard({
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
      className='mb-8 flex h-[380px] max-w-[343px] flex-col gap-y-5 md:h-[190px] md:max-w-[723px] md:flex-row md:items-center md:gap-x-[25px] desktop:h-[348px] desktop:w-[347px] desktop:shrink-0 desktop:flex-col'
    >
      <img
        className='h-[190px] w-full rounded-[10px] bg-custom-gray md:w-[343px] desktop:h-[190px] desktop:w-full'
        src={thumbnailUrl}
        alt={`${title} thumbnail`}
      />

      <div className='min-h-[154px] w-full md:w-[354px] desktop:w-full'>
        <KeywordTags tags={tags} />
        <div className='min-h-[52px] w-[254px]'>
          <h2 className='mb-1 mt-2 line-clamp-2 text-lg font-medium leading-[150%]'>{title}</h2>
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: summaryText }}
          className='mb-2 line-clamp-3 max-h-[70px] w-full text-sm leading-[150%] text-custom-black'
        />
        <ScrapDateNCount date={formatDate(createdAt)} scrapCount={viewCount} />
      </div>
    </Link>
  );
}

export default memo(ContentListCard);

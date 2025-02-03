import { News } from '@/types/interface';
import { formatReadCount } from '@/utils/commonUtils';
import { formatDate } from '@/utils/myScrapUtils';
import Keywords from './Keywords';
import { Link } from 'react-router-dom';
import WaterMark from '@/assets/imgs/watermark.png';

export default function NewsCard({
  news,
  isToday = false,
  isDesktop = false,
}: {
  news: News;
  isToday?: boolean;
  isDesktop?: boolean;
}) {
  const { title, viewCount, createdAt, thumbnailUrl, newsId, tags } = news;

  return (
    <Link
      to={`/newsPending/${newsId}`}
      className={`relative flex flex-col ${(isToday || isDesktop) && 'desktop:flex-row desktop:gap-x-5'}`}
    >
      <img src={WaterMark} className='absolute left-2 top-2 h-11 w-11 object-cover' />
      <img
        className='mb-3 h-[172px] w-full rounded bg-gray-200 md:h-[177px] md:w-[353px] desktop:h-[198px] desktop:w-[396px]'
        src={thumbnailUrl}
        alt={title + ' 썸네일'}
      />
      <div>
        <div className='mb-1 flex items-center text-[10px] leading-120 text-custom-gray-500'>
          <span>조회수 {formatReadCount(viewCount)}</span>
          <div className='mx-2 h-2.5 w-[1px] bg-custom-gray-400' />
          <span>{formatDate(createdAt)}</span>
        </div>
        <p className='mb-2 font-bold text-custom-gray-dark'>{title}</p>
        <Keywords tags={tags} withTooltip={isToday} />
      </div>
    </Link>
  );
}

import { News } from '@/types/interface';
import { formatReadCount } from '@/utils/commonUtils';
import { formatDate } from '@/utils/myScrapUtils';
import Keywords from './Keywords';
import { Link } from 'react-router-dom';

export default function NewsCard({ news, isToday = false }: { news: News; isToday?: boolean }) {
  const { title, viewCount, createdAt } = news;
  const tags2 = ['달러 환산 코스피', '저가 매수세 유입', '코스피 지수'];

  return (
    <Link to={'/'} className={`flex flex-col ${isToday && 'desktop:flex-row desktop:gap-x-5'}`}>
      <div
        className={`mb-3 h-40 w-full rounded bg-gray-200 md:h-[164px] ${isToday && 'desktop:w-[396px]'}`}
        // src={thumbnailUrl}
        // alt={title + ' 이미지'}
      />
      <div>
        <div className='mb-1 flex items-center text-[10px] leading-120 text-custom-gray-500'>
          <span>조회수 {formatReadCount(viewCount)}</span>
          <div className='mx-2 h-2.5 w-[1px] bg-custom-gray-400' />
          <span>{formatDate(createdAt)}</span>
        </div>
        <p className='mb-2 font-bold text-custom-gray-dark'>{title}</p>
        <Keywords tags={tags2} withTooltip={isToday} />
      </div>
    </Link>
  );
}

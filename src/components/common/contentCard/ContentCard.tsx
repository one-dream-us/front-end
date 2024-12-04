import { ContentCardTypes } from '@/types/interface';
import KeywordTags from './KeywordTags';
import ScrapDateNCount from './ScrapDateNCount';

export default function ContentCard({
  date,
  description,
  scrapCount,
  keywords,
  thumbnailSrc,
  title,
}: ContentCardTypes) {
  return (
    <div className='desktop:block desktop:h-96 desktop:max-w-96 desktop:shrink-0 h-96 max-w-96 sm:block md:flex md:h-[200px] md:max-w-[720px] md:gap-x-4'>
      <img
        className='desktop:h-48 mb-5 h-48 w-full rounded-lg bg-custom-gray-light md:h-full'
        src={thumbnailSrc}
        alt='${title} 영상의 썸네일'
      />

      <div className='desktop:justify-start flex w-full flex-col items-start gap-y-2 sm:justify-start md:justify-between'>
        {/* tag */}
        <KeywordTags keywords={keywords} />

        {/* content title */}
        <h1 className='line-clamp-2 text-xl font-extrabold'>{title}</h1>

        {/* content desc */}
        <span className='line-clamp-2 text-sm'>{description}</span>

        {/* date */}
        <ScrapDateNCount date={date} scrapCount={scrapCount} />
      </div>
    </div>
  );
}

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
    <div className='h-96 max-w-96 sm:block md:flex md:h-[200px] md:max-w-[720px] md:gap-x-4 lg:block lg:h-96 lg:max-w-96 lg:shrink-0'>
      <img
        className='mb-5 h-48 w-full rounded-lg bg-custom-gray-light md:h-full lg:h-48'
        src={thumbnailSrc}
        alt='${title} 영상의 썸네일'
      />

      <div className='flex w-full flex-col items-start gap-y-2 sm:justify-start md:justify-between lg:justify-start'>
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

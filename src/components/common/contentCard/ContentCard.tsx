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
    <div className='h-96 max-w-96 sm:block md:flex md:h-[200px] md:max-w-[720px] md:gap-x-4 desktop:block desktop:h-96 desktop:max-w-96 desktop:shrink-0'>
      <img
        className='mb-5 w-full h-48 rounded-lg bg-custom-gray-light md:h-full desktop:h-48'
        src={thumbnailSrc}
        alt='${title} 영상의 썸네일'
      />

      <div className='flex flex-col gap-y-2 items-start w-full sm:justify-start md:justify-between desktop:justify-start'>
        {/* tag */}
        <KeywordTags tags={keywords} />

        {/* content title */}
        <h1 className='text-xl font-extrabold line-clamp-2'>{title}</h1>

        {/* content desc */}
        <span className='text-sm line-clamp-2'>{description}</span>

        {/* date */}
        <ScrapDateNCount date={date} scrapCount={scrapCount} />
      </div>
    </div>
  );
}

import KeywordTags from '../common/contentCard/KeywordTags';
import ScrapDateNCount from '../common/contentCard/ScrapDateNCount';
import ScrapAndShare from './ScrapAndShare';

export default function ContentOverview({
  reference,
  title,
  tags,
  viewCount,
  date,
  thumbnailUrl,
  summaryText,
}: {
  reference: string;
  title: string;
  tags: string[];
  viewCount: string;
  date: string;
  thumbnailUrl: string;
  summaryText: string;
}) {
  return (
    <div className='relative mb-6 mt-custom-video-md flex flex-col md:mt-[444px] desktop:mb-2 desktop:mt-10'>
      <KeywordTags tags={tags} />
      <h1 className='mb-2 max-w-[950px] text-[22px] font-medium leading-120 text-custom-black'>
        {title}
      </h1>
      <div className='mb-3 flex items-center justify-between desktop:w-[533px]'>
        <span className='text-xs whitespace-nowrap leading-120 text-custom-gray-dark'>
          {reference}
        </span>
        <ScrapDateNCount date={date} scrapCount={viewCount} />
      </div>
      <div className='desktop:absolute desktop:bottom-[34px] desktop:right-0'>
        <ScrapAndShare description={summaryText} img={thumbnailUrl} title={title} />
      </div>
    </div>
  );
}

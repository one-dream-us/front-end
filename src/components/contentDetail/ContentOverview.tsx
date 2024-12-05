import KeywordTags from '../common/contentCard/KeywordTags';
import ScrapDateNCount from '../common/contentCard/ScrapDateNCount';
import ScrapAndShare from './ScrapAndShare';

export default function ContentOverview({
  reference,
  title,
  tags,
  scrapCount,
  contentId,
  date,
}: {
  reference: string;
  title: string;
  tags: string[];
  scrapCount: string;
  contentId: number;
  date: string;
}) {
  return (
    <div className='relative mb-6 mt-custom-video-md flex flex-col gap-y-2 md:mt-[444px] desktop:mb-5 desktop:mt-10'>
      <KeywordTags tags={tags} />
      <div className='flex justify-between items-center'>
        <h1 className='text-[22px] font-bold'>{title}</h1>
        <div className='absolute right-0 -bottom-2 md:static'>
          <ScrapAndShare contentId={contentId} />
        </div>
      </div>
      <div className='desktop:flex desktop:w-[533px] desktop:justify-between'>
        <span className='hidden text-xs whitespace-nowrap desktop:block'>{reference}</span>
        <ScrapDateNCount date={date} scrapCount={scrapCount} />
      </div>
    </div>
  );
}

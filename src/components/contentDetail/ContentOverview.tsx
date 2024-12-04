import KeywordTags from '../common/contentCard/KeywordTags';
import ScrapDateNCount from '../common/contentCard/ScrapDateNCount';
import ScrapAndShare from './ScrapAndShare';

const keywords = [
  { id: 0, title: '종목추천' },
  { id: 1, title: '성장주' },
  { id: 2, title: '주식분석' },
];
const title = '올해만 544% 상승한 지구상에서 가장 뜨거운 주식';
const date = '2024.11.27';
const scrapCount = 1024;
const contentId = 1;

export default function ContentOverview({ reference }: { reference: string }) {
  return (
    <div className='relative mb-6 mt-custom-video-md flex flex-col gap-y-2 md:mt-[444px] desktop:mb-5 desktop:mt-10'>
      <KeywordTags keywords={keywords} />
      <div className='flex items-center justify-between'>
        <h1 className='text-[22px] font-bold'>{title}</h1>
        <div className='absolute -bottom-2 right-0 md:static'>
          <ScrapAndShare contentId={contentId} />
        </div>
      </div>
      <div className='desktop:flex desktop:w-[533px] desktop:justify-between'>
        <span className='hidden whitespace-nowrap text-xs desktop:block'>{reference}</span>
        <ScrapDateNCount date={date} scrapCount={scrapCount} />
      </div>
    </div>
  );
}

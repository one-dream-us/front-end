import Thumbnail from './Thumbnail';
import KeywordTags from './KeywordTags';
import ScrapInfo from './ScrapInfo';
import { ScrapedContentData } from '@/types/interface';
import { useAllScrapedIds } from '@/hooks/myScrap/useAllScrapedIds';
import useScrapedContents from '@/hooks/myScrap/useScrapedContents';
import ScrapedItemModals from '../ScrapItemModals';

export default function ScrapedContents({ scrapedItems }: { scrapedItems: ScrapedContentData[] }) {
  useAllScrapedIds(scrapedItems);
  const { refetch } = useScrapedContents();

  return (
    <div className='flex min-h-[336px] flex-col justify-center gap-y-5'>
      {scrapedItems.map((item) => (
        <article key={item.id} className='flex h-[94px] gap-x-2.5'>
          <Thumbnail src={item.thumbnailSrc} alt={item.title} id={item.id} />
          <div className='flex w-[165px] flex-col gap-y-1'>
            <KeywordTags keywords={item.keywords} />
            <p className='h-[52px] text-sm font-bold'>{item.title}</p>
            <ScrapInfo date={item.date} />
          </div>
        </article>
      ))}
      <ScrapedItemModals itemName='스크랩' refetch={refetch} />
    </div>
  );
}

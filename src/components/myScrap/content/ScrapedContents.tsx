import Thumbnail from './Thumbnail';
import ScrapInfo from './ScrapInfo';
import EmptyState from '../EmptyState';
import { useAllScrapedIds } from '@/hooks/myScrap/useAllScrapedIds';
import useScrapedContents from '@/hooks/scrap/useScrapedContents';
import ScrapedItemModals from '../ScrapItemModals';
import { myScrapMenu } from '@/types/types';
import { ScrapedContentData } from '@/types/interface';
import { formatDate } from '@/utils/myScrapUtils';

export default function ScrapedContents({ activeMenu }: { activeMenu: myScrapMenu }) {
  const { scrapedContents = [], isLoading } = useScrapedContents();
  useAllScrapedIds(scrapedContents);

  if (isLoading || scrapedContents.length > 0) {
    return <EmptyState activeMenu={activeMenu} />;
  }

  // return (
  //   <div className='flex flex-col gap-y-5 justify-center'>
  //     {scrapedContents.map(({ scrapId, content }: ScrapedContentData) => (
  //       <article key={scrapId} className='flex h-[94px] gap-x-2.5'>
  //         <Thumbnail src={content.thumbnailUrl} alt={content.title} id={scrapId} />
  //         <div className='flex w-[165px] flex-col justify-center gap-y-1'>
  //           <p className='h-[52px] text-sm font-bold'>{content.title}</p>
  //           <ScrapInfo date={formatDate(content.createdAt)} />
  //         </div>
  //       </article>
  //     ))}
  //     <ScrapedItemModals itemName='콘텐츠' />
  //   </div>
  // );
}

import { ScrapedTermData } from '@/types/interface';
import { useState } from 'react';
import useScrapedTerms from '@/hooks/myScrap/useScrapedTerms';
import { useAllScrapedIds } from '@/hooks/myScrap/useAllScrapedIds';
import ScrapedItemModals from '../ScrapItemModals';
import ScrapedTermCard from './ScrapedTermCard';
import EditSection from '../edit/EditSection';
import PlayImgBtn from './PlayImgBtn';

export default function ScrapedTerms({ termsList }: { termsList: ScrapedTermData[] }) {
  const { scrapedTerms, isLoading } = useScrapedTerms();
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  useAllScrapedIds(scrapedTerms);

  if (isLoading) {
    return <div />;
  }

  return (
    <div className='mb-[60px] flex w-full flex-col desktop:ml-auto desktop:w-[811px]'>
      {termsList.length > 0 && <EditSection />}
      <div className='mt-3 flex w-full flex-col justify-center gap-y-3 md:mt-5'>
        {termsList.map((item: ScrapedTermData) => {
          const isExpanded = expandedItems[item.scrapId];
          return (
            <div className='md:flex md:justify-center md:gap-x-5' key={item.scrapId}>
              <ScrapedTermCard
                isExpanded={isExpanded}
                setExpandedItems={setExpandedItems}
                detail={item}
              />
              <PlayImgBtn contentId={item.contentId} dictionaryId={item.dictionaryId} />
            </div>
          );
        })}
        <ScrapedItemModals activeMenu='단어장' />
      </div>
    </div>
  );
}

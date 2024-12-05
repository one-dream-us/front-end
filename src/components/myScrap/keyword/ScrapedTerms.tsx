import { ScrapedTermData } from '@/types/interface';
import { useState } from 'react';
import useScrapedTerms from '@/hooks/myScrap/useScrapedTerms';
import { useAllScrapedIds } from '@/hooks/myScrap/useAllScrapedIds';
import ScrapedItemModals from '../ScrapItemModals';
import ScrapedTermCard from './ScrapedTermCard';
import EmptyState from '../EmptyState';
import { myScrapMenu } from '@/types/types';

export default function ScrapedTerms({ activeMenu }: { activeMenu: myScrapMenu }) {
  const { scrapedTerms, isLoading } = useScrapedTerms();
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  useAllScrapedIds(scrapedTerms);

  if (isLoading || scrapedTerms.length === 0) {
    return <EmptyState activeMenu={activeMenu} />;
  }

  return (
    <div className='flex flex-col justify-center gap-y-4'>
      {scrapedTerms.map((item: ScrapedTermData) => {
        const isExpanded = expandedItems[item.scrapId];
        return (
          <ScrapedTermCard
            key={item.scrapId}
            isExpanded={isExpanded}
            setExpandedItems={setExpandedItems}
            id={item.scrapId}
            term={item.dictionary.term}
            definition={item.dictionary.details}
          />
        );
      })}
      <ScrapedItemModals itemName='단어장' />
    </div>
  );
}

import { ScrapedTermData } from '@/types/interface';
import { useState } from 'react';
import useScrapedTerms from '@/hooks/myScrap/useScrapedTerms';
import { useAllScrapedIds } from '@/hooks/myScrap/useAllScrapedIds';
import ScrapedItemModals from '../ScrapItemModals';
import ScrapedTermCard from './ScrapedTermCard';

export default function ScrapedTerms({ scrapedItems }: { scrapedItems: ScrapedTermData[] }) {
  useAllScrapedIds(scrapedItems);
  const { refetch } = useScrapedTerms();
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  return (
    <div className='flex min-h-[336px] flex-col justify-center gap-y-4'>
      {scrapedItems.map((item) => {
        const isExpanded = expandedItems[item.id];
        return (
          <ScrapedTermCard
            key={item.id}
            isExpanded={isExpanded}
            setExpandedItems={setExpandedItems}
            id={item.id}
            term={item.term}
            definition={item.definition}
          />
        );
      })}
      <ScrapedItemModals itemName='단어장' refetch={refetch} />
    </div>
  );
}

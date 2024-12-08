import { ScrapedTermData } from '@/types/interface';
import { useState, useEffect } from 'react';
import useScrapedTerms from '@/hooks/myScrap/useScrapedTerms';
import { useAllScrapedIds } from '@/hooks/myScrap/useAllScrapedIds';
import ScrapedItemModals from '../ScrapItemModals';
import ScrapedTermCard from './ScrapedTermCard';
import EditSection from '../edit/EditSection';
import { Link } from 'react-router-dom';
import useMyScrapStore from '@/store/useMyScrapStore';

export default function ScrapedTerms() {
  const { scrapedTerms, isLoading } = useScrapedTerms();
  const [termsList, setTermsList] = useState(scrapedTerms);
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const isEditing = useMyScrapStore((state) => state.isEditing);

  useEffect(() => {
    if (scrapedTerms) {
      setTermsList(scrapedTerms);
    }
  }, [scrapedTerms]);

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
                id={item.scrapId}
                term={item.term}
                definition={item.details}
              />
              <Link
                to={`/content/${item.contentId}`}
                className='hidden md:block'
                aria-label='영상 보러가기 아이콘'
                style={{
                  pointerEvents: isEditing ? 'none' : 'auto',
                }}
              >
                <div
                  className={`h-[118px] w-[69px] bg-play transition ${isEditing ? 'pointer-events-none cursor-not-allowed bg-play-disabled hover:bg-play-disabled' : 'bg-play hover:bg-play-hover'}`}
                />
              </Link>
            </div>
          );
        })}
        <ScrapedItemModals activeMenu='단어장' />
      </div>
    </div>
  );
}

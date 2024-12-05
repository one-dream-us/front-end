import useMyScrapStore from './useMyScrapStore';
import { useEffect } from 'react';
import { ScrapedContentData, ScrapedTermData } from '@/types/interface';

export function useAllScrapedIds(scrapedItems: ScrapedContentData[] | ScrapedTermData[]) {
  const setAllIdList = useMyScrapStore((state) => state.setAllIdList);

  useEffect(() => {
    const ids = scrapedItems.map((item) => item.scrapId);
    setAllIdList(ids);
  }, [scrapedItems]);
}

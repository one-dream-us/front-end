import { useSetAtom } from 'jotai';
import { allIdListAtom } from '@/store/atom';
import { useEffect } from 'react';
import { ScrapedContentData, ScrapedTermData } from '@/types/interface';

export function useAllScrapedIds(scrapedItems: ScrapedContentData[] | ScrapedTermData[]) {
  const setAllIdList = useSetAtom(allIdListAtom);

  useEffect(() => {
    const ids = scrapedItems.map((item) => item.id);
    setAllIdList(ids);
  }, [scrapedItems]);
}

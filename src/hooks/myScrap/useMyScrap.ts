import { myScrapMenu } from '@/types/types';
import { useState } from 'react';
import { MenuItems } from '@/constants/constants';
import useScrapedContents from '../scrap/useScrapedContents';
import useScrapedTerms from './useScrapedTerms';

export default function useMyScrap() {
  const [activeMenu, setActiveMenu] = useState<myScrapMenu>(MenuItems[0]);
  const { scrapedContents, isLoading: contentsLoading } = useScrapedContents();
  const { scrapedTerms, isLoading: termsLoading } = useScrapedTerms();

  return {
    activeMenu,
    setActiveMenu,
    contentList: scrapedContents,
    termsList: scrapedTerms,
    isLoading: contentsLoading && termsLoading,
  };
}

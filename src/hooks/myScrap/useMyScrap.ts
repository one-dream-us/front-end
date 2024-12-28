import { myScrapMenu } from '@/types/types';
import { useState } from 'react';
import { MenuItems } from '@/constants';
import useScrapedContents from '../scrap/useScrapedContents';
import useScrapedTerms from './useScrapedTerms';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useMyScrap() {
  const [activeMenu, setActiveMenu] = useState<myScrapMenu>(MenuItems[0]);
  const { isLogin } = useLoginStore((state) => state);
  const { scrapedContents, isLoading: contentsLoading } = useScrapedContents(isLogin);
  const { scrapedTerms, isLoading: termsLoading } = useScrapedTerms(isLogin);

  return {
    activeMenu,
    setActiveMenu,
    contentList: scrapedContents,
    termsList: scrapedTerms,
    isLoading: contentsLoading && termsLoading,
  };
}

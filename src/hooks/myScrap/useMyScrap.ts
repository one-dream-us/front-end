import { myScrapMenu } from '@/types/types';
import { useState, useEffect } from 'react';
import { MenuItems } from '@/constants';
import useScrapedContents from '../scrap/useScrapedContents';
import useScrapedTerms from './useScrapedTerms';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useMyScrap() {
  const [activeMenu, setActiveMenu] = useState<myScrapMenu>(MenuItems[0]);
  const { isLogin } = useLoginStore((state) => state);
  const { scrapedContents, isLoading: contentsLoading } = useScrapedContents();
  const [contentList, setContentList] = useState([]);
  const { scrapedTerms, isLoading: termsLoading } = useScrapedTerms();
  const [termsList, setTermsList] = useState([]);

  useEffect(() => {
    if (
      isLogin &&
      scrapedContents &&
      JSON.stringify(scrapedContents) !== JSON.stringify(contentList)
    ) {
      setContentList(scrapedContents);
    }
  }, [isLogin, scrapedContents]);

  useEffect(() => {
    if (isLogin && scrapedTerms && JSON.stringify(scrapedTerms) !== JSON.stringify(termsList)) {
      setTermsList(scrapedTerms);
    }
  }, [isLogin, scrapedTerms]);

  return {
    activeMenu,
    setActiveMenu,
    contentList: isLogin ? contentList : [],
    termsList: isLogin ? termsList : [],
    isLoading: contentsLoading && termsLoading,
  };
}

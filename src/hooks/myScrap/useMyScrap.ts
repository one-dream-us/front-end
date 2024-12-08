import { myScrapMenu } from '@/types/types';
import { useState, useEffect } from 'react';
import { MenuItems } from '@/constants';
import useScrapedContents from '../scrap/useScrapedContents';
import useScrapedTerms from './useScrapedTerms';

export default function useMyScrap() {
  const [activeMenu, setActiveMenu] = useState<myScrapMenu>(MenuItems[0]);
  const { scrapedContents } = useScrapedContents();
  const [contentList, setContentList] = useState([]);
  const { scrapedTerms } = useScrapedTerms();
  const [termsList, setTermsList] = useState([]);

  useEffect(() => {
    if (scrapedContents && scrapedContents !== contentList) {
      setContentList(scrapedContents);
    }
  }, [scrapedContents, contentList]);

  useEffect(() => {
    if (scrapedTerms && scrapedTerms !== termsList) {
      setTermsList(scrapedTerms);
    }
  }, [scrapedTerms, termsList]);

  return {
    activeMenu,
    setActiveMenu,
    contentList,
    termsList,
  };
}

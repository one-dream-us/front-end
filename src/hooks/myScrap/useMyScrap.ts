import { myScrapMenu } from '@/types/types';
import { useState, useEffect } from 'react';
import { MenuItems } from '@/constants';
import scrapApi from '@/services/scrapApi';
import { useQuery } from '@tanstack/react-query';

export default function useMyScrap() {
  const [activeMenu, setActiveMenu] = useState<myScrapMenu>(MenuItems[0]);

  const [termsCount, setTermsCount] = useState(0);
  const [contentsCount, setContentsCount] = useState(0);

  const {
    data: termsData,
    refetch: refetchTerms,
    isLoading: isLoadingTerms,
  } = useQuery({
    queryKey: ['termsCount'],
    queryFn: scrapApi.getTermsCnt,
  });

  const {
    data: contentsData,
    refetch: refetchContents,
    isLoading: isLoadingContents,
  } = useQuery({
    queryKey: ['contentsCount'],
    queryFn: scrapApi.getContentsCnt,
  });

  useEffect(() => {
    if (termsData) {
      setTermsCount(termsData?.dictionaryScrapCnt || 0);
    }
  }, [termsData]);

  useEffect(() => {
    if (contentsData) {
      setContentsCount(contentsData?.contentScrapCnt || 0);
    }
  }, [contentsData]);

  const refetch = () => {
    refetchContents();
    refetchTerms();
  };

  return {
    activeMenu,
    setActiveMenu,
    termsCount,
    contentsCount,
    refetch,
    isLoadingTerms,
    isLoadingContents,
  };
}

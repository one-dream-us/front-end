import { useState, useEffect } from 'react';
import useAddScrap from '@/hooks/contentDetail/useAddScrap';
import useScrapedContents from '@/hooks/scrap/useScrapedContents';
import useDeleteScrapCon from '@/hooks/myScrap/useDeleteScrapCon';
import useScrappedConStore from '@/store/useScrappedConStore';
import useToastStore from '@/store/useToastStore';
import { ScrapedContentData } from '@/types/interface';
import useContentStore from '@/store/useContentStore';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useScrapAndShare() {
  const contentId = useContentStore((state) => state.contentId);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const isLogin = useLoginStore((state) => state.isLogin);

  if (!isLogin) {
    return {
      isShareModalOpen,
      setIsShareModalOpen,
      toggleScrap: () => {},
      isScrapped: false,
    };
  }

  const { scrapedContents } = useScrapedContents();
  const isScrapped = useScrappedConStore((state) => state.isScrapped);
  const setIsScrapped = useScrappedConStore((state) => state.setIsScrapped);
  const { addScrapContent } = useAddScrap(contentId);

  useEffect(() => {
    const isAlreadyScrapped = scrapedContents.some(
      (scrap: ScrapedContentData) => scrap.content.id === contentId,
    );
    setIsScrapped(isAlreadyScrapped);
  }, [scrapedContents, contentId, setIsScrapped]);

  const scrapId = isScrapped
    ? scrapedContents.find((scrap: ScrapedContentData) => scrap.content.id === contentId)?.scrapId
    : null;

  const { deleteScrapContent } = useDeleteScrapCon({ selectedIdList: scrapId ? [scrapId] : [] });
  const showToast = useToastStore((state) => state.showToast);

  const toggleScrap = () => {
    if (!isLogin) {
      return;
    }
    if (isScrapped) {
      deleteScrapContent();
      showToast('콘텐츠 스크랩이 삭제되었어요.', 'deleteScrap');
    } else {
      addScrapContent();
      showToast('‘MY 스크랩 > 콘텐츠’에 담았어요.', 'addScrap');
    }
  };

  return {
    isShareModalOpen,
    setIsShareModalOpen,
    toggleScrap,
    isScrapped,
  };
}

import { useState, useEffect } from 'react';
import useAddScrap from '@/hooks/contentDetail/api/useAddScrap';
import useScrapedContents from '@/hooks/scrap/useScrapedContents';
import useDeleteScrapCon from '@/hooks/myScrap/useDeleteScrapCon';
import useScrappedConStore from '@/store/useScrappedConStore';
import useToastStore from '@/store/useToastStore';
import { ScrapedContentData } from '@/types/interface';
import { useAuthCheckQuery } from '../auth/useAuthCheckQuery';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';

export default function useScrapAndShare(contentId: number) {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const { isLoading, data } = useAuthCheckQuery();
  const showToast = useToastStore((state) => state.showToast);
  const { scrapedContents } = data ? useScrapedContents() : { scrapedContents: [] };
  const { addScrapContent } =
    data && !isLoading ? useAddScrap(contentId) : { addScrapContent: () => {} };
  const isScrapped = useScrappedConStore((state) => state.isScrapped);
  const setIsScrapped = useScrappedConStore((state) => state.setIsScrapped);
  const { setIsOpen, setIsNavigate } = useLoginConfirmModalState();

  useEffect(() => {
    if (!data) return;

    const isAlreadyScrapped = scrapedContents.some(
      (scrap: ScrapedContentData) => scrap.contentId === contentId,
    );
    setIsScrapped(isAlreadyScrapped);
  }, [scrapedContents, contentId, setIsScrapped, data]);

  const scrapId = isScrapped
    ? scrapedContents.find((scrap: ScrapedContentData) => scrap.contentId === contentId)?.scrapId
    : null;

  const { deleteScrapContent } =
    data && !isLoading
      ? useDeleteScrapCon({
          selectedIdList: scrapId ? [scrapId] : [],
        })
      : { deleteScrapContent: () => {} };

  const toggleScrap = () => {
    if (!data || isLoading) {
      setIsOpen(true);
      setIsNavigate(false);
      return;
    }

    if (isScrapped) {
      deleteScrapContent();
      showToast('스크랩이 취소되었어요.', 'deleteScrap');
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

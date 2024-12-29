import { useState, useEffect } from 'react';
import useAddScrap from '@/hooks/contentDetail/api/useAddScrap';
import useScrapedContents from '@/hooks/scrap/useScrapedContents';
import useDeleteScrapCon from '@/hooks/myScrap/useDeleteScrapCon';
import useScrappedConStore from '@/store/useScrappedConStore';
import useToastStore from '@/store/useToastStore';
import { ScrapedContentData } from '@/types/interface';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import useContentStore from '@/store/useContentStore';
import useTooltipStore from '@/store/useTooltipStore';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useScrapAndShare() {
  const contentId = useContentStore((state) => state.contentId);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const showToast = useToastStore((state) => state.showToast);
  const { scrapedContents } = useScrapedContents();
  const { addScrapContent } = useAddScrap(contentId);
  const isScrapped = useScrappedConStore((state) => state.isScrapped);
  const setIsScrapped = useScrappedConStore((state) => state.setIsScrapped);
  const { isLogin } = useLoginStore();
  const { setIsOpen, setIsNavigate } = useLoginConfirmModalState();
  const { tooltip, setTooltip } = useTooltipStore();

  useEffect(() => {
    const isAlreadyScrapped = scrapedContents.some(
      (scrap: ScrapedContentData) => scrap.contentId === contentId,
    );
    setIsScrapped(isAlreadyScrapped);
  }, [scrapedContents, contentId, setIsScrapped]);

  const scrapId = isScrapped
    ? scrapedContents.find((scrap: ScrapedContentData) => scrap.contentId === contentId)?.scrapId
    : null;

  const { deleteScrapContent } = useDeleteScrapCon({
    selectedIdList: scrapId ? [scrapId] : [],
  });

  const toggleScrap = () => {
    if (!isLogin) {
      setIsOpen(true);
      setIsNavigate(false);
    } else if (isScrapped) {
      deleteScrapContent();
      showToast('스크랩이 취소되었어요.', 'deleteScrap');
    } else {
      addScrapContent();
      showToast('‘MY 스크랩 > 콘텐츠’에 담았어요.', 'addScrap');
    }
  };

  return {
    contentId,
    isShareModalOpen,
    setIsShareModalOpen,
    tooltip,
    setTooltip,
    toggleScrap,
    isScrapped,
  };
}

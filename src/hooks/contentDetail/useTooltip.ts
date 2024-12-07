import useAddTerm from '@/hooks/contentDetail/useAddTerm';
import useDeleteScrapTerm from '@/hooks/myScrap/useDeleteScrapTerm';
import useContentDetails from '@/hooks/contentDetail/useContentDetails';
import useContentStore from '@/store/useContentStore';
import useScrappedStore from '@/store/useScrappedStore';
import { Dictionary } from '@/types/interface';
import { useState } from 'react';
import useToastStore from '@/store/useToastStore';
import { useLoginStore } from '@/store/useIsLoginStore';
import useLoginModalStore from '@/store/useLoginModalStore';

export default function useTooltip(
  dictionary: Dictionary,
  setTooltip: (value: { content: string; x: number; y: number; index: number | null }) => void,
) {
  const scrappedData = useScrappedStore((state) => state.scrappedData);
  const showToast = useToastStore((state) => state.showToast);
  const isLogin = useLoginStore((state) => state.isLogin);
  const setIsLoginModalOpen = useLoginModalStore((state) => state.setIsLoginModalOpen);

  const [isScrapped, setIsScrapped] = useState(
    scrappedData.find((item) => item.dictionaryId === dictionary.id)?.scrapped ?? false,
  );

  const addScrapTerm = isLogin ? useAddTerm(dictionary.id).addScrapTerm : null;
  const reloadContentDetails = isLogin
    ? useContentDetails(useContentStore().contentId).reloadContentDetails
    : null;
  const deleteScrapTerm = isLogin
    ? useDeleteScrapTerm({
        selectedIdList: scrappedData.find((item) => item.dictionaryId === dictionary.id)
          ?.dictionaryScrapId
          ? [
              scrappedData.find((item) => item.dictionaryId === dictionary.id)?.dictionaryScrapId,
            ].filter((id): id is number => id != null)
          : [],
      }).deleteScrapTerm
    : null;

  const handleScrapClick = async () => {
    if (!isLogin) {
      setIsLoginModalOpen(true);
      return;
    }

    if (isScrapped) {
      deleteScrapTerm?.();
      setTooltip({ content: '', x: 0, y: 0, index: null });
      showToast('스크랩이 취소되었어요.', 'deleteTerm');
    } else {
      addScrapTerm?.();
      setTooltip({ content: '', x: 0, y: 0, index: null });
      showToast('‘MY 스크랩 > 단어장’에 담았어요.', 'addTerm');
    }

    setIsScrapped(!isScrapped);
    reloadContentDetails?.();
  };

  return {
    isScrapped,
    handleScrapClick,
  };
}

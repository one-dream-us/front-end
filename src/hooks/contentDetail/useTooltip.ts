import useAddTerm from '@/hooks/contentDetail/useAddTerm';
import useDeleteScrapTerm from '@/hooks/myScrap/useDeleteScrapTerm';
import useContentDetails from '@/hooks/contentDetail/useContentDetails';
import useScrappedStore from '@/store/useScrappedStore';
import { Dictionary } from '@/types/interface';
import { useState } from 'react';
import useToastStore from '@/store/useToastStore';
import useContentStore from '@/store/useContentStore';
import { useAuthCheckQuery } from '../auth/useAuthCheckQuery';
import useLoginModalStore from '@/store/useLoginModalStore';

export default function useTooltip(
  dictionary: Dictionary,
  setTooltip: (value: {
    content: string;
    term: string;
    x: number;
    y: number;
    index: number | null;
  }) => void,
) {
  const scrappedData = useScrappedStore((state) => state.scrappedData);
  const showToast = useToastStore((state) => state.showToast);
  const contentId = useContentStore((state) => state.contentId);
  const { isLoading, data } = useAuthCheckQuery();
  const [isScrapped, setIsScrapped] = useState(
    scrappedData.find((item) => item.dictionaryId === dictionary.id)?.scrapped ?? false,
  );
  console.log(isScrapped);
  const addScrapTerm =
    data && !isLoading ? useAddTerm(dictionary.id, contentId).addScrapTerm : () => {};
  const foundItem = scrappedData.find((item) => item.dictionaryId === dictionary.id);
  const id = foundItem?.dictionaryScrapId;
  const selectedIdList = id !== undefined && id !== null ? [id] : [];
  const deleteScrapTerm =
    data && !isLoading ? useDeleteScrapTerm({ selectedIdList }).deleteScrapTerm : () => {};

  const reloadContentDetails = useContentDetails(contentId).reloadContentDetails;
  const setIsLoginModalOpen = useLoginModalStore((state) => state.setIsLoginModalOpen);
  const handleScrapClick = async () => {
    if (!data || isLoading) {
      setIsLoginModalOpen(true);
      return;
    }

    if (isScrapped) {
      deleteScrapTerm?.();
      setTooltip({ content: '', term: '', x: 0, y: 0, index: null });
      showToast('스크랩이 취소되었어요.', 'deleteTerm');
    } else {
      addScrapTerm?.();
      setTooltip({ content: '', term: '', x: 0, y: 0, index: null });
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

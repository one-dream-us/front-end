import useAddTerm from '@/hooks/contentDetail/api/useAddTerm';
import useDeleteScrapTerm from '@/hooks/myScrap/useDeleteScrapTerm';
import useContentDetails from '@/hooks/contentDetail/api/useContentDetails';
import useScrappedStore from '@/store/useScrappedStore';
import { Dictionary } from '@/types/interface';
import useToastStore from '@/store/useToastStore';
import useContentStore from '@/store/useContentStore';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import { useLoginStore } from '@/store/useIsLoginStore';

export default function useTooltip(
  dictionary: Dictionary,
  setTooltip: (value: {
    content: string;
    term: string;
    isScrapped: boolean;
    index: number | null;
  }) => void,
) {
  const scrappedData = useScrappedStore((state) => state.scrappedData);
  const showToast = useToastStore((state) => state.showToast);
  const contentId = useContentStore((state) => state.contentId);

  const foundItem = scrappedData.find((item) => item.dictionaryId === dictionary.id);
  const isScrapped = foundItem?.scrapped;

  const addScrapTerm = useAddTerm(dictionary.id, contentId).addScrapTerm;
  const id = foundItem?.dictionaryScrapId;
  const selectedIdList = id !== undefined && id !== null ? [id] : [];
  const deleteScrapTerm = useDeleteScrapTerm({ selectedIdList }).deleteScrapTerm;

  const reloadContentDetails = useContentDetails(contentId).reloadContentDetails;
  const { setIsNavigate, setIsOpen } = useLoginConfirmModalState();
  const { isLogin } = useLoginStore();

  const handleScrapClick = async () => {
    if (!isLogin) {
      setIsOpen(true);
      setIsNavigate(false);
      return;
    } else if (isScrapped) {
      deleteScrapTerm?.();
      setTooltip({ content: '', term: '', isScrapped: false, index: null });
      showToast('스크랩이 취소되었어요.', 'deleteTerm');
    } else {
      addScrapTerm?.();
      setTooltip({ content: '', term: '', isScrapped: false, index: null });
      showToast('‘MY 스크랩 > 단어장’에 담았어요.', 'addTerm');
    }

    reloadContentDetails?.();
  };

  return {
    isScrapped,
    handleScrapClick,
  };
}

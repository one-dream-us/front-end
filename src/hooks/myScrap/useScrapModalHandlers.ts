import useMyScrapStore from '@/store/useMyScrapStore';
import useDeleteScrapCon from '@/hooks/myScrap/useDeleteScrapCon';
import useDeleteScrapTerm from '@/hooks/myScrap/useDeleteScrapTerm';
import { myScrapMenu } from '@/types/types';
import useToastStore from '@/store/useToastStore';
import { useAuthCheckQuery } from '../auth/useAuthCheckQuery';

const useScrapModalHandlers = (activeMenu: myScrapMenu) => {
  const isDelModalOpen = useMyScrapStore((state) => state.isDelModalOpen);
  const setIsDelModalOpen = useMyScrapStore((state) => state.setIsDelModalOpen);
  const selectedIdList = useMyScrapStore((state) => state.selectedIdList);
  const setIsEditing = useMyScrapStore((state) => state.setIsEditing);
  const showToast = useToastStore((state) => state.showToast);
  const { isLoading, data } = useAuthCheckQuery();

  const { deleteScrapContent } = useDeleteScrapCon({
    selectedIdList,
  });

  const { deleteScrapTerm } = useDeleteScrapTerm({
    selectedIdList,
  });

  const handleDeleteAction = (activeMenu: myScrapMenu) => {
    setIsDelModalOpen(false);
    if (!data || isLoading) {
      return;
    }

    if (activeMenu === '단어장') {
      deleteScrapTerm();
      showToast('단어가 삭제되었어요.', 'deleteTerm');
    } else {
      deleteScrapContent();
      showToast('콘텐츠가 삭제되었어요.', 'deleteScrap');
    }
    setIsEditing(false);
  };

  return {
    isDelModalOpen,
    setIsDelModalOpen,
    handleDeleteAction,
    activeMenu,
  };
};

export default useScrapModalHandlers;

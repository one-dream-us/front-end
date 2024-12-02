import useMyScrapStore from '@/hooks/myScrap/useMyScrapStore';
import useDeleteScrapCon from '@/hooks/myScrap/useDeleteScrapCon';
import useDeleteScrapTerm from '@/hooks/myScrap/useDeleteScrapTerm';
import { myScrapMenu } from '@/types/types';
import { handleDelete } from '@/handlers/myScrap/handleDelete';

const useScrapModalHandlers = (itemName: myScrapMenu, refetch: () => void) => {
  const isDelModalOpen = useMyScrapStore((state) => state.isDelModalOpen);
  const setIsDelModalOpen = useMyScrapStore((state) => state.setIsDelModalOpen);
  const isComModalOpen = useMyScrapStore((state) => state.isComModalOpen);
  const setIsComModalOpen = useMyScrapStore((state) => state.setIsComModalOpen);
  const selectedIdList = useMyScrapStore((state) => state.selectedIdList);

  const { deleteScrapContent } = useDeleteScrapCon({
    selectedIdList,
    refetch,
  });

  const { deleteScrapTerm } = useDeleteScrapTerm({
    selectedIdList,
    refetch,
  });

  const handleDeleteAction = () => {
    handleDelete(itemName, deleteScrapContent, deleteScrapTerm);
    setIsDelModalOpen(false);
    setIsComModalOpen(true);
  };

  return {
    isDelModalOpen,
    setIsDelModalOpen,
    isComModalOpen,
    setIsComModalOpen,
    handleDeleteAction,
    itemName,
  };
};

export default useScrapModalHandlers;

import useMyScrapStore from '@/hooks/myScrap/useMyScrapStore';

const useSelectionControls = () => {
  const isAllChecked = useMyScrapStore((state) => state.isAllChecked);
  const setIsAllChecked = useMyScrapStore((state) => state.setIsAllChecked);

  const selectedIdList = useMyScrapStore((state) => state.selectedIdList);
  const setSelectedIdList = useMyScrapStore((state) => state.setSelectedIdList);

  const setIsEditing = useMyScrapStore((state) => state.setIsEditing);
  const allIdList = useMyScrapStore((state) => state.allIdList);

  const setIsDelModalOpen = useMyScrapStore((state) => state.setIsDelModalOpen);

  return {
    isAllChecked,
    setIsAllChecked,
    selectedIdList,
    setSelectedIdList,
    setIsEditing,
    allIdList,
    setIsDelModalOpen,
  };
};

export default useSelectionControls;

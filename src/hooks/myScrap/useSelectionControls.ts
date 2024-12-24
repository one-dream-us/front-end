import useMyScrapStore from '@/store/useMyScrapStore';

const useSelectionControls = () => {
  const isAllChecked = useMyScrapStore((state) => state.isAllChecked);
  const setIsAllChecked = useMyScrapStore((state) => state.setIsAllChecked);

  const selectedIdList = useMyScrapStore((state) => state.selectedIdList);
  const setSelectedIdList = useMyScrapStore((state) => state.setSelectedIdList);
  const isEditing = useMyScrapStore((state) => state.isEditing);
  const setIsEditing = useMyScrapStore((state) => state.setIsEditing);
  const allIdList = useMyScrapStore((state) => state.allIdList);

  const setIsDelModalOpen = useMyScrapStore((state) => state.setIsDelModalOpen);

  return {
    isAllChecked,
    setIsAllChecked,
    selectedIdList,
    setSelectedIdList,
    isEditing,
    setIsEditing,
    allIdList,
    setIsDelModalOpen,
  };
};

export default useSelectionControls;

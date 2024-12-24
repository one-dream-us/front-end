import useMyScrapStore from '../../store/useMyScrapStore';

export function useSelectedIdList() {
  const selectedIdList = useMyScrapStore((state) => state.selectedIdList);
  const setSelectedIdList = useMyScrapStore((state) => state.setSelectedIdList);
  const allIdList = useMyScrapStore((state) => state.allIdList);
  const setIsAllChecked = useMyScrapStore((state) => state.setIsAllChecked);

  return {
    selectedIdList,
    setSelectedIdList,
    allIdList,
    setIsAllChecked,
  };
}

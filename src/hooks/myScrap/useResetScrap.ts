import useMyScrapStore from './useMyScrapStore';

export function useResetScrap() {
  const setSelectedIdList = useMyScrapStore((state) => state.setSelectedIdList);
  const setAllIdList = useMyScrapStore((state) => state.setAllIdList);
  const setIsAllChecked = useMyScrapStore((state) => state.setIsAllChecked);

  const reset = () => {
    setSelectedIdList([]);
    setAllIdList([]);
    setIsAllChecked(false);
  };

  return reset;
}

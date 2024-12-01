export function toggleExpandDef(
  id: number,
  setExpandedItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>,
) {
  setExpandedItems((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
}

export function reset(
  setSelectedIdList: React.Dispatch<React.SetStateAction<number[]>>,
  setAllIdList: React.Dispatch<React.SetStateAction<number[]>>,
  setIsAllChecked: React.Dispatch<React.SetStateAction<boolean>>,
) {
  setSelectedIdList([]);
  setAllIdList([]);
  setIsAllChecked(false);
}

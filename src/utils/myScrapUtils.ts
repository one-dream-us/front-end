export function toggleExpandDef(
  id: number,
  setExpandedItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>,
) {
  setExpandedItems((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
}

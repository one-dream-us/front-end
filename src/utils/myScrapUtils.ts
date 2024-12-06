export function toggleExpandDef(
  id: number,
  setExpandedItems: React.Dispatch<React.SetStateAction<Record<number, boolean>>>,
) {
  setExpandedItems((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}.${month}.${day}`;
  return formattedDate;
}

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
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
  };

  const formattedDate = new Intl.DateTimeFormat('ko-KR', options).format(date);
  const [year, month, day] = formattedDate.replace(/\./g, '').split(' ');

  return `${year}년 ${month}월 ${day}일`;
}

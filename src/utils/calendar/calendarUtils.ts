export const formatLabel = (label: string) => {
  if (!label) return;

  let [year, month] = label.split('년 ');
  month = month.replace('월', '').padStart(2, '0');
  return `${year}.${month}`;
};

export const compareDate = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (date < today) {
    return 'past';
  } else if (date > today) {
    return 'future';
  } else {
    return 'present';
  }
};

export const formatLabel = (label: string) => {
  if (!label) return '';

  const res = label.match(/\d+/g) as string[];
  return `${res[0]}.${res[1].padStart(2, '0')}`;
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

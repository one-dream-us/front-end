import { MissionStatus } from '@/types/interface';

export const formatLabel = (label: string) => {
  if (!label) return '';

  const res = label.match(/\d+/g) as string[];
  return `${res[0]}.${res[1].padStart(2, '0')}`;
};

export const compareDate = (date: Date, status: MissionStatus[]) => {
  if (!status || status.length === 0) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const classList = [];

  status.forEach((item) => {
    if (item.date.split('-')[2] !== String(date.getDate()).padStart(2, '0')) return;

    const checkList = Object.values(item.missionStatus);

    if (checkList.every((item) => item === true)) {
      // 체크리스트 (퀴즈, 뉴스)가 모두 true일 때
      classList.push('progress-full');
    } else if (checkList.some((item) => item === true)) {
      classList.push('progress-half');
    }
  });

  if (date < today) {
    classList.push('past');
  } else if (date > today) {
    classList.push('future');
  } else {
    classList.push('present');
  }

  return classList;
};

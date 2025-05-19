import { HandleBannerClickProps, HandleQBannerClickProps } from '@/types/interface';
import dayjs from 'dayjs';

export function handleBannerClick({
  index,
  isLogin,
  isFirstQuiz,
  keyNoteListLen,
  navigate,
  setIsOpen,
  setModalOpen,
  latestNewsId,
  setIsNavigate,
}: HandleBannerClickProps) {
  if (index === 0) {
    navigate(`/news/${latestNewsId}`);
  } else if (index === 1) {
    handleQuizBannerClick({
      isLogin,
      setIsOpen,
      keyNoteListLen,
      isFirstQuiz,
      navigate,
      setModalOpen,
      setIsNavigate,
    });
  } else {
    if (isLogin) navigate('/my-word-list?tab="HISTORY"');
    else setIsOpen(true);
  }
}

export function handleQuizBannerClick({
  isLogin,
  setIsOpen,
  keyNoteListLen,
  isFirstQuiz,
  navigate,
  setModalOpen,
  setIsNavigate,
}: HandleQBannerClickProps) {
  if (!isLogin) {
    setIsNavigate(false);
    setIsOpen(true);
  } else if (isLogin && keyNoteListLen < 3) {
    console.log(isFirstQuiz);
    if (isFirstQuiz) navigate('/quiz');
    else setModalOpen(true);
  } else if (isLogin && keyNoteListLen >= 3) navigate('/quiz');
}

export function getWeekOfMonth(date: dayjs.Dayjs) {
  const startOfMonth = date.startOf('month');
  const firstMonday =
    startOfMonth.day() === 1 ? startOfMonth : startOfMonth.add((8 - startOfMonth.day()) % 7, 'day');
  const diffDays = date.startOf('day').diff(firstMonday, 'day');

  return diffDays < 0 ? 1 : Math.floor(diffDays / 7) + 1;
}

export function getThisWeekDays(date: dayjs.Dayjs) {
  const dayOfWeek = date.day();
  const monday = dayOfWeek === 0 ? date.subtract(6, 'day') : date.subtract(dayOfWeek - 1, 'day');
  const days: dayjs.Dayjs[] = [];
  for (let i = 0; i < 7; i++) {
    days.push(monday.add(i, 'day'));
  }
  return days;
}

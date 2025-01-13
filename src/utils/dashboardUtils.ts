import { HandleBannerClickProps } from '@/types/interface';

export function handleBannerClick({
  index,
  isLogin,
  isFirstQuizAttempt,
  keyNoteListLen,
  navigate,
  setIsOpen,
  setModalOpen,
  setIsKeynote,
}: HandleBannerClickProps) {
  if (index === 0) {
    navigate('/'); // 오늘 업로드된 콘텐츠 페이지
  } else if (index === 1) {
    if (!isLogin) {
      setIsOpen(true);
    } else if (isLogin && keyNoteListLen < 3) {
      if (isFirstQuizAttempt) {
        navigate('/quiz');
      } else {
        setModalOpen(true);
        setIsKeynote(true);
      }
    }
  } else {
    if (isLogin) {
      navigate('/my-word-list?tab="scrap"');
    } else {
      setIsOpen(true);
    }
  }
}

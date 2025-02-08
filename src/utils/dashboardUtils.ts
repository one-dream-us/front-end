import { HandleBannerClickProps, HandleQBannerClickProps } from '@/types/interface';

export function handleBannerClick({
  index,
  isLogin,
  isFirstQuizAttempt,
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
      isFirstQuizAttempt,
      navigate,
      setModalOpen,
      setIsNavigate,
    });
  } else {
    if (isLogin) navigate('/my-word-list?tab="scrap"');
    else setIsOpen(true);
  }
}

export function handleQuizBannerClick({
  isLogin,
  setIsOpen,
  keyNoteListLen,
  isFirstQuizAttempt,
  navigate,
  setModalOpen,
  setIsNavigate,
}: HandleQBannerClickProps) {
  if (!isLogin) {
    setIsNavigate(false);
    setIsOpen(true);
  } else if (isLogin && keyNoteListLen < 3) {
    if (isFirstQuizAttempt) navigate('/quiz');
    else setModalOpen(true);
  } else if (isLogin && keyNoteListLen >= 3) navigate('/quiz');
}

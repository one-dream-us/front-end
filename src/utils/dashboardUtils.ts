import { HandleBannerClickProps, HandleQBannerClickProps } from '@/types/interface';

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

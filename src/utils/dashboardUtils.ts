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
}: HandleBannerClickProps) {
  if (index === 0) {
    navigate(`/newsPending/${latestNewsId}`);
  } else if (index === 1) {
    handleQuizBannerClick({
      isLogin,
      setIsOpen,
      keyNoteListLen,
      isFirstQuizAttempt,
      navigate,
      setModalOpen,
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
}: HandleQBannerClickProps) {
  if (!isLogin) {
    setIsOpen(true);
  } else if (isLogin && keyNoteListLen < 3) {
    if (isFirstQuizAttempt)
      navigate('/quiz'); //랜덤
    else setModalOpen(true);
  } else if (isLogin && keyNoteListLen >= 3) navigate('/quiz'); // 스크랩 기반
}

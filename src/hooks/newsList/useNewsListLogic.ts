import useNewsList from '../dashboard/useNewsList';
import useLatestNews from '../dashboard/useLatestNews';
import { useLoginStore } from '@/store/useIsLoginStore';
import { useNavigate } from 'react-router-dom';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import useGetWordListData from '../myWordList/api/useGetWordListData';
import useCheckFirstQuiz from '../dashboard/useCheckFirstQuiz';
import { useState } from 'react';

export default function useNewsListLogic() {
  const { newsList } = useNewsList(null, 10);
  const { latestNews } = useLatestNews();
  const { isLogin } = useLoginStore();
  const navigate = useNavigate();
  const { setIsOpen } = useLoginConfirmModalState();
  const { keyNoteListLen } = useGetWordListData('핵심노트');
  const { wordList } = useGetWordListData('스크랩');
  const isKeynote = keyNoteListLen < 3 && wordList.length >= 3;
  const { isFirstQuizAttempt } = useCheckFirstQuiz();
  const [modalOpen, setModalOpen] = useState(false);

  return {
    newsList,
    latestNews,
    isLogin,
    navigate,
    setIsOpen,
    isKeynote,
    keyNoteListLen,
    isFirstQuizAttempt,
    modalOpen,
    setModalOpen,
  };
}

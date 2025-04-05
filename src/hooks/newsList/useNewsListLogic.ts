import useNewsList from '../dashboard/useNewsList';
import useLatestNews from '../dashboard/useLatestNews';
import { useLoginStore } from '@/store/useIsLoginStore';
import { useNavigate } from 'react-router-dom';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import useGetWordListData from '../myWordList/api/useGetWordListData';
import useIsFirstQuiz from '../myWordList/api/useIsFirstQuiz';
import { useState, useEffect } from 'react';
import { News } from '@/types/interface';

export default function useNewsListLogic() {
  const [lastId, setLastId] = useState(null);
  const [newsList, setNewsList] = useState<News[]>([]);
  const { contents, hasNext, totalElements, nextCursor } = useNewsList(lastId, 10);
  const { latestNews } = useLatestNews();
  const { isLogin } = useLoginStore();
  const navigate = useNavigate();
  const { setIsOpen, setIsNavigate } = useLoginConfirmModalState();
  const { keyNoteListLen } = useGetWordListData('북마크');
  const { isFirstQuiz } = useIsFirstQuiz();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (contents) {
      setNewsList((prevNewsList) => [...prevNewsList, ...contents]);
    }
  }, [contents]);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 200;

      if (nearBottom && hasNext) {
        setLastId(nextCursor);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [newsList, hasNext, nextCursor]);

  return {
    newsList,
    latestNews,
    isLogin,
    navigate,
    setIsOpen,
    keyNoteListLen,
    isFirstQuiz,
    modalOpen,
    setModalOpen,
    totalElements,
    setIsNavigate,
  };
}

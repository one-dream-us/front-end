import { useLoginStore } from '@/store/useIsLoginStore';
import wordListAPi from '@/services/wordListApi';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { MyWordListMenuType } from '@/types/types';
import { useEffect } from 'react';

export default function useGetWordListData(activeMenu: MyWordListMenuType) {
  const navigate = useNavigate();
  const { isLogin } = useLoginStore((state) => state);

  const apiFunctions: Record<MyWordListMenuType, () => Promise<any>> = {
    스크랩: wordListAPi.getScrap,
    핵심노트: wordListAPi.getKeyNote,
    오답노트: wordListAPi.getIncorrectNote,
    졸업노트: wordListAPi.getGraduationNote,
  };

  const { data, error, refetch, isLoading } = useQuery({
    queryKey: [activeMenu],
    queryFn: apiFunctions[activeMenu],
    enabled: isLogin,
  });
  if (error) {
    const apiError = error as unknown as ApiError;
    if (apiError?.errorCode === 'NEED_LOGIN') {
      navigate('/login');
    }
  }

  useEffect(() => {
    if (isLogin) {
      refetch();
    }
  }, [activeMenu]);

  const wordList = data
    ? activeMenu === '스크랩'
      ? data.dictionaryScraps
      : activeMenu === '핵심노트'
        ? data.keyNoteList
        : activeMenu === '오답노트'
          ? data.wrongAnswerNotes
          : activeMenu === '졸업노트'
            ? data.graduationNotes
            : []
    : [];
  const keyNoteListLen = activeMenu === '핵심노트' ? data?.keyNoteCount : 0;

  return {
    wordList: isLogin ? wordList : [],
    refetch: isLogin ? refetch : async () => Promise.resolve(),
    isLoading: isLogin && isLoading,
    keyNoteListLen: isLogin ? keyNoteListLen : 0,
  };
}

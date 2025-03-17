import { useLoginStore } from '@/store/useIsLoginStore';
import wordListAPi from '@/services/wordListApi';
import { useQuery } from '@tanstack/react-query';
import { MyWordListMenuType } from '@/types/types';
import { useMemo } from 'react';
import historyApi from '@/services/historyApi';
import bookmarkApi from '@/services/bookmarkApi';

export default function useGetWordListData(activeMenu: MyWordListMenuType) {
  const { isLogin } = useLoginStore((state) => state);
  const apiFunctions: Record<MyWordListMenuType, () => Promise<any>> = {
    히스토리: historyApi.getHistory,
    북마크: bookmarkApi.getBookmark,
    오답노트: wordListAPi.getIncorrectNote,
    졸업노트: wordListAPi.getGraduationNote,
  };

  const { data, refetch, isLoading } = useQuery({
    queryKey: [activeMenu],
    queryFn: apiFunctions[activeMenu],
    enabled: isLogin,
  });

  const wordList = useMemo(() => {
    if (!data) return [];
    const listMapping: Record<MyWordListMenuType, any[]> = {
      히스토리: data.dictionaryHistory,
      북마크: data.bookmarkList,
      오답노트: data.wrongAnswerNotes,
      졸업노트: data.graduationNotes,
    };
    return listMapping[activeMenu] || [];
  }, [data, activeMenu]);

  const bookmarkCnt = useMemo(() => {
    return activeMenu === '북마크' ? data?.bookmarkCount || 0 : 0;
  }, [data, activeMenu]);

  const wrongNoteListLen = useMemo(() => {
    return activeMenu === '오답노트' ? data?.wrongAnswerNoteSize || 0 : 0;
  }, [data, activeMenu]);

  return {
    wordList: isLogin ? wordList : [],
    refetch: isLogin ? refetch : async () => Promise.resolve(),
    isLoading: isLogin && isLoading,
    keyNoteListLen: isLogin ? bookmarkCnt : 0,
    wrongNoteListLen: isLogin ? wrongNoteListLen : 0,
  };
}

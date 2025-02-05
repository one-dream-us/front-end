import { useLoginStore } from '@/store/useIsLoginStore';
import wordListAPi from '@/services/wordListApi';
import { useQueryClient } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { MyWordListMenuType } from '@/types/types';
import { useMemo, useEffect } from 'react';

export default function useGetWordListData(activeMenu: MyWordListMenuType) {
  const { isLogin } = useLoginStore((state) => state);
  const queryClient = useQueryClient();
  const apiFunctions: Record<MyWordListMenuType, () => Promise<any>> = {
    스크랩: wordListAPi.getScrap,
    핵심노트: wordListAPi.getKeyNote,
    오답노트: wordListAPi.getIncorrectNote,
    졸업노트: wordListAPi.getGraduationNote,
  };
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: activeMenu });
  }, [activeMenu]);

  const { data, refetch, isLoading } = useQuery({
    queryKey: [activeMenu],
    queryFn: apiFunctions[activeMenu],
    enabled: isLogin,
    staleTime: 1000,
    refetchOnWindowFocus: false,
  });

  const wordList = useMemo(() => {
    if (!data) return [];
    const listMapping: Record<MyWordListMenuType, any[]> = {
      스크랩: data.dictionaryScraps,
      핵심노트: data.keyNoteList,
      오답노트: data.wrongAnswerNotes,
      졸업노트: data.graduationNotes,
    };
    return listMapping[activeMenu] || [];
  }, [data, activeMenu]);

  const keyNoteListLen = useMemo(() => {
    return activeMenu === '핵심노트' ? data?.keyNoteCount || 0 : 0;
  }, [data, activeMenu]);

  const wrongNoteListLen = useMemo(() => {
    return activeMenu === '오답노트' ? data?.wrongAnswerNoteSize || 0 : 0;
  }, [data, activeMenu]);

  return {
    wordList: isLogin ? wordList : [],
    refetch: isLogin ? refetch : async () => Promise.resolve(),
    isLoading: isLogin && isLoading,
    keyNoteListLen: isLogin ? keyNoteListLen : 0,
    wrongNoteListLen: isLogin ? wrongNoteListLen : 0,
  };
}

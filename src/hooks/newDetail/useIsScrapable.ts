import { useQueries } from '@tanstack/react-query';
import wordListAPi from '@/services/wordListApi';
import { IWholeNote } from '@/types/interface';
import { useMemo } from 'react';
import historyApi from '@/services/historyApi';
import bookmarkApi from '@/services/bookmarkApi';
const useIsScrapable = (wordId: number) => {
  const { inCorrect, graduation, bookmark, history }: IWholeNote = useQueries({
    queries: [
      { queryKey: ['히스토리'], queryFn: historyApi.getHistory },
      { queryKey: ['북마크'], queryFn: bookmarkApi.getBookmark },
      { queryKey: ['오답노트'], queryFn: wordListAPi.getIncorrectNote },
      { queryKey: ['졸업노트'], queryFn: wordListAPi.getGraduationNote },
    ],
    combine(result) {
      return {
        history: result[0].data,
        bookmark: result[1].data,
        inCorrect: result[2].data,
        graduation: result[3].data,
      };
    },
  });

  const alreadyHistory = useMemo(
    () => !!history?.dictionaryHistory?.find((item) => item.dictionaryId === wordId),
    [history, wordId],
  );
  const alreadyInCorrect = useMemo(
    () => !!inCorrect?.wrongAnswerNotes?.find((item) => item.dictionary.id === wordId),
    [inCorrect, wordId],
  );

  const alreadyGraduation = useMemo(
    () => !!graduation?.graduationNotes?.find((item) => item.dictionary.id === wordId),
    [graduation, wordId],
  );

  const alreadyBookmark = useMemo(
    () => bookmark?.bookmarkList?.find((item) => item.dictionary.id === wordId),
    [bookmark, wordId],
  );

  return { alreadyGraduation, alreadyInCorrect, alreadyBookmark, alreadyHistory };
};
export default useIsScrapable;

import { useQueries } from '@tanstack/react-query';
import wordListAPi from '@/services/wordListApi';
import { IWholeNote } from '@/types/interface';
import { useMemo } from 'react';
import historyApi from '@/services/historyApi';
import bookmarkApi from '@/services/bookmarkApi';
import QUERY_KEYS from '@/constants/queryKeys';
const useIsScrapable = (wordId: number) => {
  const { inCorrect, graduation, bookmark, history }: IWholeNote = useQueries({
    queries: [
      { queryKey: QUERY_KEYS.getHistoryList, queryFn: historyApi.getHistory },
      { queryKey: QUERY_KEYS.getBookmarkList, queryFn: bookmarkApi.getBookmark },
      { queryKey: QUERY_KEYS.getWrongList, queryFn: wordListAPi.getIncorrectNote },
      { queryKey: QUERY_KEYS.getGradList, queryFn: wordListAPi.getGraduationNote },
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

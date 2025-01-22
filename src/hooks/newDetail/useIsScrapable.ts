import { useQueries } from '@tanstack/react-query';
import wordListAPi from '@/services/wordListApi';
import { IWholeNote } from '@/types/interface';
import { useMemo } from 'react';
const useIsScrapable = (wordId: number) => {
  const { keynote, graduation, inCorrect, scrap }: IWholeNote = useQueries({
    queries: [
      { queryKey: ['스크랩'], queryFn: wordListAPi.getScrap },
      { queryKey: ['핵심노트'], queryFn: wordListAPi.getKeyNote },
      { queryKey: ['오답노트'], queryFn: wordListAPi.getIncorrectNote },
      { queryKey: ['졸업노트'], queryFn: wordListAPi.getGraduationNote },
    ],
    combine(result) {
      return {
        scrap: result[0].data,
        keynote: result[1].data,
        inCorrect: result[2].data,
        graduation: result[3].data,
      };
    },
  });

  const alreadyKeynote = useMemo(
    () => !!keynote?.keyNoteList?.find((item) => item.dictionary.id === wordId),
    [keynote, wordId],
  );
  const alreadyInCorrect = useMemo(
    () => !!inCorrect?.wrongAnswerNotes?.find((item) => item.dictionary.id === wordId),
    [inCorrect, wordId],
  );

  const alreadyGraduation = useMemo(
    () => !!graduation?.graduationNotes?.find((item) => item.dictionary.id === wordId),
    [graduation, wordId],
  );

  const alreadyScrapped = useMemo(
    () => scrap?.dictionaryScraps?.find((item) => item.dictionaryId === wordId),
    [scrap, wordId],
  );

  return { alreadyKeynote, alreadyGraduation, alreadyInCorrect, alreadyScrapped };
};
export default useIsScrapable;

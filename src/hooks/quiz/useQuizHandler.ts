import quizResultStore from '@/store/quiz/quizResultStore';
import quizStore from '@/store/quiz/quizStore';
import { IChoice, IHandlePick, IQuestionResult } from '@/types/interface';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';
import useSubmitQuiz from './useSubmitQuiz';

export const useQuizHandler = () => {
  const navigate = useNavigate();
  const { setMyChoice, setIsCorrect, setIndex, index, setRemainQuestion } = useStore(quizStore);
  const { setResults, results } = useStore(quizResultStore);
  const submitQuiz = useSubmitQuiz();

  /**1. ui,정답인지 아닌지 상태 판단 */
  const checkIsCorrect = (item: IChoice, answer: string) => {
    setMyChoice(item.term);
    const isCorrect = item.term === answer;
    isCorrect ? setIsCorrect(true) : setIsCorrect(false);
    return isCorrect;
  };

  /**2. 결과 전달 위해 각 문제 결과 누적 */
  const addQuizResults = (payload: IQuestionResult) => setResults(payload);

  /**퀴즈 보기 클릭 함수 */
  const handlePick = ({ answer, dictionaryId, item, status }: IHandlePick) => {
    const isCorrect = checkIsCorrect(item, answer);
    addQuizResults({ dictionaryId, status, isCorrect });
    // 3. 나가기 모달 남은 문제 수 업데이트
    setRemainQuestion();
  };

  /**퀴즈 페이지 내 바텀시트 버튼 클릭 함수 */
  const handleBottomSheetClick = () => {
    const isLastQuestion = index === 4;
    if (isLastQuestion) {
      submitQuiz(results);
      return navigate('/quiz-loading');
    } else {
      setIsCorrect(null);
      setMyChoice(null);
      setIndex(isLastQuestion ? 4 : index + 1);
    }
  };

  return { handlePick, handleBottomSheetClick };
};

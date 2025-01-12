import quizResultStore from '@/store/quiz/quizResultStore';
import quizStore from '@/store/quiz/quizStore';
import { IHandlePick } from '@/types/interface';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';
import useSubmitQuiz from './useSubmitQuiz';

export const useQuizHandler = () => {
  const navigate = useNavigate();
  const { setMyChoice, setIsCorrect, setIndex, index } = useStore(quizStore);
  const { setResults, results } = useStore(quizResultStore);
  const submitQuiz = useSubmitQuiz();

  // const addQuizResults = () => {}; // 2. 결과 전달 위해 각 문제 결과 누적

  const handlePick = ({ answer, dictionaryId, item, status }: IHandlePick) => {
    // 1. ui,정답인지 아닌지 상테 판단
    setMyChoice(item.term);
    const isCorrect = item.term === answer;
    isCorrect ? setIsCorrect(true) : setIsCorrect(false);

    // 2. 결과 전달위해 각 문제 결과 누적
    const payload = { dictionaryId, status, isCorrect };
    setResults(payload);

    // 분리 필요
  };

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

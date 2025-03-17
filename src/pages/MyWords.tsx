import useIsFirstQuiz from '@/hooks/myWordList/api/useIsFirstQuiz';
import QuizIntroPage from './quiz/randomQuiz/QuizIntroPage';
import MyWordList from './MyWordList';

export default function MyWords() {
  const { isFirstQuiz, isCheckFirstLoading } = useIsFirstQuiz();
  if (isCheckFirstLoading) return null;
  if (isFirstQuiz) return <QuizIntroPage />;

  return <MyWordList />;
}

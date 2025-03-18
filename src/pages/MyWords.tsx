import useIsFirstQuiz from '@/hooks/myWordList/api/useIsFirstQuiz';
import MyWordList from './MyWordList';

export default function MyWords() {
  const { isCheckFirstLoading } = useIsFirstQuiz();
  if (isCheckFirstLoading) return null;

  return <MyWordList />;
}

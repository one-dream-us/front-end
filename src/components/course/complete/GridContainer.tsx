import QuizResultItem from '@/components/quiz/quizResult/QuizResultItem';
import { LEARNING_DURATION_SECONDS_KEY } from '@/constants/constants';

export default function GridContainer() {
  const duration = (() => {
    const seconds = Number(localStorage.getItem(LEARNING_DURATION_SECONDS_KEY));
    const minutes = Math.floor(seconds / 60);

    return [minutes, seconds % 60];
  })();
  return (
    <div
      id='quiz-result-status'
      className='m-auto mb-[24px] grid h-[60px] w-[343px] grid-cols-3 grid-rows-1'
    >
      <QuizResultItem quantity={3} status='배운 단어' unit='개' />
      <QuizResultItem quantity={duration} status='학습 시간' unit='분' duration />
      <QuizResultItem quantity={1} status='학습 일수' unit='일차' />
    </div>
  );
}

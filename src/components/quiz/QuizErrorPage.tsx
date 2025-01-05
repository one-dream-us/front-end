import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

export default function QuizErrorPage() {
  useEffect(() => {
    alert('오류 발생, 다시 시도 해주세요.');
  }, []);
  return <Navigate to={'/'} />;
}

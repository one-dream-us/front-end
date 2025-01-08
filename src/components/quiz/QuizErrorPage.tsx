import { useEffect } from 'react';

export default function QuizErrorPage() {
  useEffect(() => {
    alert('오류 발생, 다시 시도 해주세요.');
    location.href = '/';
  }, []);
  return null;
}

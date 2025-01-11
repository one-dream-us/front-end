import courseIndexState from '@/store/course/courseStore';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';

export default function CompleteButton() {
  const { index } = useStore(courseIndexState);
  const navigate = useNavigate();

  const lastIndex = index === 2;

  const handleButtonClick = () => {
    if (lastIndex) {
      navigate('/course-complete');
    } else {
      // 홈에서 컨텐츠 카드 누를 때 해당 페이지 주소 스토리지에 저장 후 이동.
      navigate('/');
    }
  };
  return (
    <button
      onClick={handleButtonClick}
      className={`h-[48px] w-full rounded-[10px] text-[14px] font-bold transition-all duration-200 ${lastIndex ? 'bg-custom-gray-dark text-custom-green-money hover:bg-hover-80 hover:text-green-hover' : 'bg-custom-gray-400 text-custom-gray-200 hover:bg-hover-30'}`}
    >
      학습 완료하기
    </button>
  );
}

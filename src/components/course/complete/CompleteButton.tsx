import { useNavigate } from 'react-router-dom';

export default function CompleteButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/contents')}
      className='m-auto mb-[40px] mt-[54px] flex h-[48px] w-[342px] items-center justify-center rounded-[10px] bg-custom-gray-dark text-[14px] font-bold leading-[100%] text-custom-green-money transition-all duration-200 hover:bg-hover-80 hover:text-green-hover md:mt-[120px] desktop:mt-[24px] desktop:w-[440px]'
    >
      학습 끝내기
    </button>
  );
}

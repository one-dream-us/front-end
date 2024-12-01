import { useNavigate } from 'react-router-dom';

export default function ViewAgainBtn({ id }: { id: number }) {
  const navigate = useNavigate();
  return (
    <button
      type='button'
      onClick={() => navigate(`/contents/${id}`)}
      className='h-[30px] w-full rounded-[4px] bg-gray-500 text-xs'
    >
      다시보기
    </button>
  );
}

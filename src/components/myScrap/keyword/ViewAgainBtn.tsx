import { useNavigate } from 'react-router-dom';
import useMyScrapStore from '@/store/useMyScrapStore';

export default function ViewAgainBtn({
  contentId,
  dictionaryId,
}: {
  contentId: number;
  dictionaryId: number;
}) {
  const navigate = useNavigate();
  const isEditing = useMyScrapStore((state) => state.isEditing);
  return (
    <button
      type='button'
      onClick={() =>
        navigate(`/content/${contentId}`, { state: { scrollTo: `mark-${dictionaryId}` } })
      }
      className={`h-[30px] w-full rounded-[4px] text-xs md:hidden ${isEditing ? 'bg-view-bg text-view' : 'bg-custom-gray-dark text-primary'} `}
      disabled={isEditing}
    >
      영상 보러가기
    </button>
  );
}

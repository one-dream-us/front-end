import { useNavigate } from 'react-router-dom';
import useMyScrapStore from '@/store/useMyScrapStore';

export default function PlayImgBtn({
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
      aria-label='영상 보러가기'
      type='button'
      onClick={() => {
        navigate(`/content/${contentId}`, { state: { scrollTo: `mark mark-${dictionaryId}` } });
      }}
      className={`hidden h-[118px] w-[69px] bg-play transition md:block ${isEditing ? 'pointer-events-none cursor-not-allowed bg-play-disabled hover:bg-play-disabled' : 'bg-play hover:bg-play-hover'}`}
      disabled={isEditing}
    />
  );
}

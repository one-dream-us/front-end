import { handleEditClick } from '@/handlers/myScrap/handleEdits';
import useMyScrapStore from '@/hooks/myScrap/useMyScrapStore';

export default function EditBtn() {
  const setIsEditing = useMyScrapStore((state) => state.setIsEditing);
  const contentsLen = useMyScrapStore((state) => state.allIdList).length;

  return (
    <div className='flex items-center justify-between'>
      <span className='text-xs font-semibold'>
        스크랩 수<span className='ml-2 font-bold'>{contentsLen}</span>
      </span>
      <button
        type='button'
        className='edit-btn my-5 h-6 w-[68px] self-end'
        onClick={() => handleEditClick(setIsEditing)}
      >
        수정하기
      </button>
    </div>
  );
}

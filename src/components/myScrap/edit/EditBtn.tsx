import { handleEditClick } from '@/handlers/myScrap/handleEdits';
import useMyScrapStore from '@/store/useMyScrapStore';

export default function EditBtn() {
  const setIsEditing = useMyScrapStore((state) => state.setIsEditing);
  const contentsLen = useMyScrapStore((state) => state.allIdList).length;

  return (
    <div className='mt-5 flex items-center justify-between desktop:mt-0'>
      <span className='text-xs font-medium text-custom-gray-700'>
        스크랩 수<span className='ml-2 font-bold'>{contentsLen}</span>
      </span>
      <button
        type='button'
        className='edit-btn h-6 w-[68px] self-end font-medium text-custom-gray-dark'
        onClick={() => handleEditClick(setIsEditing)}
      >
        수정하기
      </button>
    </div>
  );
}

import { handleEditClick } from '@/handlers/myScrap/handleEdits';
import { useSetAtom } from 'jotai';
import { isEditingAtom } from '@/store/atom';

export default function EditBtn() {
  const setIsEditing = useSetAtom(isEditingAtom);
  return (
    <>
      <button
        type='button'
        className='edit-btn my-5 h-6 w-[68px] self-end'
        onClick={() => handleEditClick(setIsEditing)}
      >
        수정하기
      </button>
    </>
  );
}

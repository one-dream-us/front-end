import { handleCheckAllChange, handleCancelClick } from '@/handlers/myScrap/handleEdits';
import { useAtomValue, useSetAtom, useAtom } from 'jotai';
import {
  selectedIdListAtom,
  isEditingAtom,
  allIdListAtom,
  isDelModalOpenAtom,
  isAllCheckedAtom,
} from '@/store/atom';

export default function SelectionControls() {
  const [isAllChecked, setIsAllChecked] = useAtom(isAllCheckedAtom);
  const setSelectedIdList = useSetAtom(selectedIdListAtom);
  const setIsEditing = useSetAtom(isEditingAtom);
  const allIdList = useAtomValue(allIdListAtom);
  const actionBtnTexts = ['취소', '지우기'];
  const setIsDelModalOpen = useSetAtom(isDelModalOpenAtom);

  return (
    <div className='my-5 flex h-6 items-center justify-between'>
      <div className='flex items-center gap-x-1'>
        <input
          type='checkbox'
          checked={isAllChecked}
          onChange={(e) => handleCheckAllChange(e, setIsAllChecked, allIdList, setSelectedIdList)}
          className='checkbox'
        />
        <label className='text-xs'>전체 선택</label>
      </div>
      <div className='flex h-full gap-x-2'>
        {actionBtnTexts.map((text, index) => (
          <button
            key={text}
            type='button'
            className={`edit-btn ${index === 0 ? 'w-[38px]' : 'w-[49px]'}`}
            onClick={() =>
              index === 0
                ? handleCancelClick(setSelectedIdList, setIsEditing)
                : setIsDelModalOpen(true)
            }
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

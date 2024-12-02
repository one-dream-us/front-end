import { handleCheckAllChange, handleCancelClick } from '@/handlers/myScrap/handleEdits';
import useSelectionControls from '@/hooks/myScrap/useSelectionControls';

export default function SelectionControls() {
  const {
    isAllChecked,
    setIsAllChecked,
    selectedIdList,
    setSelectedIdList,
    setIsEditing,
    allIdList,
    setIsDelModalOpen,
  } = useSelectionControls();
  const actionBtnTexts = ['취소', '지우기'];

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
            className={`edit-btn ${index === 0 ? 'w-[38px]' : 'w-[49px]'} ${
              text === '지우기' && selectedIdList.length === 0
                ? 'cursor-not-allowed opacity-50'
                : ''
            }`}
            onClick={() =>
              index === 0
                ? handleCancelClick(setSelectedIdList, setIsEditing)
                : setIsDelModalOpen(true)
            }
            disabled={text === '지우기' && selectedIdList.length === 0}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

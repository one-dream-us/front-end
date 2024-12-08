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
  const actionBtnTexts = ['수정취소', '지우기'];

  return (
    <div className='mt-5 flex h-6 items-center justify-between desktop:mt-0'>
      <div className='flex items-center gap-x-1'>
        <input
          type='checkbox'
          checked={isAllChecked}
          onChange={(e) => {
            handleCheckAllChange(e, setIsAllChecked, allIdList, setSelectedIdList);
          }}
          className='checkbox'
        />
        <label className='text-xs text-custom-gray-700'>전체 선택</label>
      </div>
      <div className='flex h-full gap-x-2'>
        {actionBtnTexts.map((text, index) => (
          <button
            key={text}
            type='button'
            className={`edit-btn font-medium ${index === 0 ? 'px-3 text-custom-gray-dark' : 'w-[49px]'} ${
              index === 1 && selectedIdList.length === 0
                ? 'cursor-not-allowed font-normal text-custom-gray-400'
                : ''
            }`}
            onClick={() =>
              index === 0
                ? handleCancelClick(setSelectedIdList, setIsEditing, setIsAllChecked)
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

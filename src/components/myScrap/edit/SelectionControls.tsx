import { handleCheckAllChange, handleCancelClick } from '@/handlers/myScrap/handleEdits';
import useSelectionControls from '@/hooks/myScrap/useSelectionControls';

export default function SelectionControls() {
  const {
    isAllChecked,
    setIsAllChecked,
    selectedIdList,
    setSelectedIdList,
    isEditing,
    setIsEditing,
    allIdList,
    setIsDelModalOpen,
  } = useSelectionControls();
  const actionBtnTexts = ['수정취소', '지우기'];

  return (
    <div className='flex justify-between items-center mt-5 h-6 desktop:mt-0'>
      <div className='flex gap-x-1 items-center'>
        <label className='h-5' htmlFor='checkbox-all'>
          <input
            id='checkbox-all'
            aria-labelledby='checkbox-all'
            type='checkbox'
            checked={isAllChecked}
            onChange={(e) => {
              handleCheckAllChange(e, setIsAllChecked, allIdList, setSelectedIdList);
            }}
            className='checkbox'
          />
        </label>
        <span className='text-xs text-custom-gray-700'>전체 선택</span>
      </div>
      <div className='flex gap-x-2 h-full'>
        {actionBtnTexts.map((text, index) => (
          <button
            key={text}
            type='button'
            className={`edit-btn ${index === 0 ? 'px-3 text-custom-gray-dark' : 'w-[49px]'} ${
              index === 1 && selectedIdList.length === 0
                ? 'cursor-not-allowed !bg-custom-gray-200 font-normal !text-custom-gray-400'
                : ''
            } ${isEditing && index === 1 && 'text-custom-gray-dark'}`}
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

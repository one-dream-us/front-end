import useMyScrapStore from '@/hooks/myScrap/useMyScrapStore';

export default function DeleteModal({
  isOpen,
  onDelete,
  itemName,
}: {
  isOpen: boolean;
  onDelete: () => void;
  itemName: string;
}) {
  const setIsDelModalOpen = useMyScrapStore((state) => state.setIsDelModalOpen);
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex h-[108px] w-[344px] flex-col items-center gap-y-5 rounded-[10px] bg-white px-4 py-5'>
        <p className='h-[18px] text-xs'>선택한 {itemName}을 삭제할까요?</p>
        <div className='flex h-[30px] gap-x-2'>
          <button
            type='button'
            onClick={() => setIsDelModalOpen(false)}
            className='edit-btn h-full w-[152px]'
          >
            취소하기
          </button>
          <button type='button' onClick={onDelete} className='edit-btn h-full w-[152px]'>
            삭제하기
          </button>
        </div>
      </div>
    </div>
  );
}

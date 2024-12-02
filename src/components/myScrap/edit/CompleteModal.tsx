import useMyScrapStore from '@/hooks/myScrap/useMyScrapStore';
import closeIcon from '@/assets/icons/close.svg';

export default function CompleteModal({ isOpen, itemName }: { isOpen: boolean; itemName: string }) {
  const setIsComModalOpen = useMyScrapStore((state) => state.setIsComModalOpen);
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='flex h-[44px] w-[344px] items-center justify-between rounded-[10px] bg-white px-5 py-3'>
        <div className='flex h-[18px] items-center gap-x-2'>
          <img src={closeIcon} alt='${itemName}이 삭제되었다는 이미지' className='h-2 w-2' />
          <p className='h-full text-xs leading-[18px]'>{itemName}이 삭제되었어요.</p>
        </div>
        <button type='button' onClick={() => setIsComModalOpen(false)} className='text-xs'>
          닫기
        </button>
      </div>
    </div>
  );
}

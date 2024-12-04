import shareUtils from '@/handlers/contentDetail/handleShare';
import closeImg from '@/assets/icons/close.svg';
import useShareModal from '@/hooks/contentDetail/useShareModal';

export default function ShareModal({
  setIsShareModalOpen,
}: {
  setIsShareModalOpen: (isOpen: boolean) => void;
}) {
  const currentUrl = window.location.href;
  useShareModal();

  const buttonData = [
    { label: '링크 복사', handler: shareUtils.handleCopyLink },
    { label: '카카오톡', handler: shareUtils.handleKakaoShare },
    { label: '페이스북', handler: shareUtils.handleFacebookShare },
    { label: 'X', handler: shareUtils.handleXShare },
  ];

  return (
    <section className='absolute right-0 top-10 flex w-[276px] flex-col gap-y-3 rounded-[10px] bg-custom-gray-dark px-5 py-4 text-white opacity-95'>
      <div className='flex items-center justify-between text-white'>
        <h3 className='text-sm font-semibold'>공유하기</h3>
        <button
          type='button'
          onClick={() => setIsShareModalOpen(false)}
          aria-label='공유하기 창 닫기'
        >
          <img src={closeImg} alt='공유하기 창 닫기 아이콘' className='h-3 w-3' />
        </button>
      </div>
      <div className='flex gap-x-5 text-[10px]'>
        {buttonData.map(({ label, handler }) => (
          <button
            key={label}
            onClick={shareUtils.handleButtonClick(handler, setIsShareModalOpen, currentUrl)}
            type='button'
            className='w-44px'
          >
            <div className='flex flex-col items-center gap-y-1'>
              <img src='https://placehold.co/44x44' className='rounded-[4px]' />
              <span className='whitespace-nowrap'>{label}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

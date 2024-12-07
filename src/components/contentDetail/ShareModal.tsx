import shareUtils from '@/handlers/contentDetail/handleShare';
import closeGIcon from '@/assets/icons/X=Grey 30.svg';
import useShareModal from '@/hooks/contentDetail/useShareModal';
import copyLinkIcon from '@/assets/icons/copy-link.svg';
import kakaoTalkIcon from '@/assets/icons/kakaotalk.svg';
import facebookIcon from '@/assets/icons/facebook.svg';
import XIcon from '@/assets/icons/x.svg';

export default function ShareModal({
  setIsShareModalOpen,
}: {
  setIsShareModalOpen: (isOpen: boolean) => void;
}) {
  const currentUrl = window.location.href;
  useShareModal();

  const buttonData = [
    {
      label: '링크 복사',
      imgSrc: copyLinkIcon,
      alt: '링크 복사 아이콘',
      handler: shareUtils.handleCopyLink,
    },
    {
      label: '카카오톡',
      imgSrc: kakaoTalkIcon,
      alt: '카카오톡 아이콘',
      handler: shareUtils.handleKakaoShare,
    },
    {
      label: '페이스북',
      imgSrc: facebookIcon,
      alt: '페이스북 아이콘',
      handler: shareUtils.handleFacebookShare,
    },
    { label: 'X (트위터)', imgSrc: XIcon, alt: '닫기 아이콘', handler: shareUtils.handleXShare },
  ];

  return (
    <section className='absolute right-0 top-0 flex w-[276px] flex-col gap-y-3 rounded-[10px] bg-custom-gray-dark px-5 py-4 text-custom-gray-lighter opacity-95'>
      <div className='flex items-center justify-between'>
        <h3 className='text-sm font-medium'>공유하기</h3>
        <button
          type='button'
          onClick={() => setIsShareModalOpen(false)}
          aria-label='공유하기 창 닫기'
        >
          <img src={closeGIcon} alt='공유하기 창 닫기 아이콘' className='h-[15px] w-3.5' />
        </button>
      </div>
      <div className='flex gap-x-5 text-[10px]'>
        {buttonData.map(({ label, imgSrc, alt, handler }) => (
          <button
            key={label}
            onClick={shareUtils.handleButtonClick(handler, setIsShareModalOpen, currentUrl)}
            type='button'
            className='w-44px'
          >
            <div className='flex flex-col items-center gap-y-1'>
              <img src={imgSrc} alt={alt} className='rounded-[4px]' />
              <span className='whitespace-nowrap text-[10px]'>{label}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

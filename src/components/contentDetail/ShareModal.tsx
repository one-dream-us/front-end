import shareUtils from '@/handlers/contentDetail/handleShare';
import closeGIcon from '@/assets/icons/X=Grey 30.svg';
import useShareModal from '@/hooks/contentDetail/useShareModal';
import copyLinkIcon from '@/assets/icons/copy-link.svg';
import kakaoTalkIcon from '@/assets/imgs/카카오톡.jpg';
import facebookIcon from '@/assets/imgs/페이스북.jpg';
import XIcon from '@/assets/imgs/X 트위터.jpg';
import useToastStore from '@/store/useToastStore';

export default function ShareModal({
  setIsShareModalOpen,
  title,
  description,
  img,
}: {
  setIsShareModalOpen: (isOpen: boolean) => void;
  title: string;
  description: string;
  img: string;
}) {
  const currentUrl = window.location.href;
  useShareModal();
  const showToast = useToastStore((state) => state.showToast);

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
    {
      label: 'X (트위터)',
      imgSrc: XIcon,
      alt: 'X (트위터) 아이콘',
      handler: shareUtils.handleXShare,
    },
  ];

  return (
    <section className='absolute right-0 top-0 z-[50] flex w-[276px] flex-col gap-y-3 rounded-[10px] bg-modal px-5 py-4 text-custom-gray-lighter'>
      <div className='flex items-center justify-between'>
        <h3 className='md:text-sm'>공유하기</h3>
        <button
          type='button'
          onClick={() => setIsShareModalOpen(false)}
          aria-label='공유하기 창 닫기'
        >
          <img
            src={closeGIcon}
            alt='공유하기 창 닫기 아이콘'
            className='h-[15px] w-3.5 hover:opacity-60'
          />
        </button>
      </div>
      <div className='flex gap-x-5 text-[10px]'>
        {buttonData.map(({ label, imgSrc, alt, handler }) => (
          <button
            key={label}
            onClick={() =>
              shareUtils.handleButtonClick(
                handler,
                setIsShareModalOpen,
                currentUrl,
                showToast,
                title,
                description,
                img,
              )()
            }
            type='button'
          >
            <div className='flex flex-col items-center gap-y-1'>
              <div className='group relative'>
                <img
                  src={imgSrc}
                  alt={alt}
                  className='h-[44px] w-[44px] overflow-hidden rounded-md'
                />
                <div className='absolute inset-0 overflow-hidden rounded-md bg-black opacity-0 transition md:group-hover:opacity-50' />
              </div>
              <span className='whitespace-nowrap text-[10px]'>{label}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

import ShareModal from './ShareModal';
import scrapDIcon from '@/assets/icons/icon_scrap_main.svg';
import shareIcon from '@/assets/icons/icon_share.svg';
import useScrapAndShare from '@/hooks/contentDetail/useScrapAndShare';
import scrappedIcon from '@/assets/icons/icon_scrap_active.svg';
import useContentStore from '@/store/useContentStore';
import useTooltipStore from '@/store/useTooltipStore';

export default function ScrapAndShare({
  description,
  img,
  title,
}: {
  description: string;
  img: string;
  title: string;
}) {
  const contentId = useContentStore((state) => state.contentId);
  const { isShareModalOpen, setIsShareModalOpen, toggleScrap, isScrapped } =
    useScrapAndShare(contentId);
  const { setTooltip } = useTooltipStore();
  return (
    <div className='text-gray-dark relative flex h-6 justify-between desktop:h-[31px] desktop:gap-x-2'>
      <button
        id={!isScrapped ? `scrap-${contentId}` : undefined}
        className={`flex w-[69px] items-center justify-center gap-x-[1px] rounded-lg pb-[5.5px] pt-[4.5px] hover:text-custom-gray-h desktop:w-[81px] ${isScrapped ? 'bg-primary' : 'text-custom-dark-gray bg-custom-gray-200'}`}
        aria-label='스크랩하기'
        onClick={() => {
          toggleScrap();
        }}
      >
        <img
          src={isScrapped ? scrappedIcon : scrapDIcon}
          className='h-[13px] w-3 hover:fill-black'
          aria-label={isScrapped ? '스크랩 해제 아이콘' : '스크랩 아이콘'}
        />
        <span className='ml-0.5 pt-0.5 text-xs hover:text-custom-gray-h desktop:text-sm'>
          스크랩
        </span>
      </button>
      <button
        className='flex w-[58px] items-center justify-center gap-x-[1px] rounded-lg bg-custom-gray-200 pb-[5.5px] pt-[4.5px] transition-colors hover:bg-custom-gray-light-h hover:text-custom-gray-h desktop:w-[68px]'
        aria-label='공유하기 아이콘'
        onClick={() => {
          setTooltip({ content: '', term: '', isScrapped: false, index: null });
          setIsShareModalOpen(true);
        }}
      >
        <img src={shareIcon} aria-label='공유 아이콘' className='h-[13px] w-3' />
        <span className='ml-0.5 pt-0.5 text-xs desktop:text-sm'>공유</span>
      </button>
      {isShareModalOpen && (
        <ShareModal
          setIsShareModalOpen={setIsShareModalOpen}
          description={description}
          img={img}
          title={title}
        />
      )}
    </div>
  );
}

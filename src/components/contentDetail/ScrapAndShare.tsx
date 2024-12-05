import useAddScrap from '@/hooks/contentDetail/useAddScrap';
import { useState } from 'react';
import ShareModal from './ShareModal';
import downloadIcon from '@/assets/icons/download.svg';
import shareIcon from '@/assets/icons/share.svg';

export default function ScrapAndShare({ contentId }: { contentId: number }) {
  const { addScrapContent } = useAddScrap(contentId);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className='flex relative gap-x-1'>
      <button
        className='flex justify-center items-center p-1'
        aria-label='스크랩하기'
        onClick={() => addScrapContent()}
      >
        <img src={downloadIcon} alt='스크랩 아이콘' className='w-6 h-6' />
      </button>
      <button
        className='flex justify-center items-center p-1'
        aria-label='공유하기'
        onClick={() => setIsShareModalOpen(true)}
      >
        <img src={shareIcon} alt='공유 아이콘' className='w-6 h-6' />
      </button>
      {isShareModalOpen && <ShareModal setIsShareModalOpen={setIsShareModalOpen} />}
    </div>
  );
}

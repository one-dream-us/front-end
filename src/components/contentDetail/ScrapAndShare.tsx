import useScrapContent from '@/hooks/contentDetail/useScrapContent';
import { useState } from 'react';
import ShareModal from './ShareModal';
import downloadIcon from '@/assets/icons/download.svg';
import shareIcon from '@/assets/icons/share.svg';

export default function ScrapAndShare({ contentId }: { contentId: number }) {
  const { addScrapContent } = useScrapContent(contentId);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className='relative flex gap-x-1'>
      <button
        className='flex items-center justify-center p-1'
        aria-label='스크랩하기'
        onClick={() => addScrapContent()}
      >
        <img src={downloadIcon} alt='스크랩 아이콘' className='h-6 w-6' />
      </button>
      <button
        className='flex items-center justify-center p-1'
        aria-label='공유하기'
        onClick={() => setIsShareModalOpen(true)}
      >
        <img src={shareIcon} alt='공유 아이콘' className='h-6 w-6' />
      </button>
      {isShareModalOpen && <ShareModal setIsShareModalOpen={setIsShareModalOpen} />}
    </div>
  );
}

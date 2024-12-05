import Button from '@/components/common/Button';
import { myScrapMenu } from '@/types/types';
import { useNavigate } from 'react-router-dom';

export default function EmptyState({ activeMenu }: { activeMenu: myScrapMenu }) {
  const isScrap = activeMenu === '스크랩';
  const navigate = useNavigate();

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='mt-[72px] min-h-[176px] w-[200px]'>
        <p className='text-center text-sm'>
          {isScrap ? '스크랩함이 비었어요!' : '단어장이 비었어요!'}
        </p>
        <img
          src={isScrap ? 'https://placehold.co/200x120' : 'https://placehold.co/200x120'}
          alt={
            isScrap
              ? '스크랩이 비어있는 상태를 나타내는 이미지'
              : '단어장이 비어있는 상태를 나타내는 이미지'
          }
          className='mb-[88px] mt-8'
        />
      </div>
      <Button
        text={isScrap ? '콘텐츠 모으러 가기' : '단어 주우러 가기'}
        onClick={() => navigate('/contents')}
      />
    </div>
  );
}

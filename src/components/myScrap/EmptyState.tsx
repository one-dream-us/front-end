import Button from '@/components/common/Button';
import { myScrapMenu } from '@/types/types';
import { useNavigate } from 'react-router-dom';
import EmptyTerm from '@/assets/this_is_money_imgs/img_webp/image_for_emptyword.webp';
import EmptyContent from '@/assets/this_is_money_imgs/img_webp/image_for_emptyscrap.webp';

export default function EmptyState({ activeMenu }: { activeMenu: myScrapMenu }) {
  const isScrap = activeMenu === '콘텐츠';
  const navigate = useNavigate();

  return (
    <div className='mb-[60px] flex w-[352px] flex-col desktop:ml-[352px]'>
      <div className='flex w-full flex-col items-center'>
        <div className='mb-[88px] mt-[72px] flex w-[200px] flex-col gap-y-8'>
          <p className='letter text-custom-black-light text-center text-sm -tracking-[0.01em] desktop:text-lg desktop:font-bold desktop:text-black'>
            {isScrap ? '콘텐츠함 비었어요!' : '단어장이 비었어요!'}
          </p>
          <img
            src={isScrap ? EmptyContent : EmptyTerm}
            alt={
              isScrap
                ? '콘텐츠함이 비어있는 상태를 나타내는 이미지'
                : '단어장이 비어있는 상태를 나타내는 이미지'
            }
          />
        </div>
        <Button
          text={isScrap ? '콘텐츠 모으러 가기' : '단어 주우러 가기'}
          onClick={() => navigate('/contents')}
        />
      </div>
    </div>
  );
}

import graduationIcon from '@/assets/P2_5d에셋/userinfo_icon_crown.svg';
import scrapIcon from '@/assets/P2_5d에셋/userinfo_icon_scap.svg';
import learningDayIcon from '@/assets/P2_5d에셋/userinfo_icon_flame.svg';

export default function ScoreBoard({
  totalScrap,
  totalGraduation,
  learningDays,
}: {
  totalScrap: number;
  totalGraduation: number;
  learningDays: number;
}) {
  return (
    <div className='mt-5 flex h-[60px] text-xs leading-120 text-gray-070'>
      <div className='flex w-[114px] flex-col items-center justify-center gap-y-2 border-r border-custom-gray-300'>
        <div className='flex items-center gap-x-1'>
          <img src={scrapIcon} alt='전체 단어' />
          <span>전체단어</span>
        </div>
        <p className='leading-120 text-custom-gray-600'>
          <span className='text-base font-bold leading-none text-custom-gray-dark'>
            {totalScrap}
          </span>
        </p>
      </div>
      <div className='flex w-[114px] flex-col items-center justify-center gap-y-2 border-r border-custom-gray-300'>
        <div className='flex items-center gap-x-1'>
          <img src={graduationIcon} alt='졸업 단어' />
          <span>졸업단어</span>
        </div>
        <p className='leading-120 text-custom-gray-600'>
          <span className='text-base font-bold leading-none text-custom-gray-dark'>
            {totalGraduation}
          </span>
        </p>
      </div>

      <div className='flex w-[114px] flex-col items-center justify-center gap-y-2'>
        <div className='flex items-center gap-x-1'>
          <img src={learningDayIcon} alt='연속 학습' />
          <span>연속학습</span>
        </div>
        <p className='leading-120 text-custom-gray-600'>
          <span className='text-base font-bold leading-none text-custom-gray-dark'>
            {learningDays}
          </span>
        </p>
      </div>
    </div>
  );
}

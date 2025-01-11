import graduationIcon from '@/assets/p2/icon_grad.png';

export default function ScoreBoard({
  totalScrap,
  totalGraduation,
  accuracyRate,
}: {
  totalScrap: number;
  totalGraduation: number;
  accuracyRate: number;
}) {
  return (
    <div className='mt-[23px] flex h-[60px] text-xs leading-120 text-gray-070'>
      <div className='flex w-[114px] flex-col items-center justify-center gap-y-2 border-r border-custom-gray-300'>
        <div className='flex items-center gap-x-1'>
          <img src={graduationIcon} alt='졸업단어 아이콘' className='h-4 w-4' />
          <span>졸업단어</span>
        </div>
        <p className='leading-120 text-custom-gray-600'>
          <span className='text-base font-bold leading-none text-custom-gray-dark'>
            {totalGraduation}
          </span>{' '}
          개
        </p>
      </div>
      <div className='flex w-[114px] flex-col items-center justify-center gap-y-2 border-r border-custom-gray-300'>
        <span>총 스크랩 단어</span>
        <p className='leading-120 text-custom-gray-600'>
          <span className='text-base font-bold leading-none text-custom-gray-dark'>
            {totalScrap}
          </span>{' '}
          개
        </p>
      </div>
      <div className='flex w-[114px] flex-col items-center justify-center gap-y-2'>
        <span>정답률</span>
        <p className='leading-120 text-custom-gray-600'>
          <span className='text-base font-bold leading-none text-custom-gray-dark'>
            {accuracyRate}
          </span>{' '}
          %
        </p>
      </div>
    </div>
  );
}

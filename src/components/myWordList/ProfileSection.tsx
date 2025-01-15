import useProfileSectionLogic from '@/hooks/myWordList/useProfileSectionLogic';
import ProfileImg from '@/assets/this_is_money_imgs/img_webp/profile_small.webp';
import bookmarkIcon from '@/assets/p2/icon_bookmark_dark.png';
import arrowRightIcon from '@/assets/p2/arrow_right_black.svg';
import logoIcon from '@/assets/imgs_v2/main_logo_32.svg';

export default function ProfileSection({
  username,
  totalKeyNote,
}: {
  username: string;
  totalKeyNote: number;
}) {
  const { text, progressBarWidth, navigate } = useProfileSectionLogic(totalKeyNote);

  return (
    <div className='flex h-[126px] w-full flex-col items-end'>
      <div className='flex h-[66px] w-full items-center gap-x-2'>
        <img src={ProfileImg} alt='프로필' className='h-[66px] w-[66px]' />
        <div>
          <h1 className='text-xl font-bold text-custom-black'>{username} 님</h1>
          <h2 className='whitespace-nowrap text-sm leading-160 text-custom-gray-700'>{text}</h2>
        </div>
      </div>
      {totalKeyNote <= 3 ? (
        <div className='flex h-6 w-[268px] items-center gap-x-1'>
          <img src={bookmarkIcon} alt='핵심노트' className='h-6 w-6' />
          <div className='h-[7px] w-60 rounded-full bg-custom-gray-300 drop-shadow'>
            <div className='h-full rounded-full bg-new-green' style={{ width: progressBarWidth }} />
          </div>
        </div>
      ) : (
        ''
      )}
      {totalKeyNote < 3 ? (
        <div className='mt-1 h-8 whitespace-nowrap rounded-full border border-custom-gray-200 px-2.5 py-1 text-sm font-medium leading-170 text-gray-070'>
          핵심노트 {totalKeyNote} <span className='text-custom-gray-500'>/ 3</span>
        </div>
      ) : (
        <div
          className={`h-8 rounded-full border border-custom-gray-200 py-1 pl-2 pr-1 text-sm font-medium text-custom-gray-dark ${totalKeyNote > 3 ? 'mt-7' : 'mt-1'}`}
        >
          <button type='button' className='flex items-center' onClick={() => navigate('/quiz')}>
            <img src={logoIcon} alt='로고' className='mr-1.5 h-5 w-5' />
            <span className='leading-6'>퀴즈 바로가기</span>
            <img src={arrowRightIcon} alt='오른쪽 화살표' className='h-3 w-4' />
          </button>
        </div>
      )}
    </div>
  );
}

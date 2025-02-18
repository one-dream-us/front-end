import useProfileSectionLogic from '@/hooks/myWordList/useProfileSectionLogic';
import profileImg from '@/assets/P2_5d에셋/wordlist_icon_profile_56.png';
import arrowRightIcon from '@/assets/p2/arrow_right_black.svg';
import quizIcon from '@/assets/p2/icon_quiz.png';

export default function ProfileSection({
  username,
  totalKeyNote,
}: {
  username: string;
  totalKeyNote: number;
}) {
  const { text, progressBarWidth, navigate, wrongNoteListLen } =
    useProfileSectionLogic(totalKeyNote);

  return (
    <div className='mx-auto flex w-[300px] flex-col items-end gap-y-2 md:w-[312px]'>
      <div className='flex h-[66px] w-full items-center gap-x-2'>
        <img src={profileImg} alt='프로필' className='h-14 w-14' />
        <div>
          <h1 className='text-xl font-bold text-custom-black'>{username} 님</h1>
          <h2 className='whitespace-nowrap text-sm leading-160 text-custom-gray-700'>{text}</h2>
        </div>
      </div>
      <div
        className={`flex h-8 w-full items-center gap-x-5 rounded-full border border-custom-gray-300 px-4 ${totalKeyNote < 3 ? 'gap-x-5' : 'gap-x-3.5'}`}
      >
        {totalKeyNote <= 3 ? (
          <div className='flex items-center gap-x-1'>
            <div className='h-2 w-[163px] rounded-full bg-custom-gray-300'>
              <div
                className='h-full rounded-full bg-new-green'
                style={{ width: progressBarWidth }}
              />
            </div>
          </div>
        ) : (
          ''
        )}
        {wrongNoteListLen + totalKeyNote < 3 ? (
          <p className='whitespace-nowrap text-sm font-medium leading-170 text-gray-070'>
            핵심노트 {totalKeyNote} <span className='text-custom-gray-500'>/ 3</span>
          </p>
        ) : (
          <div className='text-sm font-medium text-custom-gray-dark'>
            <button
              type='button'
              className='flex items-center'
              onClick={() => navigate('/quiz')}
              id='go_quiz'
            >
              <img src={quizIcon} alt='퀴즈' className='mr-0.5 h-5 w-5' />
              <span className='mr-1.5 whitespace-nowrap leading-6'>퀴즈풀기</span>
              <img src={arrowRightIcon} alt='오른쪽 화살표' className='h-3 w-4' />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

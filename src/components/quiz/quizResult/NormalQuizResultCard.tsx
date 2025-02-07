import { ResultDetail } from '@/types/interface';
import iconGrad from '@/assets/p2/icon_grad.png';
import correctIcon from '@/assets/p2/icon_check_right.png';
import wrongIcon from '@/assets/p2/icon_x_wrg.png';
import { checkIsRedText, showStatus } from '@/utils/quiz/quizHandlers';
import { useNavigate } from 'react-router-dom';

export default function NormalQuizResultCard({
  correctCnt,
  isCorrect,
  term,
  wrongCnt,
  status,
}: ResultDetail) {
  const navigate = useNavigate();
  return (
    <li
      key={term}
      className='mb-2 flex h-[124px] w-full items-start justify-between gap-x-3 rounded-[10px] bg-white px-[16px] py-[20px] desktop:h-[120px] desktop:w-[396px]'
    >
      <img src={isCorrect ? correctIcon : wrongIcon} className='size-6' alt='result icon' />
      <div className='ml-auto w-[275px] md:w-[285px] lg:w-[328px]'>
        <div className='mb-1 h-[24px] w-full text-[16px] font-bold leading-170 text-custom-black'>
          <h1>{term}</h1>
        </div>
        <div
          className={`mb-1 flex h-[24px] w-full items-center justify-start gap-x-1 text-[14px] leading-170 ${checkIsRedText({ isCorrect, wrongCnt }) ? 'text-[#FB8888]' : 'text-custom-gray-700'}`}
        >
          {isCorrect && correctCnt >= 3 && (
            <img src={iconGrad} className='size-4' alt='graduation icon' />
          )}
          <span>
            {showStatus({ correctCnt, isCorrect, wrongCnt })}
            {/* {status} */}
          </span>
          {/* n회 정답/오답 */}
        </div>
        <div className='h-[24px] w-full text-[14px] leading-170 text-custom-gray-500'>
          <button
            onClick={() => {
              console.log(status);
              navigate(`/my-word-list?tab=${status}`);
            }}
            className='go_wordcard ml-auto flex items-center justify-center'
          >
            <span>단어장 보기</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-4'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}

import quizResultPerfect from '@/assets/imgs_v2/quiz_result_perfect.png';
import QuizResultItem from '@/components/quiz/quizResult/QuizResultItem';
import quizGraduation from '@/assets/imgs_v2/quiz-graduation.png';
import correctIcon from '@/assets/imgs_v2/icon_check_green.png';
import wrongIcon from '@/assets/imgs_v2/icon_X_Pink.png';
import BottomSheet from '@/components/quiz/common/BottomSheet';

export default function QuizResultPage() {
  const checkIsRedText = (status: string) => {
    const target = +status[0];
    const isNumber = !isNaN(target);

    if (isNumber && target >= 3 && status.includes('오답')) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='m-auto'>
      <div className='mb-[16px] mt-[40px] text-center md:mt-[60px]'>
        <div className='m-auto mb-1 h-[33px] w-[156px]'>
          <h1 className='mb-1 text-[22px] font-bold leading-[160%]'>전부 다 맞췄어요!</h1>
        </div>
        <div className='m-auto h-[22px] w-[202px]'>
          <span className='text-[14px] text-custom-gray-dark'>
            외운 단어는 졸업노트에 넣어둘게요!
          </span>
        </div>

        <img className='m-auto h-[124px]' src={quizResultPerfect} alt='quiz result image' />
      </div>
      {/* quiz result status */}
      <div
        id='quiz-result-status'
        className='m-auto mb-[24px] grid h-[60px] max-w-[353px] grid-cols-3 grid-rows-1'
      >
        <QuizResultItem quantity={1} status='졸업단어' unit='개' src={quizGraduation} />
        <QuizResultItem quantity={5} status='오답단어' unit='개' />
        <QuizResultItem quantity={80} status='정답률' unit='%' />
      </div>

      <div className='left-0 min-h-screen w-full pt-[24px] desktop:absolute desktop:bg-quiz-bg'>
        {' '}
        {/* questions */}
        <ul className='m-auto max-w-[353px] desktop:grid desktop:max-w-[812px] desktop:grid-cols-2 desktop:gap-x-[20px] desktop:gap-y-[12px]'>
          {resultList.map((item) => (
            // 단어 카드
            <li
              key={item.id}
              className='mb-2 flex h-[124px] w-full items-start justify-between gap-x-3 rounded-[10px] bg-white px-[16px] py-[20px] transition-all duration-300 hover:scale-105 desktop:h-[120px] desktop:w-[396px]'
            >
              <img
                src={item.status.includes('오답') ? wrongIcon : correctIcon}
                className='size-6'
                alt='result icon'
              />
              <div className='ml-auto w-[275px] md:w-[285px] lg:w-[328px]'>
                <div className='mb-1 h-[24px] w-full text-[16px] font-bold leading-170 text-custom-black'>
                  <h1>{item.word}</h1>
                </div>
                <div
                  className={`mb-1 flex h-[24px] w-full items-center justify-start gap-x-1 text-[14px] leading-170 ${checkIsRedText(item.status) ? 'text-[#FB8888]' : 'text-custom-gray-700'}`}
                >
                  {item.status.includes('졸업') && (
                    <img src={quizGraduation} alt='graduation icon' />
                  )}
                  <span> {item.status}</span>
                </div>
                <div className='h-[24px] w-full text-[14px] leading-170 text-custom-gray-500'>
                  <button
                    onClick={() => console.log('navigate', item.word)}
                    className='ml-auto flex items-center justify-center'
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
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='m8.25 4.5 7.5 7.5-7.5 7.5'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <BottomSheet
        titleText='오늘의 퀴즈 완료!'
        imgSrc={correctIcon}
        buttonTextColor='text-custom-green-money'
        handleButtonClick={() => console.log('ok')}
        buttonText={
          resultList.some((item) => item.status.includes('오답'))
            ? '복습하러 가기'
            : '외운 단어 확인하기'
        }
      />
    </div>
  );
}

const resultList = [
  { id: 1, word: '마이크로스트레티지 (MicroStrategy)', status: '3회 정답! 졸업했어요' },
  { id: 2, word: '우선주', status: '2회 오답' },
  { id: 3, word: '우선주', status: '3회 오답' },
  { id: 4, word: '마이크로스트레티지 (MicroStrategy)', status: '1회 복습' },
  { id: 5, word: '마이크로스트레티지 (MicroStrategy)', status: '7회 오답' },
];

import QuizResultItem from '@/components/quiz/quizResult/QuizResultItem';
import correctIcon from '@/assets/p2/icon_check_right.png';
import wrongIcon from '@/assets/p2/icon_x_wrg.png';
import BottomSheet from '@/components/quiz/common/BottomSheet';
import quizResult100 from '@/assets/p2/quiz result=100.png';
// import quizResult50 from '@/assets/p2/quiz result=2080.png';
// import quizResult0 from '@/assets/p2/quiz result=0.png';
import BottomSheetImg from '@/assets/p2/icon_quiz.png';
import iconGrad from '@/assets/p2/icon_grad.png';

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

  // const createTitle = () => {
  //   if (!result) return;
  //   const { accuracyRate } = result;
  //   const obj = {
  //     mainTitle: '',
  //     subTitlt: '',
  //     src: '',
  //   };

  //   switch (accuracyRate) {
  //     case 100:
  //       obj.mainTitle = '전부 다 맞췄어요!';
  //       (obj.subTitlt = '외운 단어는 졸업노트에 넣어둘게요!'), (obj.src = quizResult100);
  //       break;
  //     case 0:
  //       obj.mainTitle = '조금 어려웠나봐요!';
  //       (obj.subTitlt = '놓친 단어는 오답노트에 넣었어요'), (obj.src = quizResult50);
  //       break;
  //     default:
  //       obj.mainTitle = '퀴즈를 다 풀었어요!';
  //       (obj.subTitlt = '놓친 단어는 오답노트에 넣었어요'), (obj.src = quizResult0);
  //   }
  //   return obj;
  // };
  return (
    <div className='m-auto'>
      <div className='mb-[16px] mt-[40px] text-center md:mt-[60px]'>
        <div className='m-auto mb-1 h-[33px] min-w-[156px]'>
          <h1 className='mb-1 text-[22px] font-bold leading-[160%]'>전부 다 맞췄어요!</h1>
        </div>
        <div className='m-auto h-[22px] min-w-[202px]'>
          <span className='text-[14px] text-custom-gray-dark'>
            외운 단어는 졸업노트에 넣어둘게요!
          </span>
        </div>

        <img className='m-auto mb-[16px] h-[124px]' src={quizResult100} alt='quiz result image' />
      </div>
      {/* quiz result status */}
      <div
        id='quiz-result-status'
        className='m-auto mb-[24px] grid h-[60px] max-w-[353px] grid-cols-3 grid-rows-1'
      >
        <QuizResultItem quantity={1} status='졸업단어' unit='개' src={iconGrad} />
        <QuizResultItem quantity={5} status='오답단어' unit='개' />
        <QuizResultItem quantity={80} status='정답률' unit='%' />
      </div>

      <div className='left-0 h-auto w-full desktop:absolute desktop:bg-quiz-bg desktop:pt-[24px]'>
        {' '}
        {/* questions */}
        <ul className='m-auto mb-[200px] max-w-[353px] desktop:grid desktop:max-w-[812px] desktop:grid-cols-2 desktop:gap-x-[20px] desktop:gap-y-[12px]'>
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
                    <img src={iconGrad} className='size-4' alt='graduation icon' />
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
        imgSrc={BottomSheetImg}
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

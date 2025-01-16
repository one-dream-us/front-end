import BottomSheet from '@/components/quiz/common/BottomSheet';
import { Navigate, useNavigate } from 'react-router-dom';
import QuizResultItem from '@/components/quiz/quizResult/QuizResultItem';
import correctIcon from '@/assets/p2/icon_check_right.png';
import wrongIcon from '@/assets/p2/icon_x_wrg.png';
import RandomquizResultImgMobile from '@/assets/p2/P2 에셋_2차전달/image_quiz_random102.png';
import RandomquizResultImgWeb from '@/assets/p2/P2 에셋_2차전달/image_quiz_random124(웹용).png';
import BottomSheetImg from '@/assets/p2/icon_quiz.png';
import { RANDOM_QUIZ_RESULT_KEY } from '@/constants';
import { IQuizResult } from '@/types/interface';

export default function RandomQuizResultPage() {
  const navigate = useNavigate();
  const results: IQuizResult = JSON.parse(localStorage.getItem(RANDOM_QUIZ_RESULT_KEY) as string);

  if (!results) {
    alert('올바르지 않은 접근입니다.');
    return <Navigate to={'/'} />;
  }
  return (
    <div className='m-auto'>
      <div className='mb-[16px] mt-[40px] text-center md:mt-[60px]'>
        <div className='m-auto mb-1 h-[33px] w-[156px]'>
          <h1 className='mb-1 text-[22px] font-bold leading-[160%]'>랜덤 퀴즈 완료!</h1>
        </div>
        <div className='m-auto h-[42px] min-w-[202px]'>
          <span className='text-[14px] text-custom-gray-dark'>
            직접 스크랩한 단어로 퀴즈를 풀면 <br className='block desktop:hidden' /> 학습 기록을
            저장할 수 있어요
          </span>
        </div>

        <img
          className='m-auto h-[102px] desktop:h-[124px]'
          srcSet={`${RandomquizResultImgMobile} 1439w, ${RandomquizResultImgWeb}`}
          alt='quiz result image'
        />
      </div>

      <div
        id='quiz-result-status'
        className='m-auto mb-[24px] grid h-[60px] max-w-[353px] grid-cols-3 grid-rows-1'
      >
        <QuizResultItem quantity={results.graduationCnt} status='졸업단어' unit='개' />
        <QuizResultItem quantity={results.totalWrong} status='오답단어' unit='개' />
        <QuizResultItem quantity={results.accuracyRate} status='정답률' unit='%' />
      </div>

      <div className='left-0 h-auto w-full pb-[200px] pt-[24px] desktop:absolute desktop:bg-quiz-bg'>
        <ul className='m-auto h-[352px] max-w-[352px] desktop:grid desktop:h-[216px] desktop:max-w-[812px] desktop:grid-cols-2 desktop:gap-x-[20px] desktop:gap-y-[12px]'>
          {results.resultDetails.map((item) => (
            <li
              key={item.term}
              className='mb-2 flex h-[64px] w-full items-center justify-start gap-x-3 rounded-[10px] border border-custom-gray-200 bg-white px-4 py-5 desktop:mb-0'
            >
              <img
                className='size-6'
                src={item.isCorrect ? correctIcon : wrongIcon}
                alt='status icon'
              />
              <h1 className='text-[16px] font-bold leading-[170%]'>{item.term}</h1>
            </li>
          ))}
        </ul>
      </div>
      <BottomSheet
        buttonText='단어 모으러 가기'
        buttonTextColor='text-custom-green-money'
        imgSrc={BottomSheetImg}
        titleText='나만의 퀴즈를 만들어요!'
        handleButtonClick={() => navigate('/news-list')}
      />
    </div>
  );
}

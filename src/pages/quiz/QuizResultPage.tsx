import QuizResultItem from '@/components/quiz/quizResult/QuizResultItem';
import BottomSheet from '@/components/quiz/common/BottomSheet';
import BottomSheetImg from '@/assets/p2/icon_quiz.png';
import iconGrad from '@/assets/p2/icon_grad.png';
import { NORMAL_QUIZ_RESULT_KEY } from '@/constants/constants';
import { IQuizResult } from '@/types/interface';
import { useNavigate } from 'react-router-dom';
import { createTitle } from '@/utils/quiz/quizHandlers';
import NormalQuizResultCard from '@/components/quiz/quizResult/NormalQuizResultCard';
import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';

export default function QuizResultPage() {
  const { accuracyRate, graduationCnt, resultDetails, totalWrong }: IQuizResult = JSON.parse(
    localStorage.getItem(NORMAL_QUIZ_RESULT_KEY) as string,
  );
  console.log(resultDetails);

  const navigate = useNavigate();

  /**결과에 졸업 단어가 하나라도 있는지 확인 */
  const isGraduate = resultDetails
    .map((item) => item.status)
    .some((item) => item === 'GRADUATION_NOTE');

  const { data } = useUserInfoQuery(!isGraduate);
  const title = createTitle(accuracyRate, isGraduate, !isGraduate ? data?.name : undefined);

  const handleBottomSheetClick = () =>
    accuracyRate === 100
      ? navigate('/my-word-list?tab=스크랩')
      : navigate('/my-word-list?tab=오답노트');

  return (
    <div className='m-auto'>
      <div className='mb-[16px] mt-[40px] text-center'>
        <div className='m-auto mb-1 h-[33px] min-w-[156px]'>
          <h1 className='mb-1 text-[22px] font-bold leading-[160%]'>{title?.mainTitle}</h1>
        </div>
        <div className='m-auto h-[22px] min-w-[202px]'>
          <span className='text-[14px] text-custom-gray-dark'>{title?.subTitlt}</span>
        </div>

        <img className='m-auto mb-[16px] h-[124px]' src={title?.src} alt='quiz result image' />
      </div>
      {/* quiz result status */}
      <div
        id='quiz-result-status'
        className='m-auto mb-[24px] grid h-[60px] max-w-[353px] grid-cols-3 grid-rows-1'
      >
        <QuizResultItem quantity={graduationCnt} status='졸업단어' unit='개' src={iconGrad} />
        <QuizResultItem quantity={totalWrong} status='오답단어' unit='개' />
        <QuizResultItem quantity={accuracyRate} status='정답률' unit='%' />
      </div>

      <div className='left-0 h-auto w-full desktop:absolute desktop:bg-quiz-bg desktop:pt-[24px]'>
        {/* questions */}
        <ul className='m-auto mb-[200px] max-w-[353px] desktop:grid desktop:max-w-[812px] desktop:grid-cols-2 desktop:gap-x-[20px] desktop:gap-y-[12px]'>
          {resultDetails.map((item, index) => (
            <NormalQuizResultCard key={`${item.term}_${index}`} {...item} />
          ))}
        </ul>
      </div>

      <BottomSheet
        titleText='오늘의 퀴즈 완료!'
        imgSrc={BottomSheetImg}
        buttonTextColor='text-custom-green-money'
        handleButtonClick={handleBottomSheetClick}
        buttonText={accuracyRate === 100 ? '외운 단어 확인하기' : '복습하러가기'}
      />
    </div>
  );
}

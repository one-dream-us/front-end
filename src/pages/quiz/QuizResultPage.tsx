import QuizResultItem from '@/components/quiz/quizResult/QuizResultItem';
import iconGrad from '@/assets/p2/icon_grad.png';
import { NORMAL_QUIZ_RESULT_KEY } from '@/constants/constants';
import { IQuizResult } from '@/types/interface';
import { createTitle } from '@/utils/quiz/quizHandlers';
import NormalQuizResultCard from '@/components/quiz/quizResult/NormalQuizResultCard';
import { useUserInfoQuery } from '@/hooks/auth/useUserInfoQuery';
import MissionCheckComponent from '@/components/common/MissionCheckComponent';
import { useEffect } from 'react';
import useGetWordListData from '@/hooks/myWordList/api/useGetWordListData';
import { useNavigate } from 'react-router-dom';
import ImgContainer from '@/components/common/ImgContainer';

export default function QuizResultPage() {
  const navigate = useNavigate();
  const { accuracyRate, graduationCnt, resultDetails, totalWrong }: IQuizResult = JSON.parse(
    localStorage.getItem(NORMAL_QUIZ_RESULT_KEY) as string,
  );

  /**결과에 졸업 단어가 하나라도 있는지 확인 */
  const isGraduate = resultDetails
    .map((item) => item.status)
    .some((item) => item === 'GRADUATION_NOTE');

  const { data } = useUserInfoQuery(!isGraduate);
  const title = createTitle(accuracyRate, isGraduate, !isGraduate ? data?.name : undefined);

  const { refetch: refetchScrap } = useGetWordListData('스크랩');
  const { refetch: refetchWrongNote } = useGetWordListData('오답노트');
  const { refetch: refetchGradNote } = useGetWordListData('졸업노트');

  useEffect(() => {
    refetchScrap();
    refetchWrongNote();
    refetchGradNote();
  }, []);
  return (
    <div className='m-auto'>
      <div className='mb-[16px] mt-[40px] text-center'>
        <div className='m-auto mb-1 h-[33px] min-w-[156px]'>
          <h1 className='mb-1 text-[22px] font-bold leading-[160%]'>{title?.mainTitle}</h1>
        </div>
        <div className='m-auto h-[22px] min-w-[202px]'>
          <span className='text-[14px] text-custom-gray-dark'>{title?.subTitlt}</span>
        </div>
        <ImgContainer
          className='m-auto mb-[16px] h-[124px]'
          alt='quiz result image'
          imgs={{ png: title?.src?.png as string, webp: title?.src?.webp as string }}
        />
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
        <ul className='m-auto max-w-[353px] pb-[350px] desktop:grid desktop:max-w-[812px] desktop:grid-cols-2 desktop:gap-x-[20px] desktop:gap-y-[12px] desktop:pb-0'>
          {resultDetails.map((item, index) => (
            <NormalQuizResultCard key={`${item.term}_${index}`} {...item} />
          ))}
        </ul>

        <button
          onClick={() => navigate('/my-word-list')}
          className='m-auto my-[36px] hidden h-[54px] w-[812px] items-center justify-center rounded-[10px] border bg-custom-gray-dark text-[16px] font-bold leading-170 text-custom-green-money transition-all duration-200 hover:bg-hover-80 hover:text-green-hover desktop:flex'
        >
          외운 단어 확인하기
        </button>
      </div>

      <MissionCheckComponent />
    </div>
  );
}

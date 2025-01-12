import BottomSheet from '@/components/quiz/common/BottomSheet';
import logo from '@/assets/imgs_v2/main_logo_32.png';
import { useNavigate } from 'react-router-dom';
import QuizResultItem from '@/components/quiz/quizResult/QuizResultItem';
import correctIcon from '@/assets/imgs_v2/icon_check_green.png';
import wrongIcon from '@/assets/imgs_v2/icon_X_Pink.png';
import { useStore } from 'zustand';
import quizCompleteStore from '@/store/quiz/quizCompleteStore';

export default function RandomQuizResultPage() {
  const navigate = useNavigate();
  const { result } = useStore(quizCompleteStore);

  if (!result) return <h1>err</h1>;
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

        <img className='m-auto h-[124px] border' src='' alt='quiz result image' />
      </div>

      <div
        id='quiz-result-status'
        className='m-auto mb-[24px] grid h-[60px] max-w-[353px] grid-cols-3 grid-rows-1'
      >
        <QuizResultItem quantity={result.graduationCnt} status='졸업단어' unit='개' />
        <QuizResultItem quantity={result.totalWrong} status='오답단어' unit='개' />
        <QuizResultItem quantity={result.accuracyRate} status='정답률' unit='%' />
      </div>

      <div className='left-0 min-h-screen w-full pt-[24px] desktop:absolute desktop:bg-quiz-bg'>
        <ul className='m-auto h-[216px] max-w-[352px] desktop:grid desktop:max-w-[812px] desktop:grid-cols-2 desktop:gap-x-[20px] desktop:gap-y-[12px]'>
          {result.resultDetails.map((item) => (
            <li
              key={item.term}
              className='mb-2 flex h-[64px] w-full items-center justify-start gap-x-3 rounded-[10px] border border-custom-gray-200 bg-white px-4 py-5 desktop:mb-0'
            >
              <img
                className='size-5'
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
        imgSrc={logo}
        titleText='나만의 퀴즈를 만들어요!'
        handleButtonClick={() => navigate('/contents')}
      />
    </div>
  );
}

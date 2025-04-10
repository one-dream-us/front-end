import courseIndexState from '@/store/course/courseStore';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from 'zustand';
import NewsLink from './NewsLink';
import learingDurationStore from '@/store/course/learningDurationStore';
import { useEffect } from 'react';
import { missionApi } from '@/services/missionApi';
// import { missionApi } from '@/services/missionApi';

export default function CompleteButton() {
  const { index, swiper } = useStore(courseIndexState);
  const { setTimeStamp } = useStore(learingDurationStore);
  const navigate = useNavigate();
  const { id } = useParams();
  // const { data: islogin } = useAuthCheckQuery();

  const lastIndex = index === 2;

  const handleNextButtonClick = async () => {
    try {
      if (lastIndex) {
        try {
          await missionApi.postNewsComplete();
        } catch (e) {
          console.log(e);
        }
        navigate(`/newsComplete/${id}`);
        setTimeStamp('end');
      } else {
        swiper?.slideNext();
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    setTimeStamp('start');
  }, []);
  return (
    <div className='mb-[40px] flex flex-col items-center justify-start'>
      {' '}
      <div className={lastIndex ? 'block' : 'hidden'}>
        <NewsLink />
      </div>
      <div className='mt-[24px] flex h-[44px] w-full items-center justify-center gap-x-2'>
        <button
          onClick={() => swiper?.slidePrev()}
          className='flex h-full w-full items-center justify-center rounded-[4px] bg-custom-gray-300 text-[14px] font-bold text-custom-gray-dark transition-all duration-200 hover:bg-hover-30'
        >
          이전
        </button>
        <button
          id={`${lastIndex ? 'done_learning_cta' : 'done_learning_crey'}`}
          onClick={handleNextButtonClick}
          className={`flex h-full w-full items-center justify-center rounded-[4px] bg-custom-gray-dark text-[14px] font-bold transition-all duration-200 hover:bg-hover-80 ${lastIndex ? 'text-custom-green-money hover:text-green-hover' : 'text-white'}`}
        >
          {lastIndex ? '학습 완료하기' : '다음'}
        </button>
      </div>
    </div>
  );
}

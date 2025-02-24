import useLatestNews from '@/hooks/dashboard/useLatestNews';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import flameImg from '@/assets/P2_5d/userinfo_icon_flame.png';
import checkStarImg from '@/assets/P2_5d/icon_check_star.png';
import { useState } from 'react';
import useTodaysMissionStatus from '@/hooks/mission/useTodaysMissionStatus';

export default function MissionCheckComponent({ clear }: { clear: boolean }) {
  const { latestNews } = useLatestNews();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  const handleNavigateMission = () => {
    if (pathname.includes('newsComplete')) {
      // 현재 페이지가 학습 완료 페이지면 퀴즈로 이동
      navigate('/quiz');
    } else {
      // 아니면 (===퀴즈 결과 페이지면) 최신 뉴스 컨텐츠로 이동
      const latestNewsPage = `/news/${latestNews?.newsId}`;
      navigate(latestNewsPage);
    }
  };

  return (
    <div>
      {visible && (
        <div className='hidden desktop:block'>
          <MissionCheckModal
            clear={clear}
            handleNavigateMission={handleNavigateMission}
            handleCloseModal={() => setVisible(false)}
          />
        </div>
      )}
      <div className='block desktop:hidden'>
        <MissionCheckBottomSheet clear={clear} handleNavigateMission={handleNavigateMission} />
      </div>
    </div>
  );
}

const MissionCheckBottomSheet = ({
  clear,
  handleNavigateMission,
}: {
  clear: boolean;
  handleNavigateMission: () => void;
}) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ y: 150 }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      className='fixed bottom-0 left-0 w-full rounded-t-[10px] bg-custom-gray-lighter drop-shadow-[0_-4px_10px_rgba(0,0,0,0.15)]'
    >
      <div className='m-auto w-[342px] py-[24px]'>
        <div className='mb-[16px] flex items-center justify-start gap-x-2 md:justify-center'>
          <img src={flameImg} alt='title logo' className='h-[27px] w-[20px]' />
          <div className='text-[22px] font-bold leading-[100%] text-custom-gray-dark'>
            {`오늘의 미션 ${clear ? '완료' : ''}`}
          </div>
        </div>

        <MissionCheckList />

        <div className='mt-[16px] flex w-full flex-col gap-y-2'>
          {clear ? (
            <>
              <button
                onClick={() => navigate('/profile')}
                className={`flex h-[48px] w-full items-center justify-center whitespace-nowrap rounded-[10px] bg-custom-gray-dark py-3 transition-all duration-200 hover:bg-hover-80 hover:text-green-hover`}
              >
                <span className='text-[14px] font-bold leading-120 text-custom-green-money'>
                  미션 캘린더 확인하기
                </span>
              </button>

              <button
                onClick={() => navigate('/news-list')}
                className={`flex h-[48px] w-full items-center justify-center whitespace-nowrap rounded-[10px] bg-[#DEDEDE] py-3 transition-all duration-200 hover:bg-hover-30 hover:text-green-hover`}
              >
                <span className='text-[14px] font-bold leading-120 text-[#626262]'>
                  추가 학습 하러가기
                </span>
              </button>
            </>
          ) : (
            <button
              onClick={handleNavigateMission}
              className={`flex h-[48px] w-full items-center justify-center whitespace-nowrap rounded-[10px] bg-custom-gray-dark py-3 transition-all duration-200 hover:bg-hover-80 hover:text-green-hover`}
            >
              <span className='text-[14px] font-bold leading-120 text-custom-green-money'>
                다른 미션 하러가기
              </span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const MissionCheckModal = ({
  clear,
  handleNavigateMission,
  handleCloseModal,
}: {
  clear: boolean;
  handleNavigateMission: () => void;
  handleCloseModal: () => void;
}) => {
  const navigate = useNavigate();
  return (
    <div className='fixed left-0 top-0 z-[1000] flex h-dvh w-full items-center justify-center bg-black bg-opacity-50'>
      <div className='flex flex-col'>
        <div className='h-[205px] w-[373px] rounded-t-[10px] bg-white px-[46px] py-[28px]'>
          <div className='mb-[24px] flex items-center justify-center gap-x-2'>
            <img src={flameImg} alt='title logo' className='h-[21px] w-[16px]' />
            <div className='text-[20px] font-bold text-custom-gray-dark'>{`오늘의 미션 ${clear ? '완료' : ''}`}</div>
          </div>

          <MissionCheckList />
        </div>

        <div className='flex h-[48px] w-[373px] items-center justify-center'>
          <>
            {clear ? (
              <>
                <button
                  onClick={handleCloseModal}
                  className={`flex h-full w-1/2 items-center justify-center whitespace-nowrap rounded-bl-[10px] bg-[#DEDEDE] py-3 transition-all duration-200 hover:bg-hover-30`}
                >
                  <span className='text-[14px] font-bold leading-120 text-[#626262]'>닫기</span>
                </button>
                <button
                  onClick={() => navigate('/profile')}
                  className={`flex h-full w-1/2 items-center justify-center whitespace-nowrap rounded-br-[10px] bg-custom-gray-dark py-3 transition-all duration-200 hover:bg-hover-80 hover:text-green-hover`}
                >
                  <span className='text-[14px] font-bold leading-120 text-custom-green-money'>
                    미션 캘린더 확인하기
                  </span>
                </button>
              </>
            ) : (
              <button
                onClick={handleNavigateMission}
                className={`h- fullw-full flex items-center justify-center whitespace-nowrap rounded-b-[10px] bg-custom-gray-dark py-3 text-custom-green-money transition-all duration-200 hover:bg-hover-80 hover:text-green-hover`}
              >
                <span className='text-[14px] font-bold leading-120 text-custom-green-money'>
                  다른 미션 하러가기
                </span>
              </button>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

const MissionCheckList = () => {
  const { data } = useTodaysMissionStatus();

  const { pathname } = useLocation();
  const isNewsPage = pathname.includes('newsComplete');
  const isQuizPage = pathname.includes('quiz-result');

  return (
    <div className='mission-check-list'>
      <div className='flex w-full items-center justify-between py-[10px]'>
        <span className='text-[16px] font-bold text-custom-gray-dark'>머니뉴스 학습하기</span>
        <div className='h-[30px] w-[30px] rounded-full border border-[#E3E3E3]'>
          {(isNewsPage || data?.news) && (
            <motion.img
              animate={{ scale: [0, 1.5, 1.1], transition: { duration: 0.8, delay: 0.3 } }}
              src={checkStarImg}
              alt='mission complete image'
              className='h-full w-full'
            />
          )}
        </div>
      </div>
      <div className='flex w-full items-center justify-between py-[10px]'>
        <span className='text-[16px] font-bold text-custom-gray-dark'>오늘의 퀴즈 풀기</span>
        <div className='h-[30px] w-[30px] rounded-full border border-[#E3E3E3]'>
          {(data?.quiz || isQuizPage) && (
            <motion.img
              animate={{ scale: [0, 1.5, 1.1], transition: { duration: 0.8, delay: 0.3 } }}
              src={checkStarImg}
              alt='mission complete image'
              className='h-full w-full'
            />
          )}
        </div>
      </div>
    </div>
  );
};

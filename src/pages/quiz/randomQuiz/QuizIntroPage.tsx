import cony_web from '@/assets/P2_5d/cony_web_img.png';
import cony_tab from '@/assets/P2_5d/cony_TAB_img.png';
import { useState } from 'react';
export default function QuizIntroPage() {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`fixed left-0 top-0 z-50 min-h-screen w-full bg-quiz-bg ${hidden && 'invisible'}`}
    >
      <div className='m-auto mt-[100px] desktop:mt-[160px]'>
        <div className='m-auto mb-[20px] min-w-[236px] text-center md:mb-[60px] desktop:mb-[22px]'>
          <h1 className='mb-[8px] text-[22px] font-bold text-[#222222]'>
            이게머니의 첫 퀴즈는 <br />
            랜덤퀴즈를 준비해 봤어요!
          </h1>
          <span className='text-[14px] leading-160 text-custom-gray-dark'>
            퀴즈가 어떻게 출제되는지 체험해 보고
            <br />
            나의 실력을 테스트해 봐요!
          </span>
        </div>

        {/* mobile */}
        {/* <img
          className='absolute bottom-0 left-0 right-0 m-auto md:hidden'
          src={cony_mobile}
          alt='cony bg'
        /> */}

        {/* web */}
        <div className='chat-bubble relative m-auto h-[270px] w-[343px] rounded-[12px] bg-white md:block md:w-[353px] desktop:w-[510px]'>
          <img
            className='absolute bottom-0 left-0 md:hidden desktop:block'
            src={cony_web}
            alt='cony'
          />
          <img className='absolute bottom-0 left-0 desktop:hidden' src={cony_tab} alt='cony' />
        </div>

        <button
          onClick={() => setHidden(true)}
          className={`fixed bottom-[40px] left-0 right-0 m-auto h-[54px] w-[343px] rounded-[10px] bg-custom-gray-dark text-custom-gray-lighter hover:bg-hover-80 desktop:bottom-[44px] desktop:h-[54px] desktop:w-[772px]`}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}

import onboardingImg_cony_mobile from '@/assets/학습완료 튜토리얼 모달 이미지/[Mobile] 학습 완료 튜토리얼-코니 이미지.png';
import onboardingImg_cony_tab from '@/assets/학습완료 튜토리얼 모달 이미지/Tab] 학습 완료 튜토리얼-코니 이미지.png';
import onboardingImg_scrap_mobile from '@/assets/학습완료 튜토리얼 모달 이미지/[Mobile] 학습 완료 튜토리얼-단어 스크랩 이미지.png';
import onboardingImg_scrap_tab from '@/assets/학습완료 튜토리얼 모달 이미지/tab] 학습 완료 튜토리얼-단어 스크랩 이미지.png';
import useCheckShowOnboarding from '@/hooks/newDetail/useCheckShowOnboarding';
import { SHOW_NEWS_COMPLETE_ONBOARDING_KEY } from '@/constants/constants';

export default function NewsCompleteOnboarding() {
  const { setShowOnboarding, closeModal, visible } = useCheckShowOnboarding(
    SHOW_NEWS_COMPLETE_ONBOARDING_KEY,
  );

  const handleCloseOnboaring = () => {
    closeModal();
    setShowOnboarding('false');
  };
  return (
    <>
      {visible && (
        <div className='fixed left-0 top-0 z-[1000] flex h-screen w-full items-center justify-center bg-black bg-opacity-50'>
          <div className='w-[280px] drop-shadow-[0_6px_12px_rgba(0,0,0,0.3)] md:w-[320px]'>
            <div
              className={`h-[245px] w-full rounded-t-[10px] bg-custom-gray-lighter py-[20px] pt-[28px] md:h-[272px]`}
            >
              <img
                className='m-auto mb-[12px] w-[26px] md:w-[30px]'
                srcSet={`${onboardingImg_cony_mobile} 768w, ${onboardingImg_cony_tab} 769w`}
                sizes='(max-width: 768px) 26px, 30px'
                src={onboardingImg_cony_mobile}
                alt='cony image'
              />

              <h1 className='m-auto mb-[16px] text-center text-[16px] font-bold text-custom-gray-dark'>
                단어를 스크랩하고 <br />
                단어장에서 퀴즈로 복습해요!
              </h1>

              <img
                className='m-auto mb-[12px] w-[212px] md:w-[248px]'
                srcSet={`${onboardingImg_scrap_mobile} 768w, ${onboardingImg_scrap_tab} 769w`}
                sizes='(max-width: 768px) 212px, 248px'
                src={onboardingImg_scrap_mobile}
                alt='scrap image'
              />
            </div>

            <button
              onClick={handleCloseOnboaring}
              className={`z-[100] h-[48px] w-full rounded-b-[10px] bg-custom-gray-dark text-[14px] font-bold text-white transition-all duration-200 hover:bg-hover-80`}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </>
  );
}

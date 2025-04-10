import closeIcon from '@/assets/p2/close.svg';
import useOnboarding from '@/hooks/dashboard/useOnboarding';
import { onboardingSteps } from '@/constants/constants';

export default function OnBoarding({
  showOnboarding,
  setShowOnboarding,
}: {
  showOnboarding: boolean;
  setShowOnboarding: (onBoardingStatus: boolean) => void;
}) {
  const onboardingStepsLen = onboardingSteps.length;
  const { currentStep, handleNext, setShowTooltip, handleCheck } = useOnboarding({
    onboardingStepsLen,
    setShowOnboarding,
  });

  if (!showOnboarding) return null;
  const { mobileImage, tabletImage, title, description } = onboardingSteps[currentStep];

  return (
    <>
      <section className='fixed inset-0 z-[9990] flex justify-center bg-black bg-opacity-60'>
        <div className='relative mx-auto w-[323px] md:w-[520px]'>
          <div className='absolute left-0 top-[50px] flex items-center gap-x-1'>
            <input type='checkbox' className='checkbox h-4 w-4' onChange={handleCheck} />
            <span className='text-sm text-custom-gray-300'>다시 보지 않기</span>
          </div>
          <button
            type='button'
            className='absolute right-0 top-[43px] h-5 w-5'
            aria-label='온보딩 모달 닫기'
            onClick={() => {
              setShowOnboarding(false);
              setShowTooltip(true);
              setTimeout(() => setShowTooltip(false), 3000);
            }}
          >
            <img src={closeIcon} alt='온보딩 모달 닫기' />
          </button>
          <picture>
            <source srcSet={tabletImage} media='(min-width: 768px)' />
            <img
              src={mobileImage}
              alt={`온보딩 스텝 ${currentStep + 1}`}
              className='mt-[74px] w-full rounded-2xl'
            />
          </picture>
        </div>
      </section>
      <section className='fixed bottom-0 z-[9995] h-[253px] w-full bg-white px-4 pb-[38px] pt-[30px] text-center shadow-top'>
        <div className='mx-auto flex w-[343px] flex-col items-center md:w-[353px] desktop:w-[812px]'>
          <h1 className='mb-3 text-lg font-bold text-custom-gray-dark'>{title}</h1>
          <h2
            className='mb-4 text-sm leading-160 text-custom-gray-700'
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className='mb-[30px] flex gap-2'>
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-1.5 rounded-full ${
                  index === currentStep ? 'bg-active-green' : 'bg-inactive'
                }`}
              />
            ))}
          </div>
          <button
            type='button'
            className='primary-btn h-12 w-full rounded-[10px]'
            onClick={handleNext}
          >
            {currentStep === onboardingSteps.length - 1 ? '시작하기' : '다음'}
          </button>
        </div>
      </section>
    </>
  );
}

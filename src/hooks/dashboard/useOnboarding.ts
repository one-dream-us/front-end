import { useState, useEffect } from 'react';
import { onboardingSteps } from '@/constants';
import useImagePreloader from '../common/useImagePreloader';
// import useCheckFirstVisit from './useCheckFirstVisit';
import useKeywordTooltip from '@/store/useKeywordTooltip';
import useDisableScroll from '../common/useDisableScroll';

export default function useOnboarding({
  onboardingStepsLen,
  showOnboarding,
  setShowOnboarding,
}: {
  onboardingStepsLen: number;
  showOnboarding: boolean;
  setShowOnboarding: (onBoardingStatus: boolean) => void;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isTablet, setIsTablet] = useState(false);
  // useCheckFirstVisit(setShowOnboarding);

  useEffect(() => {
    const updateIsTablet = () => {
      setIsTablet(window.innerWidth >= 768);
    };

    updateIsTablet();
    window.addEventListener('resize', updateIsTablet);

    return () => {
      window.removeEventListener('resize', updateIsTablet);
    };
  }, []);

  const imageSrcs = onboardingSteps.map((step) => (isTablet ? step.tabletImage : step.mobileImage));

  useImagePreloader(imageSrcs);

  const { setShowTooltip } = useKeywordTooltip();
  useDisableScroll(showOnboarding);
  const handleNext = () => {
    if (currentStep < onboardingStepsLen - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowOnboarding(false);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }
  };
  return { currentStep, handleNext, setShowTooltip };
}

import { useState } from 'react';
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
  // useCheckFirstVisit(setShowOnboarding);

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

import React, { useState } from 'react';
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
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) localStorage.setItem('hasSeenOnboarding', 'true');
    else localStorage.setItem('hasSeenOnboarding', 'false');
  };

  return { currentStep, handleNext, setShowTooltip, handleCheck };
}

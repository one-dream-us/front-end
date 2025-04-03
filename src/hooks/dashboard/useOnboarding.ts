import React, { useState } from 'react';
import useTooltipState from '@/store/useTooltipState';
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
  const { setShowTooltip } = useTooltipState();
  useDisableScroll(showOnboarding, localStorage.getItem('hasCheckedOnboarding') === 'true');

  const handleNext = () => {
    if (currentStep < onboardingStepsLen - 1) {
      setCurrentStep((prev) => prev + 1);
      if (localStorage.getItem('hasCheckedOnboarding')) {
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 3000);
      }
    } else {
      setShowOnboarding(false);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }
  };
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      localStorage.setItem('hasCheckedOnboarding', 'true');
      document.body.style.overflow = '';
    } else localStorage.removeItem('hasCheckedOnboarding');
  };

  return { currentStep, handleNext, setShowTooltip, handleCheck };
}

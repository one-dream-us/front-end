import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';
import useCheckFirstVisit from './useCheckFirstVisit';

export default function useOnboarding({
  onboardingStepsLen,
  setShowOnboarding,
}: {
  onboardingStepsLen: number;
  setShowOnboarding: Dispatch<SetStateAction<boolean>>;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  // useCheckFirstVisit(setShowOnboarding);

  const handleNext = () => {
    if (currentStep < onboardingStepsLen - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowOnboarding(false);
    }
  };
  return { currentStep, setCurrentStep, handleNext };
}

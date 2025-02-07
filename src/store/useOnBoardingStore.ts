import { create } from 'zustand';

interface onboardingState {
  showOnboarding: boolean;
  setShowOnboarding: (onBoardingStatus: boolean) => void;
}

export const useOnboardingStore = create<onboardingState>((set) => ({
  showOnboarding: true,
  setShowOnboarding: (onboardingStatus) => set({ showOnboarding: onboardingStatus }),
}));

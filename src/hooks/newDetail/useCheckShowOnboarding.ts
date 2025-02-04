import { useEffect, useState } from 'react';

const useCheckShowOnboarding = (key: string) => {
  const [showOnboarding, setShowOnboarding] = useState(localStorage.getItem(key) ?? 'true');
  useEffect(() => {
    localStorage.setItem(key, showOnboarding);
  }, [showOnboarding]);

  return { showOnboarding, setShowOnboarding };
};

export default useCheckShowOnboarding;

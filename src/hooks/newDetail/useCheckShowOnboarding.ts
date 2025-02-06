import { useEffect, useState } from 'react';

const useCheckShowOnboarding = (key: string) => {
  const [visible, setVisible] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(localStorage.getItem(key) ?? 'true');

  const closeModal = () => setVisible(false);

  useEffect(() => {
    localStorage.setItem(key, showOnboarding);
  }, [showOnboarding]);

  return { showOnboarding, setShowOnboarding, visible, closeModal };
};

export default useCheckShowOnboarding;

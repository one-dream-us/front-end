import { useEffect, Dispatch, SetStateAction } from 'react';

export default function useFirstLogin(setShowTutorial: Dispatch<SetStateAction<boolean>>) {
  useEffect(() => {
    const isFirstLogin = localStorage.getItem('isTutorialCompleted');

    if (!isFirstLogin) {
      setShowTutorial(true);
      localStorage.setItem('isTutorialCompleted', 'true');
    }
  }, []);
}

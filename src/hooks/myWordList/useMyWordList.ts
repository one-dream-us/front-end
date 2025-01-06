import { useState } from 'react';
import useFirstLogin from './useFirstLogin';

export default function useMyWordList() {
  const [showTutorial, setShowTutorial] = useState(false);
  useFirstLogin(setShowTutorial);
  return showTutorial;
}

import { useEffect } from 'react';
import { MyWordListMenuType } from '@/types/types';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';

export default function useWordListContentLogic({
  activeMenu,
  showTutorial,
  setShowTooltip,
}: {
  activeMenu: MyWordListMenuType;
  showTutorial: boolean;
  setShowTooltip: Dispatch<SetStateAction<boolean>>;
}) {
  useEffect(() => {
    if (activeMenu === '히스토리' && !showTutorial) {
      setShowTooltip(true);

      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [activeMenu]);

  const handleScroll = () => {
    setShowTooltip(false);
  };
  return handleScroll;
}

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MyWordListMenuType } from '@/types/types';
import useFirstLogin from './useFirstLogin';

export default function useMyWordList() {
  const [showTutorial, setShowTutorial] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  useFirstLogin;

  const parameters: Record<string, MyWordListMenuType> = {
    SCRAP: '스크랩',
    KEY_NOTE: '핵심노트',
    WRONG_ANSWER_NOTE: '오답노트',
    GRADUATION_NOTE: '졸업노트',
  };

  const queryParams = new URLSearchParams(location.search);
  const initialMenuKey = queryParams.get('tab') || 'SCRAP';
  const initialMenu = parameters[initialMenuKey ?? ''] || '스크랩';

  const [activeMenu, setActiveMenu] = useState<MyWordListMenuType>(initialMenu);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const currentParams = new URLSearchParams(location.search);
    const currentTab = currentParams.get('tab')?.toUpperCase();

    if (parameters[currentTab ?? ''] !== activeMenu) {
      currentParams.set(
        'tab',
        Object.keys(parameters).find((key) => parameters[key] === activeMenu) || 'SCRAP',
      );
      navigate({ search: currentParams.toString() }, { replace: true });
    }
  }, [activeMenu, location.search, navigate, parameters]);

  return {
    showTutorial,
    setShowTutorial,
    activeMenu,
    setActiveMenu,
    showTooltip,
    setShowTooltip,
    showModal,
    setShowModal,
  };
}

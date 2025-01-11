import { useState, useEffect } from 'react';
import useFirstLogin from './useFirstLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import { MyWordListMenuType } from '@/types/types';

export default function useMyWordList() {
  const [showTutorial, setShowTutorial] = useState(false);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialMenu = queryParams.get('tab') || 'scrap';
  const parameters: Record<string, MyWordListMenuType> = {
    scrap: '스크랩',
    bookmark: '핵심노트',
    incorrect: '오답노트',
    graduation: '졸업노트',
  };
  const [activeMenu, setActiveMenu] = useState<MyWordListMenuType>(
    parameters[initialMenu] ?? '스크랩',
  );
  const navigate = useNavigate();

  useFirstLogin(setShowTutorial);

  useEffect(() => {
    const currentParams = new URLSearchParams(location.search);
    if (currentParams.get('tab') !== activeMenu) {
      currentParams.set('tab', activeMenu);
      navigate({ search: currentParams.toString() }, { replace: true });
    }
  }, [activeMenu, location.search, navigate]);

  return { showTutorial, setShowTutorial, activeMenu, setActiveMenu };
}

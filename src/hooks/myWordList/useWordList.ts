import useGetWordList from './useGetWordList';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { MyWordListMenuType } from '@/types/types';
import { Dispatch, SetStateAction } from 'react';

export default function useWordList<T extends MyWordListMenuType>(
  activeMenu: T,
  setShowTooltip: Dispatch<SetStateAction<boolean>>,
  showTutorial: boolean,
) {
  const { title, wordList, isLoading } = useGetWordList(activeMenu);
  const wordNum = wordList.length;
  const navigate = useNavigate();

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeMenu === '스크랩' && !showTutorial) {
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
  return {
    title,
    wordList: wordList,
    wordNum,
    navigate,
    listRef,
    handleScroll,
    isLoading,
  };
}

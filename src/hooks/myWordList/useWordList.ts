import useGetWordList from './useGetWordList';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { MyWordListMenuType } from '@/types/types';

export default function useWordList<T extends MyWordListMenuType>(activeMenu: T) {
  const { title, wordList, isLoading } = useGetWordList(activeMenu);
  const wordNum = wordList.length;
  const navigate = useNavigate();
  const [showTooltip, setShowTooltip] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (activeMenu === '스크랩') {
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
    showTooltip,
    listRef,
    handleScroll,
    isLoading,
  };
}

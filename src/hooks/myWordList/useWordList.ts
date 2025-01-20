import useGetWordList from './useGetWordList';
import { MyWordListMenuType } from '@/types/types';

export default function useWordList(activeMenu: MyWordListMenuType) {
  const { title, wordList, isLoading } = useGetWordList(activeMenu);
  const wordNum = wordList.length;

  return {
    title,
    wordList: wordList,
    wordNum,
    isLoading,
  };
}

import { MyWordListMenuType } from '@/types/types';
import useGetWordListData from './api/useGetWordListData';

export default function useWordList(activeMenu: MyWordListMenuType) {
  const title = activeMenu === '스크랩' ? '스크랩 수' : '단어 수';
  const { wordList, isLoading } = useGetWordListData(activeMenu);
  const wordNum = wordList.length;

  return {
    title,
    wordList: wordList,
    wordNum,
    isLoading,
  };
}

import { MyWordListMenuType } from '@/types/types';
import useGetWordListData from './api/useGetWordListData';

export default function useGetWordList(activeMenu: MyWordListMenuType) {
  const title = activeMenu === '스크랩' ? '스크랩 수' : '단어 수';
  const { wordList, isLoading } = useGetWordListData(activeMenu);
  return {
    title,
    wordList,
    isLoading,
  };
}

import { useNavigate } from 'react-router-dom';
import useGetWordListData from './api/useGetWordListData';

export default function useProfileSectionLogic(historyCnt: number) {
  const randomTexts = [
    '오늘의 머니뉴스 보셨나요? 👀',
    '경제 용어가 차곡차곡 쌓이고 있어요!',
    '북마크를 하면, 퀴즈에서 우선 출제돼요!',
  ];
  const text =
    historyCnt >= 3
      ? '준비된 퀴즈를 풀어볼까요?'
      : randomTexts[Math.floor(Math.random() * randomTexts.length)];
  const mobileStatusWidth = Math.round(historyCnt * 54.3);
  const tabStatusWidth = Math.round(historyCnt * 58.3);
  const navigate = useNavigate();
  const { wrongNoteListLen } = useGetWordListData('오답노트');

  return { text, mobileStatusWidth, tabStatusWidth, navigate, wrongNoteListLen };
}

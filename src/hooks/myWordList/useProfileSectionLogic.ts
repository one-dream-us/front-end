import { useNavigate } from 'react-router-dom';
import useGetWordListData from './api/useGetWordListData';

export default function useProfileSectionLogic(totalKeyNote: number) {
  const text =
    totalKeyNote >= 3 ? '준비된 퀴즈를 풀어볼까요?' : '핵심노트 3개 만들고 퀴즈를 풀어요!';
  const mobileStatusWidth = Math.round(totalKeyNote * 54.3);
  const tabStatusWidth = Math.round(totalKeyNote * 58.3);
  const navigate = useNavigate();
  const { wrongNoteListLen } = useGetWordListData('오답노트');

  return { text, mobileStatusWidth, tabStatusWidth, navigate, wrongNoteListLen };
}

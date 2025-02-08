import { useNavigate } from 'react-router-dom';
import useGetWordListData from './api/useGetWordListData';

export default function useProfileSectionLogic(totalKeyNote: number) {
  const text =
    totalKeyNote >= 3 ? '준비된 퀴즈를 풀어볼까요?' : '3개의 핵심노트를 통해 퀴즈를 풀어보세요 !';
  const progressBarWidth = totalKeyNote * 80;
  const navigate = useNavigate();
  const { wrongNoteListLen } = useGetWordListData('오답노트');

  return { text, progressBarWidth, navigate, wrongNoteListLen };
}

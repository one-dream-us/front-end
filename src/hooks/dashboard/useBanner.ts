import { useLoginStore } from '@/store/useIsLoginStore';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import useGetWordListData from '../myWordList/api/useGetWordListData';
import useCheckFirstQuiz from './useCheckFirstQuiz';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function useBanner() {
  const { isLogin } = useLoginStore();
  const { setIsOpen } = useLoginConfirmModalState();
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    draggable: true,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          swipe: false,
          draggable: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          swipe: true,
          draggable: false,
        },
      },
    ],
  };
  const { keyNoteListLen } = useGetWordListData('핵심노트');
  const { isFirstQuizAttempt } = useCheckFirstQuiz();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [isKeynote, setIsKeynote] = useState(false);

  return {
    isLogin,
    setIsOpen,
    settings,
    keyNoteListLen,
    isFirstQuizAttempt,
    navigate,
    modalOpen,
    setModalOpen,
    isKeynote,
    setIsKeynote,
  };
}

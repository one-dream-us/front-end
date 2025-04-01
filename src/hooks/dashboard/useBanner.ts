import { useLoginStore } from '@/store/useIsLoginStore';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import useGetWordListData from '../myWordList/api/useGetWordListData';
import useCheckFirstQuiz from './useCheckFirstQuiz';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function useBanner() {
  const { isLogin } = useLoginStore();
  const { setIsOpen, setIsNavigate } = useLoginConfirmModalState();

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
    beforeChange: (next: number) => {
      handleSlideChange(next);
    },
    afterChange: (index: number) => {
      handleSlideChange(index);
    },
  };

  const handleSlideChange = (currentSlide: number) => {
    const allSlides = document.querySelectorAll('.slick-slide');

    allSlides.forEach((slide, index) => {
      const button = slide.querySelector('button');

      if (button) {
        if (index === currentSlide) {
          button.setAttribute('tabindex', '0');
          slide.setAttribute('aria-hidden', 'false');
        } else {
          button.setAttribute('tabindex', '-1');
          slide.setAttribute('aria-hidden', 'true');
        }
      }
    });
  };

  const { keyNoteListLen } = useGetWordListData('북마크');
  const { wordList } = useGetWordListData('히스토리');
  const isKeynote = keyNoteListLen < 3 && wordList.length >= 3;
  const { isFirstQuizAttempt } = useCheckFirstQuiz();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  return {
    isLogin,
    setIsOpen,
    settings,
    isKeynote,
    isFirstQuizAttempt,
    navigate,
    modalOpen,
    setModalOpen,
    keyNoteListLen,
    setIsNavigate,
  };
}

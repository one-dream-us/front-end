import { useLoginStore } from '@/store/useIsLoginStore';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import useGetWordListData from '../myWordList/api/useGetWordListData';
import useIsFirstQuiz from '../myWordList/api/useIsFirstQuiz';
import { useNavigate } from 'react-router-dom';

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
  const { isFirstQuiz } = useIsFirstQuiz();
  const navigate = useNavigate();

  return {
    isLogin,
    setIsOpen,
    settings,
    isFirstQuiz,
    navigate,
    keyNoteListLen,
    setIsNavigate,
  };
}

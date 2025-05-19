import Slider from 'react-slick';
import { Banners } from '@/constants/constants';
import useBanner from '@/hooks/dashboard/useBanner';
import NotificationModal from './NotificationModal';
import { handleBannerClick } from '@/utils/dashboardUtils';
import { Dispatch, SetStateAction } from 'react';

export default function Banner({
  latestNewsId,
  modalOpen,
  setModalOpen,
}: {
  latestNewsId: number;
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { isLogin, setIsOpen, settings, isFirstQuiz, navigate, keyNoteListLen, setIsNavigate } =
    useBanner();

  return (
    <section className='slick-list w-full overflow-hidden desktop:mb-7'>
      <Slider {...settings}>
        {Banners.map((banner, index) => {
          return (
            <div key={index} className='slick-slide'>
              <button
                id={`${index === 0 ? 'banner_news' : index === 1 ? 'banner_wordlist' : 'banner_quiz'}`}
                rel='noopener noreferrer'
                onClick={() =>
                  handleBannerClick({
                    index,
                    isLogin,
                    isFirstQuiz,
                    keyNoteListLen,
                    navigate,
                    setIsOpen,
                    setModalOpen,
                    latestNewsId,
                    setIsNavigate,
                  })
                }
              >
                <picture>
                  <source srcSet={banner.webImage} media='(min-width: 1440px)' />
                  <source
                    srcSet={banner.tabImage}
                    media='(min-width: 768px) and (max-width: 1439px)'
                  />
                  <img
                    src={banner.mobileImage}
                    alt={`배너 ${index + 1}`}
                    className='h-[150px] w-full desktop:h-[180px]'
                  />
                </picture>
              </button>
            </div>
          );
        })}
      </Slider>
      <NotificationModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </section>
  );
}

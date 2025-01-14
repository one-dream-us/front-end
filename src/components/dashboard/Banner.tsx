import Slider from 'react-slick';
import { Banners } from '@/constants';
import useBanner from '@/hooks/dashboard/useBanner';
import NotificationModal from './NotificationModal';
import { handleBannerClick } from '@/utils/dashboardUtils';

export default function Banner({ latestNewsId }: { latestNewsId: number }) {
  const {
    isLogin,
    setIsOpen,
    settings,
    isKeynote,
    isFirstQuizAttempt,
    navigate,
    modalOpen,
    setModalOpen,
    keyNoteListLen,
  } = useBanner();

  return (
    <section className='mx-auto mb-10 mt-3 w-[347px] overflow-hidden md:w-[357px] desktop:mb-7 desktop:w-[814px]'>
      <Slider {...settings}>
        {Banners.map((banner, index) => {
          return (
            <div key={index} className='slick-slide'>
              <button
                rel='noopener noreferrer'
                onClick={() =>
                  handleBannerClick({
                    index,
                    isLogin,
                    isFirstQuizAttempt,
                    keyNoteListLen,
                    navigate,
                    setIsOpen,
                    setModalOpen,
                    latestNewsId,
                  })
                }
              >
                <picture>
                  <source srcSet={banner.webImage} media='(min-width: 1440px)' />
                  <source srcSet={banner.tabImage} media='(min-width: 768px)' />
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
      <NotificationModal modalOpen={modalOpen} isKeynote={isKeynote} setModalOpen={setModalOpen} />
    </section>
  );
}

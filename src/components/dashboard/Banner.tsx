import Slider from 'react-slick';
import { Banners } from '@/constants';
import { Link } from 'react-router-dom';
import useBanner from '@/hooks/dashboard/useBanner';
import NotificationModal from './NotificationModal';
import { handleBannerClick } from '@/utils/dashboardUtils';
export default function Banner() {
  const {
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
  } = useBanner();
  return (
    <div className='mx-auto mt-3.5 w-[347px] overflow-hidden md:w-[357px] desktop:w-[814px]'>
      <Slider {...settings}>
        {Banners.map((banner, index) => {
          return (
            <div key={index} className='slick-slide'>
              <Link
                to={banner.url}
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
                    setIsKeynote,
                  })
                }
              >
                <picture>
                  <source srcSet={banner.webImage} media='(min-width: 1440px)' />
                  <img
                    src={banner.mobileImage}
                    alt={`배너 ${index + 1}`}
                    className='h-[150px] w-full desktop:h-[180px]'
                  />
                </picture>
              </Link>
            </div>
          );
        })}
      </Slider>
      <NotificationModal modalOpen={modalOpen} isKeynote={isKeynote} setModalOpen={setModalOpen} />
    </div>
  );
}

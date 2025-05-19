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
    <section className='w-full overflow-hidden'>
      <Slider {...settings}>
        {Banners.map((banner, index) => {
          return (
            <div key={index} className='desktop:px-[1px]'>
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
                    className='h-[150px] w-[343px] overflow-hidden object-cover md:w-[353px] desktop:h-[180px] desktop:w-[812px]'
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

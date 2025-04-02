import useNewsListLogic from '@/hooks/newsList/useNewsListLogic';
import { News } from '@/types/interface';
import NewsCard from '@/components/common/NewsCard';
import quizBannerM from '@/assets/p2/P2 에셋_2차전달/quiz banner_mobile03.png';
import quizBannerT from '@/assets/p2/P2 에셋_2차전달/quiz banner_tab03.png';
import quizBannerW from '@/assets/p2/P2 에셋_2차전달/quiz banner_web03.png';
import NotificationModal from '@/components/dashboard/NotificationModal';
import { handleQuizBannerClick } from '@/utils/dashboardUtils';
import useImagePreloader from '@/hooks/common/useImagePreloader';

export default function NewsList() {
  const {
    latestNews,
    newsList,
    isLogin,
    navigate,
    setIsOpen,
    keyNoteListLen,
    isFirstQuizAttempt,
    modalOpen,
    setModalOpen,
    totalElements,
    setIsNavigate,
  } = useNewsListLogic();
  useImagePreloader([quizBannerM, quizBannerT, quizBannerW]);

  return (
    <div className='mx-auto mb-[37px] mt-10 flex w-[343px] flex-col md:mb-8 md:w-[353px] desktop:mb-40 desktop:w-[812px]'>
      <section className='flex flex-col'>
        <div className='mb-[18px] flex justify-between'>
          <h1 className='text-[22px] font-bold text-custom-black'>머니 뉴스</h1>
          <span className='text-xs font-medium leading-170 text-custom-gray-700'>
            콘텐츠 수<span className='ml-2 font-bold'>{totalElements}</span>
          </span>
        </div>
        <h2 className='mb-3 text-lg font-bold text-custom-gray-dark'>오늘의 머니뉴스</h2>
        {latestNews && <NewsCard news={latestNews} isDesktop />}
      </section>
      <section className='my-9'>
        <button
          onClick={() =>
            handleQuizBannerClick({
              isLogin,
              setIsOpen,
              keyNoteListLen,
              isFirstQuizAttempt,
              navigate,
              setModalOpen,
              setIsNavigate,
            })
          }
        >
          <picture>
            <source srcSet={quizBannerW} media='(min-width: 1440px)' />
            <source srcSet={quizBannerT} media='(min-width: 768px)' />
            <img src={quizBannerM} alt='퀴즈 배너' className='h-[88px] w-full' />
          </picture>
        </button>
        <NotificationModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </section>
      <section className='grid grid-cols-1 gap-y-10 desktop:grid-cols-2 desktop:gap-x-5 desktop:gap-y-10'>
        {newsList && newsList.map((news: News) => <NewsCard news={news} key={news.newsId} />)}
      </section>
    </div>
  );
}

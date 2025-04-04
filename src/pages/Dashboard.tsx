import useDashboard from '@/hooks/dashboard/useDashboard';
import OnBoarding from '@/components/dashboard/Onboarding';
import Banner from '@/components/dashboard/Banner';
import { Link } from 'react-router-dom';
import arrowRightIcon from '@/assets/p2/arrow_right.png';
import NewsCard from '@/components/common/NewsCard';
import { News } from '@/types/interface';
import useDisableScroll from '@/hooks/common/useDisableScroll';

export default function Dashboard() {
  const {
    showOnboarding,
    setShowOnboarding,
    latestNews,
    popularNews,
    latestNewsId,
    isLatestLoading,
    isPopularLoading,
    modalOpen,
    setModalOpen,
  } = useDashboard();

  useDisableScroll(showOnboarding || modalOpen);
  if (isLatestLoading || isPopularLoading || !latestNews || !popularNews) return null;

  return (
    <div>
      <OnBoarding showOnboarding={showOnboarding} setShowOnboarding={setShowOnboarding} />
      <Banner latestNewsId={latestNewsId} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className='mx-auto flex w-[343px] flex-col md:w-[353px] desktop:w-[812px]'>
        <section>
          <div className='mb-3 flex items-center justify-between'>
            <p className='text-lg font-bold text-custom-gray-dark'>오늘 업로드 된 머니뉴스</p>
            <Link
              to='/news-list'
              className='flex items-center text-xs font-medium text-custom-gray-500'
              id='go_news_list'
            >
              전체보기 <img src={arrowRightIcon} alt='전체 보기' className='h-4 w-4' />
            </Link>
          </div>
          {latestNews && <NewsCard news={latestNews} isToday />}
        </section>
        <div className='mb-6 mt-9 h-2.5 w-full bg-custom-gray-lighter' />
        <section className='mb-[76px] md:mb-8 desktop:mb-[54px]'>
          <p className='mb-3 text-lg font-bold text-custom-gray-dark'>주간 인기 뉴스</p>
          <div className='grid grid-cols-1 gap-y-10 desktop:grid-cols-2 desktop:gap-x-5 desktop:gap-y-10'>
            {popularNews &&
              popularNews.map((news: News) => (
                <NewsCard news={news} key={news.newsId} showOnboarding={showOnboarding} />
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}

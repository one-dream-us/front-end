import HomeLatestcontent from '@/components/common/home/contents/latest/HomeLatestcontent';
import HomePopularContents from '@/components/common/home/contents/popular/HomePopularContents';
import HomeBanner from '@/components/common/home/HomeBanner';
import ServiceIntroBanner from '@/components/common/home/ServiceIntroBanner';

const Home = () => {
  return (
    <div className='w-full'>
      {/* 배너 */}
      <HomeBanner />

      {/* 오늘 업로드 */}
      <HomeLatestcontent />

      <div className='mt-20'></div>

      {/* 인기 콘텐츠 */}
      <HomePopularContents />

      {/* 서비스 소개 배너 */}
      <ServiceIntroBanner />
    </div>
  );
};

export default Home;

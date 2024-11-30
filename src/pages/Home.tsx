import ContentCard from '@/components/common/contentCard/ContentCard';
import { ContentCardTypes } from '@/types/interface';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [contents, setContents] = useState<ContentCardTypes[]>([]);

  useEffect(() => {
    (async () => {
      const contents = (await axios.get('/contents')).data;
      setContents(contents);
    })();
  }, []);

  return (
    <div className='w-full'>
      {/* 배너 */}
      <section className='mb-10 flex h-48 flex-col items-start justify-center bg-custom-gray-light px-4'>
        <HomeHeading mainTitle='똑똑해지도록 돕습니다.' subTitle='Our Mission' />
      </section>

      {/* 컨텐츠 소개? */}
      <section className='mb-6 flex items-end justify-between px-4'>
        <div>
          <HomeHeading mainTitle='최근 업로드된 동영상' subTitle='Recent upload' />
        </div>
        <Link className='flex items-center justify-center text-sm text-gray-600' to={'/'}>
          <span>전체보기</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
          </svg>
        </Link>
      </section>

      {/* 컨텐츠 카드 */}
      <div>
        {contents.map((item) => (
          <ContentCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

const HomeHeading = ({ subTitle, mainTitle }: { subTitle: string; mainTitle: string }) => {
  return (
    <>
      <h3 className='text-custom-gray-600'>{subTitle}</h3>
      <h1 className='text-xl font-extrabold'>
        금융을 더 빠르게 <br />
        {mainTitle}
      </h1>
    </>
  );
};

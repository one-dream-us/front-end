import ContentOverview from '@/components/contentDetail/ContentOverview';
import ContentSummary from '@/components/contentDetail/ContentSummary';
import fullScript from '@/mocks/data/contentDetail.json';
import { useState } from 'react';
import ScriptList from '@/components/contentDetail/ScriptList';
import VideoPlayer from '@/components/contentDetail/VideoPlayer';
import DetailsFooter from '@/components/contentDetail/DetailsFooter';

const youtubeId = 'HO7AsTjY7Bs';
const contentId = 1;
const summary = fullScript.summary_text;
const fullText = fullScript.full_text;
const reference = '유튜버 ‘오늘은 투자왕 - 김단테’';

export default function ContentDetail() {
  const [videoTime, setVideoTime] = useState(0);

  return (
    <article className='mx-auto h-full w-full max-w-[1230px] px-4 md:px-6 desktop:mb-[62px]'>
      <ContentOverview reference={reference} />
      <div className='desktop:mt-5 desktop:flex desktop:gap-x-[21px]'>
        <VideoPlayer youtubeId={youtubeId} videoTime={videoTime} />
        <div className='flex flex-col desktop:h-[500px] desktop:w-[628px] desktop:overflow-y-scroll desktop:pr-6'>
          <ContentSummary summary={summary} />
          <hr className='mb-10 w-full desktop:w-[533px] desktop:self-end' />
          <ScriptList fullText={fullText} setVideoTime={setVideoTime} />
        </div>
      </div>
      <hr className='mb-1 w-[18px] bg-gray-300 desktop:hidden' />
      <DetailsFooter reference={reference} contentId={contentId} />
    </article>
  );
}

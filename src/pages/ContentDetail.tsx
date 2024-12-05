import ContentOverview from '@/components/contentDetail/ContentOverview';
import ContentSummary from '@/components/contentDetail/ContentSummary';
import { useState } from 'react';
import ScriptList from '@/components/contentDetail/ScriptList';
import VideoPlayer from '@/components/contentDetail/VideoPlayer';
import DetailsFooter from '@/components/contentDetail/DetailsFooter';
import useContentDetails from '@/hooks/contentDetail/useContentDetails';
import { useParams } from 'react-router-dom';
import { formatDate } from '@/utils/myScrapUtils';

const youtubeId = 'HO7AsTjY7Bs';

export default function ContentDetail() {
  const { id } = useParams();
  const contentId = id ? parseInt(id, 10) : 0;

  const {
    contentDetails: {
      author,
      summaryText,
      scriptParagraphs,
      tags,
      title,
      scrapCount,
      createdAt,
    } = {},
    isLoading,
  } = useContentDetails(contentId);

  const [videoTime, setVideoTime] = useState(0);

  if (isLoading) {
    return <div />;
  }

  return (
    <article className='mx-auto h-full w-full max-w-[1230px] px-4 md:px-6 desktop:mb-[62px]'>
      <ContentOverview
        reference={author}
        title={title}
        tags={tags}
        scrapCount={scrapCount}
        contentId={contentId}
        date={formatDate(createdAt)}
      />
      <div className='desktop:mt-5 desktop:flex desktop:gap-x-[21px]'>
        <VideoPlayer youtubeId={youtubeId} videoTime={videoTime} />
        <div className='flex flex-col desktop:h-[500px] desktop:w-[628px] desktop:overflow-y-scroll desktop:pr-6'>
          <ContentSummary summary={summaryText} />
          <hr className='mb-10 w-full desktop:w-[533px] desktop:self-end' />
          <ScriptList fullText={scriptParagraphs} setVideoTime={setVideoTime} />
        </div>
      </div>
      <hr className='mb-1 w-[18px] bg-gray-300 desktop:hidden' />
      <DetailsFooter reference={author} contentId={contentId} />
    </article>
  );
}

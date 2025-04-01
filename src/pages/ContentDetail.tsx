import ContentOverview from '@/components/contentDetail/ContentOverview';
import ContentSummary from '@/components/contentDetail/ContentSummary';
import ScriptList from '@/components/contentDetail/ScriptList';
import VideoPlayer from '@/components/contentDetail/VideoPlayer';
import useDetailData from '@/hooks/contentDetail/useDetailData';

export default function ContentDetail() {
  const { contentDetails, isLoading, playerRef, playing, setPlaying } = useDetailData();

  if (isLoading || !contentDetails.tags) return null;

  return (
    <article className='mx-auto h-full w-full px-4 pb-10 md:px-6 desktop:w-[1182px] desktop:px-0'>
      <ContentOverview contentDetails={contentDetails} />
      <div className='desktop:relative desktop:mt-2 desktop:flex desktop:gap-x-5'>
        <VideoPlayer
          youtubeId={contentDetails.videoId}
          playerRef={playerRef}
          setPlaying={setPlaying}
          playing={playing}
          scriptParagraphs={contentDetails.scriptParagraphs}
        />
        <div className='flex flex-col desktop:h-[500px] desktop:w-[628px] desktop:overflow-y-scroll desktop:pr-6'>
          <ContentSummary summary={contentDetails.summaryText} />
          <hr className='mb-10 w-full text-custom-gray-300 desktop:w-[533px] desktop:self-end' />
          <ScriptList
            fullText={contentDetails.scriptParagraphs}
            playerRef={playerRef}
            setPlaying={setPlaying}
          />
        </div>
      </div>
      <hr className='mb-5 mt-3 w-full bg-custom-gray-300 desktop:ml-auto desktop:mt-5 desktop:w-[533px]' />
      <p className='text-xs text-custom-gray-600 md:text-right'>
        * 모든 스크립트는 오타 수정 후 제공되며, 상업적인 목적으로 활용되지 않음을 알려드립니다.
      </p>
    </article>
  );
}

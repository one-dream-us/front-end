import { VideoPlayerProps } from '@/types/interface';
import ReactPlayer from 'react-player';
import { useVideoScriptSync } from '@/hooks/contentDetail/useVideoScriptSync';
import { useState } from 'react';

export default function VideoPlayer({
  youtubeId,
  playerRef,
  setPlaying,
  playing,
  scriptParagraphs,
}: VideoPlayerProps) {
  const [playedSeconds, setPlayedSeconds] = useState(0);

  useVideoScriptSync({ playedSeconds, scriptParagraphs });
  return (
    <div className='fixed left-0 top-[52px] z-50 h-[212px] w-full md:h-[424px] desktop:static desktop:mb-5 desktop:h-[294px] desktop:w-[533px]'>
      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/embed/${youtubeId}`}
        controls={true}
        width='100%'
        height='100%'
        progressInterval={100}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onProgress={({ playedSeconds }) => setPlayedSeconds(playedSeconds)}
        playing={playing}
      />
    </div>
  );
}

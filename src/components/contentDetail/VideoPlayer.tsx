import ReactPlayer from 'react-player';
import { RefObject } from 'react';

export default function VideoPlayer({
  youtubeId,
  playerRef,
  setPlaying,
  playing,
}: {
  youtubeId: string;
  playerRef: RefObject<ReactPlayer>;
  setPlaying: (playing: boolean) => void;
  playing: boolean;
}) {
  return (
    <div className='fixed left-0 top-[52px] z-50 h-custom-video-md w-full md:h-[424px] desktop:static desktop:mb-5 desktop:h-[294px] desktop:w-[533px]'>
      <ReactPlayer
        ref={playerRef}
        url={`https://www.youtube.com/embed/${youtubeId}`}
        controls={true}
        width='100%'
        height='100%'
        progressInterval={100}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        playing={playing}
      />
    </div>
  );
}

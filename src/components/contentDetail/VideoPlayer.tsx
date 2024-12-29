import { VideoPlayerProps } from '@/types/interface';
import ReactPlayer from 'react-player';
import useVideoPlayerLogic from '@/hooks/contentDetail/logic/useVideoPlayerLogic';
import { motion } from 'framer-motion';

export default function VideoPlayer({
  youtubeId,
  playerRef,
  setPlaying,
  playing,
  scriptParagraphs,
}: VideoPlayerProps) {
  const { setPlayedSeconds, isReady } = useVideoPlayerLogic(scriptParagraphs);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='fixed left-0 top-[52px] z-50 h-[212px] w-full md:h-[424px] desktop:static desktop:mb-5 desktop:h-[294px] desktop:w-[533px]'
    >
      {!isReady ? (
        <div className='h-full w-full animate-pulse bg-custom-gray-300' />
      ) : (
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
      )}
    </motion.div>
  );
}

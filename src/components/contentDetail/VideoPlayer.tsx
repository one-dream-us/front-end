import { VideoPlayerProps } from '@/types/interface';
import ReactPlayer from 'react-player';
import { useVideoScriptSync } from '@/hooks/contentDetail/useVideoScriptSync';
import { useState } from 'react';
import { motion } from 'framer-motion';
import useTimeOut from '@/hooks/common/useTimeOut';

export default function VideoPlayer({
  youtubeId,
  playerRef,
  setPlaying,
  playing,
  scriptParagraphs,
}: VideoPlayerProps) {
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [isReady, setIsReady] = useState(false);
  useVideoScriptSync({ playedSeconds, scriptParagraphs });
  useTimeOut(() => setIsReady(true), 400);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className='fixed left-0 top-[52px] z-50 h-[212px] w-full md:h-[424px] desktop:static desktop:mb-5 desktop:h-[294px] desktop:w-[533px]'
    >
      {!isReady ? (
        <div className='w-full h-full animate-pulse bg-custom-gray-300' />
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

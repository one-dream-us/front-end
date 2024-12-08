import { convertTimeToSeconds } from '@/utils/contentDetailUtils';
import { RefObject } from 'react';
import ReactPlayer from 'react-player';

export default function handleScriptClick(
  time: string,
  index: number,
  playerRef: RefObject<ReactPlayer>,
  setPlaying: (playing: boolean) => void,
) {
  const newTime = Number(convertTimeToSeconds(time));

  if (playerRef.current) {
    playerRef.current.seekTo(newTime, 'seconds');
    setPlaying(true);
  }
  const element = document.querySelector(`#script-${index}`);
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
}

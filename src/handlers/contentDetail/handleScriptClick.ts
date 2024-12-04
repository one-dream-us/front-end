import { convertTimeToSeconds } from '@/utils/contentDetailUtils';

export function handleScriptClick(
  time: string,
  index: number,
  setVideoTime: (time: number) => void,
) {
  setVideoTime(convertTimeToSeconds(time));
  const element = document.querySelector(`#script-${index}`);
  element?.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest',
  });
}

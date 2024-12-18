import { ScriptParagraph } from '@/types/interface';

export function formatTime(timestamp: string): string {
  const [minute, second] = timestamp.split(':').slice(1);

  return `${minute}:${second}`;
}

export const convertTimeToSeconds = (time: string) => {
  const [minutes, seconds] = time.split(':').map(Number);
  return minutes * 60 + seconds;
};

export const handleProgress = ({
  playedSeconds,
  scriptParagraphs,
}: {
  playedSeconds: number;
  scriptParagraphs: ScriptParagraph[];
}) => {
  const currentSecond = Math.floor(playedSeconds);

  if (currentSecond === 0) return;

  let matchingScriptIndex = -1;

  for (let index = 1; index < scriptParagraphs.length; index++) {
    const currentScriptTimeInSeconds = convertTimeToSeconds(
      formatTime(scriptParagraphs[index].timestamp),
    );
    const previousScriptTimeInSeconds = convertTimeToSeconds(
      formatTime(scriptParagraphs[index - 1].timestamp),
    );

    if (
      currentSecond >= previousScriptTimeInSeconds &&
      currentSecond < currentScriptTimeInSeconds
    ) {
      matchingScriptIndex = index - 1;
      break;
    }
  }

  if (matchingScriptIndex !== -1) {
    const element = document.querySelector(`#script-${matchingScriptIndex}`);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

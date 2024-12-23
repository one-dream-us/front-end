import { useEffect, useState } from 'react';
import { ScriptParagraph } from '@/types/interface';
import { formatTime, convertTimeToSeconds } from '@/utils/contentDetailUtils';

interface UseVideoScriptSyncParams {
  playedSeconds: number;
  scriptParagraphs: ScriptParagraph[];
}

const disableScroll = (e: Event) => e.preventDefault();

export const useVideoScriptSync = ({
  playedSeconds,
  scriptParagraphs,
}: UseVideoScriptSyncParams) => {
  const isDesktop = window.innerWidth >= 1440;
  const [lastSyncedIndex, setLastSyncedIndex] = useState(-1);

  useEffect(() => {
    const currentSecond = Math.floor(playedSeconds);
    if (currentSecond === 0 || !scriptParagraphs.length) return;

    const matchingScriptIndex = scriptParagraphs.findIndex((_, index) => {
      const currentScriptTime = convertTimeToSeconds(formatTime(scriptParagraphs[index].timestamp));

      if (index === 0) {
        return currentSecond < currentScriptTime;
      }

      const previousScriptTime = convertTimeToSeconds(
        formatTime(scriptParagraphs[index - 1].timestamp),
      );

      if (currentSecond >= previousScriptTime && currentSecond < currentScriptTime) {
        return true;
      }

      return false;
    });

    const displayScriptIndex =
      matchingScriptIndex > 0 ? matchingScriptIndex - 1 : matchingScriptIndex;

    if (displayScriptIndex === -1 || displayScriptIndex === lastSyncedIndex) return;

    setLastSyncedIndex(displayScriptIndex);

    const element = document.querySelector(`#script-${displayScriptIndex}`);
    if (element) {
      if (isDesktop) {
        window.addEventListener('wheel', disableScroll, { passive: false });
        window.addEventListener('touchmove', disableScroll, { passive: false });

        setTimeout(() => {
          element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          document.body.style.overflow = '';
          window.removeEventListener('wheel', disableScroll);
          window.removeEventListener('touchmove', disableScroll);

          const scrollY = parseInt(document.body.style.top || '0', 10) * -1;
          window.scrollTo(0, scrollY);
        }, 400);
      } else {
        const targetPosition = element.getBoundingClientRect().top + window.scrollY - 300;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, [playedSeconds, scriptParagraphs, lastSyncedIndex]);
};

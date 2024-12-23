import ScriptWithTime from '@/components/contentDetail/ScriptWithTime';
import handleScriptClick from '@/handlers/contentDetail/handleScriptClick';
import { ScriptParagraph } from '@/types/interface';
import { formatTime } from '@/utils/contentDetailUtils';
import { RefObject } from 'react';
import ReactPlayer from 'react-player';

export default function ScriptList({
  fullText,
  playerRef,
  setPlaying,
}: {
  fullText: ScriptParagraph[];
  playerRef: RefObject<ReactPlayer>;
  setPlaying: (playing: boolean) => void;
}) {
  return (
    <div className='md:mb-10 desktop:mb-[37px] desktop:ml-[26px]'>
      {fullText.map((item, index) => {
        const timeInSeconds = formatTime(item.timestamp);

        return (
          <ScriptWithTime
            key={item.id}
            id={`script-${index}`}
            time={timeInSeconds}
            script={item.paragraphText}
            onClick={() => handleScriptClick(timeInSeconds, index, playerRef, setPlaying)}
            dictionaries={item.dictionaries}
          />
        );
      })}
    </div>
  );
}

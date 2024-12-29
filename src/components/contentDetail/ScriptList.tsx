import ScriptWithTime from '@/components/contentDetail/ScriptWithTime';
import handleScriptClick from '@/handlers/contentDetail/handleScriptClick';
import { ScriptParagraph } from '@/types/interface';
import { formatTime } from '@/utils/contentDetailUtils';
import { RefObject } from 'react';
import ReactPlayer from 'react-player';
import useScriptList from '@/hooks/contentDetail/logic/useScriptList';
import Tooltip from './Tooltip';

export default function ScriptList({
  fullText,
  playerRef,
  setPlaying,
}: {
  fullText: ScriptParagraph[];
  playerRef: RefObject<ReactPlayer>;
  setPlaying: (playing: boolean) => void;
}) {
  const { tooltip, setTooltip, matched } = useScriptList();

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
      {tooltip.index !== null && matched && (
        <Tooltip tooltip={tooltip} setTooltip={setTooltip} dictionary={matched} />
      )}
    </div>
  );
}

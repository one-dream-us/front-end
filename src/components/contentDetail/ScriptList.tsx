import ScriptWithTime from '@/components/contentDetail/ScriptWithTime';
import { handleScriptClick } from '@/handlers/contentDetail/handleScriptClick';
import { ScriptParagraph } from '@/types/interface';
import { convertTimeToSeconds } from '@/utils/contentDetailUtils';

export default function ScriptList({
  fullText,
  setVideoTime,
}: {
  fullText: ScriptParagraph[];
  setVideoTime: (time: number) => void;
}) {
  return (
    <div className='md:mb-10 desktop:mb-[37px]'>
      {fullText.map((item, index) => {
        const timeInSeconds = convertTimeToSeconds(item.timestamp);

        return (
          <ScriptWithTime
            key={item.id}
            id={`script-${index}`}
            time={timeInSeconds}
            script={item.paragraphText}
            onClick={() => handleScriptClick(timeInSeconds, index, setVideoTime)}
            dictionaries={item.dictionaries}
          />
        );
      })}
    </div>
  );
}

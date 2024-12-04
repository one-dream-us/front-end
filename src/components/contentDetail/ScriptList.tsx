import ScriptWithTime from '@/components/contentDetail/ScriptWithTime';
import { handleScriptClick } from '@/handlers/contentDetail/handleScriptClick';

export default function ScriptList({
  fullText,
  setVideoTime,
}: {
  fullText: { time: string; text: string }[];
  setVideoTime: (time: number) => void;
}) {
  return (
    <div className='md:mb-10 desktop:mb-[37px]'>
      {fullText.map((item, index) => (
        <ScriptWithTime
          key={index}
          id={`script-${index}`}
          time={item.time}
          script={item.text}
          onClick={() => handleScriptClick(item.time, index, setVideoTime)}
        />
      ))}
    </div>
  );
}

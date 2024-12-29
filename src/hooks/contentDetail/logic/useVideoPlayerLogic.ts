import { ScriptParagraph } from '@/types/interface';
import { useState } from 'react';
import { useVideoScriptSync } from '../useVideoScriptSync';
import useTimeOut from '../../common/useTimeOut';

export default function useVideoPlayerLogic(scriptParagraphs: ScriptParagraph[]) {
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [isReady, setIsReady] = useState(false);
  useVideoScriptSync({ playedSeconds, scriptParagraphs });
  useTimeOut(() => setIsReady(true), 400);

  return { setPlayedSeconds, isReady };
}

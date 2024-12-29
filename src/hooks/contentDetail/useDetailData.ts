import useContentId from './useContentId';
import useContentDetails from './api/useContentDetails';
import useScrappedState from './useScrappedState';
import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

export default function useDetailData() {
  const contentId = useContentId();
  const { contentDetails, isLoading: detailsLoading } = useContentDetails(contentId);
  const { reloadScrappedState } = useScrappedState();
  const playerRef = useRef<ReactPlayer | null>(null);
  const [playing, setPlaying] = useState(false);

  return {
    contentDetails: contentDetails ?? [],
    isLoading: detailsLoading,
    reloadScrappedState,
    playerRef,
    playing,
    setPlaying,
  };
}

import { useEffect } from 'react';
import useContentId from './useContentId';
import useContentDetails from './useContentDetails';
import useScrappedState from './useScrappedState';
import { useAuthCheckQuery } from '../auth/useAuthCheckQuery';

export default function useDetailData() {
  const contentId = useContentId();
  const { contentDetails, isLoading: detailsLoading } = useContentDetails(contentId);
  const { reloadScrappedState } = useScrappedState();
  const { isLoading: authLoading, data } = useAuthCheckQuery();

  useEffect(() => {
    if (data) {
      reloadScrappedState();
    }
  }, [data, reloadScrappedState]);

  return {
    contentDetails: contentDetails ?? [],
    isLoading: detailsLoading || authLoading,
    reloadScrappedState,
  };
}

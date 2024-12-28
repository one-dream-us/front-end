import useContentId from './useContentId';
import useContentDetails from './useContentDetails';
import useScrappedState from './useScrappedState';

export default function useDetailData() {
  const contentId = useContentId();
  const { contentDetails, isLoading: detailsLoading } = useContentDetails(contentId);
  const { reloadScrappedState } = useScrappedState();

  return {
    contentDetails: contentDetails ?? [],
    isLoading: detailsLoading,
    reloadScrappedState,
  };
}

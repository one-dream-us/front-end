import useScrapedContents from './useScrapedContents';
import useScrapedTerms from './useScrapedTerms';

export function useContentDisplay(activeMenu: string) {
  const scrapedContents = useScrapedContents();
  const scrapedTerms = useScrapedTerms();

  if (activeMenu === '스크랩') {
    return scrapedContents;
  } else if (activeMenu === '단어장') {
    return scrapedTerms;
  }

  return { data: null, isLoading: false };
}

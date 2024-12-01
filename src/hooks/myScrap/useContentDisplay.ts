import useScrapedContents from './useScrapedContents';
import useScrapedTerms from './useScrapedTerms';

export function useContentDisplay(activeMenu: string) {
  if (activeMenu === '스크랩') {
    return useScrapedContents();
  } else if (activeMenu === '단어장') {
    return useScrapedTerms();
  }

  return { data: null, isLoading: false };
}

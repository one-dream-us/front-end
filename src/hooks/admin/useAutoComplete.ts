import adminApi from '@/services/adminApi';
import { SearchWordResult, UploadFormChangeType } from '@/types/interface';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import useDebounce from './useDebounce';

const useAutoComplete = (
  id: UploadFormChangeType,
  newsComapny: string,
  setNewsCompany: (newValue: string) => void,
) => {
  const [searchIndex, setSearchIndex] = useState(-1);
  const [searchResults, setSearchResults] = useState<SearchWordResult[]>([]);
  const enterPressed = useRef(false);

  const handleNavigateSearchResult = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (id !== 'newsCompany' || !newsComapny) return;

    const { key } = e;

    if (key === 'ArrowDown') {
      setSearchIndex((prev) => (prev === searchResults.length - 1 ? 0 : prev + 1));
    } else if (key === 'ArrowUp') {
      setSearchIndex((prev) => (prev === -1 || prev === 0 ? searchResults.length - 1 : prev - 1));
    } else if (key === 'Enter') {
      e.preventDefault();
      if (!newsComapny || searchIndex === -1) return;

      setNewsCompany(searchResults[searchIndex].term);
      setSearchIndex(-1);
      setSearchResults([]);
      enterPressed.current = true;
    } else {
      enterPressed.current = false;
    }
  };

  const debouncedSearchTerm = useDebounce(newsComapny, 500);
  useEffect(() => {
    if (!newsComapny || enterPressed.current) return;
    (async () => {
      const res = await adminApi.lookUpKeyword(debouncedSearchTerm);
      setSearchResults(res);
    })();
  }, [debouncedSearchTerm, enterPressed.current]);

  return { searchIndex, handleNavigateSearchResult, searchResults };
};

export default useAutoComplete;

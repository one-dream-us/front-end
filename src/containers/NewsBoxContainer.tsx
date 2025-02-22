import NewsBox from '@/components/newAdmin/NewsBox';
import adminApi from '@/services/adminApi';
import { useNewsListStore } from '@/store/newAdmin/useFormStore';
import { SearchWordResult } from '@/types/interface';
import { KeyboardEvent, useEffect, useState } from 'react';
import { useShallow } from 'zustand/shallow';

export default function NewsBoxContainer({ index }: { index: number }) {
  const { dict, setDictList } = useNewsListStore(
    useShallow((s) => ({ dict: s.dictList[index], setDictList: s.setDictList })),
  );
  const [searchRes, setSearchRes] = useState<SearchWordResult[]>([]);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);

  const handleNavigateSearchResult = async (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === 'ArrowDown') {
      setSuggestionIndex((prev) => (prev === searchRes.length - 1 ? 0 : prev + 1));
    } else if (key === 'ArrowUp') {
      setSuggestionIndex((prev) => (prev === -1 || prev === 0 ? searchRes.length - 1 : prev - 1));
    } else if (key === 'Enter') {
      e.preventDefault();
      if (!dict.wordSearch) return;
      handleSearchResultClick(searchRes[suggestionIndex]);
      setSuggestionIndex(-1);
    }
  };

  const handleSearchResultClick = (item: SearchWordResult) => {
    const { definition, description, id, term } = item;
    setDictList({ key: 'word', index, value: term });
    setDictList({ key: 'definition', index, value: definition });
    setDictList({ key: 'desc', index, value: description });
    setDictList({ key: 'wordSearch', index, value: '' });
    setDictList({ key: 'wordId', index, value: id });
  };
  useEffect(() => {
    (async () => {
      if (!dict?.wordSearch) return;
      const res = await adminApi.lookUpKeyword(dict?.wordSearch);
      setSearchRes(res);
    })();
  }, [dict?.wordSearch]);

  return (
    <NewsBox
      dictList={dict}
      setDictList={setDictList}
      draggedWord={dict.draggedWord}
      handleNavigateSearchResult={handleNavigateSearchResult}
      searchRes={searchRes}
      handleSearchResultClick={handleSearchResultClick}
      suggestionIndex={suggestionIndex}
      index={index}
    />
  );
}

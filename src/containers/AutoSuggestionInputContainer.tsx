import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import InputContainer from './InputContainer';
import { AdminInputProps } from '@/types/interface';
import useDebounce from '@/hooks/admin/useDebounce';
import adminApi from '@/services/adminApi';

export default function AutoSuggestionInputContainer({
  id,
  label,
  onChange,
  placeholder,
  value,
  setValue,
}: AdminInputProps & { setValue: React.Dispatch<React.SetStateAction<string>> }) {
  const [suggestions, setSuggestions] = useState<{ id: number; name: string }[]>([]);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);
  const enterRef = useRef(false);

  const handleNavigateSearchResult = async (e: KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;

    if (key === 'ArrowDown') {
      setSuggestionIndex((prev) => (prev === suggestions.length - 1 ? 0 : prev + 1));
    } else if (key === 'ArrowUp') {
      setSuggestionIndex((prev) => (prev === -1 || prev === 0 ? suggestions.length - 1 : prev - 1));
    } else if (key === 'Enter') {
      e.preventDefault();
      if (!value) return;
      handleSearchResultClick(suggestions[suggestionIndex]);
      setSuggestionIndex(-1);
      enterRef.current = true;
    } else {
      enterRef.current = false;
    }
  };

  const handleSearchResultClick = (item: { id: number; name: string }) => {
    const { name } = item;
    setValue(name);
    setSuggestions([]);
    enterRef.current = true;
  };

  const debouncedValue = useDebounce(value, 300);
  useEffect(() => {
    (async () => {
      if (!debouncedValue || enterRef.current) return;
      const res = await adminApi.lookupNewsAgency(value);
      setSuggestions(res);
    })();
  }, [debouncedValue]);

  useEffect(() => {
    if (suggestions.findIndex((item) => item.name === value) !== -1) {
      setSuggestions([]);
      setSuggestionIndex(-1);
    }
  }, [suggestions, suggestionIndex, value]);
  return (
    <div className='relative'>
      <InputContainer
        id={id}
        label={label}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        onkeydown={handleNavigateSearchResult}
        autoComplete={'off'}
      />
      {suggestions.length > 0 && value && (
        <div className='absolute z-30 mt-1 w-full rounded-md border bg-white py-1 shadow-lg'>
          {suggestions.map((item, index) => (
            <button
              key={item.id}
              type='button'
              className={`w-full px-4 py-2 text-left transition-colors hover:bg-gray-100 ${index === suggestionIndex && 'bg-gray-100'}`}
              onClick={() => handleSearchResultClick(item)}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

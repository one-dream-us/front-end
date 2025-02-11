import useInput from '@/hooks/admin/useInput';
import adminApi from '@/services/adminApi';
import newsContentState from '@/store/admin/newsContentState';
import { DictionarySentenceList, SearchWordResult } from '@/types/interface';
import { useRef, useState } from 'react';
import { useShallow } from 'zustand/shallow';

export default function NewsContentForm({ index }: { index: number }) {
  const [isDone, setIsDone] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchWordResult[]>([]);
  const sentence = useInput();
  const word = useInput();
  const wordSearch = useInput();
  const definition = useInput();
  const desc = useInput();
  const wordIdRef = useRef<HTMLInputElement>(null);
  const { newsContents, setNewsContents } = newsContentState(
    useShallow((s) => ({ newsContents: s.newsContents, setNewsContents: s.setNewsContents })),
  );

  const handleSearchClick = async () => {
    const res = await adminApi.lookUpKeyword(wordSearch.value);
    setSearchResults(res);
  };

  const handleSearchResultClick = (item: SearchWordResult) => {
    if (!wordIdRef.current) return;

    const { definition: def, description, term, id } = item;
    // 단어 검색창 초기화
    setSearchResults([]);
    wordSearch.setValue('');

    // 각 입력창을 조회한 단어 값으로 대체
    word.setValue(term);
    desc.setValue(description);
    definition.setValue(def);
    wordIdRef.current.id = id + '';
  };

  // 수정 or 완료 버튼 핸들러
  const handleFinishButton = () => {
    if (!wordIdRef.current) return;

    setIsDone((prev) => !prev);

    const payload: DictionarySentenceList = {
      dictionaryDefinition: definition.value,
      dictionaryDescription: desc.value,
      dictionaryId: +wordIdRef.current.id === 0 ? null : +wordIdRef.current.id,
      dictionaryTerm: word.value,
      sentenceValue: sentence.value,
      startIdx: sentence.value.indexOf(word.value),
      endIdx: sentence.value.indexOf(word.value) + word.value.length - 1,
    };

    // 현재 입력 값들을 zustand에 set
    setNewsContents(payload, index);
  };

  console.log(newsContents);
  return (
    <div className='rounded-md border bg-gray-50 p-4'>
      <h3 className='mb-3 flex items-center gap-2 font-medium'>
        <span className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white'>
          {index + 1}
        </span>
        <span>문장, 용어, 정의, 해설 입력</span>
      </h3>
      <div className='space-y-4'>
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>문장</label>
          <input
            name='sentence'
            value={sentence.value}
            onChange={sentence.handleInputChange}
            disabled={isDone}
            type='text'
            className='w-full rounded-md border p-2'
            placeholder={`문장 ${index + 1}을 입력하세요`}
          />
        </div>

        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>용어</label>
          <div className='flex flex-col gap-2 md:flex-row'>
            <div className='flex-1'>
              <input
                name='word'
                value={word.value}
                onChange={word.handleInputChange}
                disabled={isDone}
                type='text'
                className='w-full rounded-md border p-2'
                placeholder={`용어 ${index + 1}을 입력하세요`}
              />
            </div>
            <div className='relative flex-1'>
              <div className='flex gap-2'>
                <input
                  ref={wordIdRef}
                  name='wordSearch'
                  value={wordSearch.value}
                  onChange={wordSearch.handleInputChange}
                  disabled={isDone}
                  type='text'
                  className='flex-1 rounded-md border p-2'
                  placeholder='용어를 검색하세요'
                  onKeyDown={async () => {
                    const { value } = wordSearch;
                    if (!value) return;
                    const res = await adminApi.lookUpKeyword(value);
                    console.log(res);
                  }}
                />
                <button
                  type='button'
                  className='flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700'
                  onClick={handleSearchClick}
                >
                  조회
                </button>
              </div>
              {searchResults.length > 0 && wordSearch.value && (
                <div className='absolute mt-1 w-full rounded-md border bg-white py-1 shadow-lg'>
                  {searchResults.map((item) => (
                    <button
                      key={item.id}
                      type='button'
                      className='w-full px-4 py-2 text-left transition-colors hover:bg-gray-100'
                      onClick={() => handleSearchResultClick(item)}
                    >
                      {item.term}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>정의</label>
          <input
            name='definition'
            value={definition.value}
            onChange={definition.handleInputChange}
            disabled={isDone}
            type='text'
            className='w-full rounded-md border p-2'
            placeholder={`정의 ${index + 1}을 입력하세요`}
          />
        </div>
        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>해설</label>
          <textarea
            name='desc'
            value={desc.value}
            onChange={desc.handleInputChange}
            disabled={isDone}
            className='w-full resize-none rounded-md border p-2'
            rows={3}
            placeholder={`해설 ${index + 1}을 입력하세요`}
          />
        </div>

        <button
          onClick={handleFinishButton}
          type='button'
          className='flex w-full items-center justify-center gap-2 rounded-md bg-custom-gray-dark px-4 py-3 text-white transition-colors hover:bg-hover-80'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d={
                isDone
                  ? 'm16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                  : 'm4.5 12.75 6 6 9-13.5'
              }
            />
          </svg>

          {isDone ? '수정' : '완료'}
        </button>
      </div>
    </div>
  );
}

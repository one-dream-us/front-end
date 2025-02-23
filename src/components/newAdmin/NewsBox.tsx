import DragSentenseContainer from '@/containers/DragSentenseContainer';
import InputContainer from '@/containers/InputContainer';
import { AdminDict } from '@/store/newAdmin/useFormStore';
import { SearchWordResult } from '@/types/interface';
import { KeyboardEvent } from 'react';

export default function NewsBox({
  dictList,
  setDictList,
  draggedWord,
  handleNavigateSearchResult,
  searchRes,
  handleSearchResultClick,
  suggestionIndex,
  index,
}: {
  dictList: AdminDict;
  setDictList: (payload: { key: keyof AdminDict; value: string; index: number }) => void;
  draggedWord: string;
  handleNavigateSearchResult: (e: KeyboardEvent<HTMLInputElement>) => void;
  searchRes: SearchWordResult[];
  handleSearchResultClick: (item: SearchWordResult) => void;
  suggestionIndex: number;
  index: number;
}) {
  return (
    <div className='rounded-md border bg-gray-50 p-4'>
      <h3 className='mb-3 flex items-center gap-2 font-medium'>
        <span className='flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-sm text-white'>
          {index + 1}
        </span>
        <span>문장, 용어, 정의, 해설 입력</span>
      </h3>
      <div className='space-y-4'>
        <DragSentenseContainer
          id={`sentence${index + 1}`}
          label='문장'
          onChange={(e) => setDictList({ key: 'sentence', value: e.target.value, index })}
          placeholder={`문장 ${index + 1}을 입력해주세요`}
          value={dictList?.sentence}
          index={index}
        />

        <div>
          <label className='mb-1 block text-sm font-medium text-gray-700'>하이라이팅 용어</label>
          <input
            required
            value={draggedWord}
            readOnly
            type='text'
            className='w-full rounded-md border p-2'
            placeholder={`문장 ${index + 1}에서 하이라이팅 할 용어를 드래그해주세요. (입력 X)`}
          />
        </div>

        <div>
          <label htmlFor={`word${index}`} className='mb-1 block text-sm font-medium text-gray-700'>
            용어
          </label>
          <div className='flex flex-col gap-2 md:flex-row'>
            <div className='flex-1'>
              <input
                id={`word${index}`}
                required
                value={dictList?.word}
                onChange={(e) => setDictList({ key: 'word', value: e.target.value, index })}
                type='text'
                className='w-full rounded-md border p-2'
                placeholder={`용어 ${index + 1}을 입력하세요`}
              />
            </div>
            <div className='relative flex-1'>
              <div className='flex gap-2'>
                <input
                  name='wordSearch'
                  value={dictList?.wordSearch}
                  onChange={(e) => setDictList({ key: 'wordSearch', value: e.target.value, index })}
                  type='text'
                  className='flex-1 rounded-md border p-2'
                  placeholder='용어를 검색하세요'
                  //   ref={wordIdRef}
                  onKeyDown={handleNavigateSearchResult}
                  autoComplete='off'
                />
              </div>
              {searchRes?.length > 0 && dictList?.wordSearch && (
                <div className='absolute z-30 mt-1 w-full rounded-md border bg-white py-1 shadow-lg'>
                  {searchRes.map((item, index) => (
                    <button
                      key={item.id}
                      type='button'
                      className={`w-full px-4 py-2 text-left transition-colors hover:bg-gray-100 ${index === suggestionIndex && 'bg-gray-100'}`}
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

        <InputContainer
          id={`definition ${index}`}
          label='정의'
          value={dictList?.definition}
          onChange={(e) => setDictList({ key: 'definition', value: e.target.value, index })}
          placeholder={`정의 ${index + 1}을 입력하세요`}
        />
        <div>
          <label htmlFor={`desc ${index}`} className='mb-1 block text-sm font-medium text-gray-700'>
            해설
          </label>
          <textarea
            id={`desc ${index}`}
            value={dictList?.desc}
            onChange={(e) => setDictList({ key: 'desc', value: e.target.value, index })}
            className='w-full resize-none rounded-md border p-2'
            rows={3}
            placeholder={`해설 ${index + 1}을 입력하세요`}
          />
        </div>
      </div>
    </div>
  );
}

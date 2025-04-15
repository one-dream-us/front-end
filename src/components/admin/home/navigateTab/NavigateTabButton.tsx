import currentTabState from '@/store/admin/adminHome/currentTabState';
import pageState from '@/store/admin/adminHome/pageState';
import { CurrentTabType } from '@/types/interface';
import { ChangeEvent } from 'react';
import { useStore } from 'zustand';

export default function NavigateTabButtonContainer() {
  const { currentTab, setCurrentTab } = useStore(currentTabState);

  const { resetPage } = useStore(pageState);

  const handleTabChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCurrentTab(e.target.value as CurrentTabType);
    resetPage();
  };

  return <NavigationTabButton currentTab={currentTab} handleTabChange={handleTabChange} />;
}

const NavigationTabButton = ({
  currentTab,
  handleTabChange,
}: {
  currentTab: CurrentTabType;
  handleTabChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  return (
    <div className='mb-5 w-full max-w-[200px]'>
      <div className='relative'>
        <select
          aria-label='업로드 유형 선택'
          value={currentTab}
          onChange={handleTabChange}
          className='ease w-full cursor-pointer appearance-none rounded border border-slate-200 bg-transparent py-2 pl-3 pr-8 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-400 focus:border-slate-400 focus:shadow-md focus:outline-none'
        >
          <option value='uploaded'>업로드 완료</option>
          <option value='scheduled'>업로드 예정</option>
          <option value='draft'>임시 저장</option>
        </select>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.2'
          stroke='currentColor'
          className='absolute right-2.5 top-2.5 ml-1 h-5 w-5 text-slate-700'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
          />
        </svg>
      </div>
    </div>
  );
};

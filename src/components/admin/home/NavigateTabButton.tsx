import currentTabState from '@/store/admin/adminHome/currentTabState';
import pageState from '@/store/admin/adminHome/pageState';
import { CurrentTabType } from '@/types/interface';
import { useStore } from 'zustand';

export default function NavigateTabButton() {
  const { currentTab, setCurrentTab } = useStore(currentTabState);
  const { setPage } = useStore(pageState);

  const handleTabChange = (to: CurrentTabType) => {
    setCurrentTab(to);
    setPage(0);
  };

  return (
    <div className='mb-6 flex space-x-1'>
      <button
        onClick={() => handleTabChange('uploaded')}
        className={`flex items-center rounded-lg px-4 py-2 ${currentTab === 'uploaded' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-2 h-4 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5'
          />
        </svg>
        업로드 완료
      </button>
      <button
        onClick={() => handleTabChange('scheduled')}
        className={`flex items-center rounded-lg px-4 py-2 ${currentTab === 'scheduled' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-2 size-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
          />
        </svg>
        업로드 예정
      </button>
    </div>
  );
}

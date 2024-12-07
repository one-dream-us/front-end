import { useState } from 'react';
import { MenuItems } from '@/constants';
import ContentDisplay from './ContentDisplay';
import { myScrapMenu } from '@/types/types';
import useMyScrapStore from '@/hooks/myScrap/useMyScrapStore';

export default function MenuWithUnderbar() {
  const [activeMenu, setActiveMenu] = useState<myScrapMenu>(MenuItems[0]);
  const setSelectedIdList = useMyScrapStore((state) => state.setSelectedIdList);
  const setIsAllChecked = useMyScrapStore((state) => state.setIsAllChecked);
  const setAllIdList = useMyScrapStore((state) => state.setAllIdList);

  return (
    <div className='flex w-full flex-col items-center'>
      <ul className='flex h-[44px] w-full border-b border-b-gray-500 text-sm'>
        {MenuItems.map((item) => (
          <li
            key={item}
            onClick={() => {
              setActiveMenu(item);
              setSelectedIdList([]);
              setIsAllChecked(false);
              setAllIdList([]);
            }}
            className={`relative w-1/2 cursor-pointer text-center text-sm font-bold leading-[44px] ${
              activeMenu === item
                ? 'text-custom-gray-dark after:absolute after:-bottom-[1px] after:left-0 after:h-[2px] after:w-full after:bg-black'
                : 'text-custom-gray-500'
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
      <ContentDisplay activeMenu={activeMenu} />
    </div>
  );
}

import { myScrapMenu } from '@/types/types';
import useMyScrapStore from '@/store/useMyScrapStore';
import { MenuItems } from '@/constants';

export default function DesktopMenu({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: myScrapMenu;
  setActiveMenu: (activeMenu: myScrapMenu) => void;
}) {
  const setSelectedIdList = useMyScrapStore((state) => state.setSelectedIdList);
  const setIsAllChecked = useMyScrapStore((state) => state.setIsAllChecked);
  const setAllIdList = useMyScrapStore((state) => state.setAllIdList);

  return (
    <ul className='relative hidden h-[58px] w-[71px] flex-col gap-y-[17px] self-start text-sm before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-custom-gray-500 desktop:flex'>
      {MenuItems.map((item) => (
        <li
          key={item}
          onClick={() => {
            setActiveMenu(item);
            setSelectedIdList([]);
            setIsAllChecked(false);
            setAllIdList([]);
          }}
          className={`relative cursor-pointer whitespace-nowrap pl-3.5 text-sm font-bold ${
            activeMenu === item
              ? `text-custom-gray-dark after:absolute after:-left-[1px] ${activeMenu === '콘텐츠' ? 'after:top-0' : 'after:bottom-0'} after:h-3.5 after:w-[3px] after:bg-custom-gray-dark`
              : 'text-custom-gray-500'
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

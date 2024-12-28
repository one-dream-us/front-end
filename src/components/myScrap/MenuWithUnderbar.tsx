import { myScrapMenu } from '@/types/types';
import useMyScrapStore from '@/store/useMyScrapStore';
import { MenuItems } from '@/constants';

export default function MenuWithUnderbar({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: myScrapMenu;
  setActiveMenu: (activeMenu: myScrapMenu) => void;
}) {
  const reset = useMyScrapStore((state) => state.actions.reset);

  return (
    <ul className='flex h-[44px] w-full border-b border-b-custom-gray-500 md:text-sm desktop:hidden'>
      {MenuItems.map((item) => (
        <li
          id={`menu-${item}`}
          key={item}
          onClick={() => {
            setActiveMenu(item);
            reset();
          }}
          className={`relative w-1/2 cursor-pointer whitespace-nowrap text-center text-sm font-medium leading-[44px] ${
            activeMenu === item
              ? 'text-custom-gray-dark after:absolute after:-bottom-[1px] after:left-0 after:h-[2px] after:w-full after:bg-custom-gray-dark'
              : 'text-custom-gray-500'
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

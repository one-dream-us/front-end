import { myScrapMenu } from '@/types/types';
import useMyScrapStore from '@/store/useMyScrapStore';
import { MenuItems } from '@/constants/constants';

export default function DesktopMenu({
  activeMenu,
  setActiveMenu,
}: {
  activeMenu: myScrapMenu;
  setActiveMenu: (activeMenu: myScrapMenu) => void;
}) {
  const reset = useMyScrapStore((state) => state.actions.reset);

  return (
    <ul className='relative hidden h-[58px] w-[71px] flex-col gap-y-[17px] self-start before:absolute before:left-0 before:top-[3px] before:h-[51px] before:w-[1px] before:bg-custom-gray-500 md:text-sm desktop:flex'>
      {MenuItems.map((item) => (
        <li
          key={item}
          id={`menu-${item}`}
          onClick={() => {
            setActiveMenu(item);
            reset();
          }}
          className={`relative cursor-pointer whitespace-nowrap pl-3.5 font-medium md:text-sm ${
            activeMenu === item
              ? `text-custom-gray-dark after:absolute after:-left-[1px] ${activeMenu === '콘텐츠' ? 'after:top-[3px]' : 'after:bottom-[3px]'} after:h-3.5 after:w-[3px] after:rounded-full after:bg-custom-gray-dark`
              : 'text-custom-gray-500'
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

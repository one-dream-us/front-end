import { HeaderMenuList } from '@/constants';
import authApi from '@/services/authApi';
import { Link } from 'react-router-dom';

export default function Drawer({
  showSidebar,
  handleShowSlider,
  pathname,
}: {
  showSidebar: boolean;
  handleShowSlider: () => void;
  pathname: string;
}) {
  return (
    <div
      onClick={handleShowSlider}
      className={`fixed right-0 top-0 z-40 flex h-full w-2/3 items-center justify-center bg-blue-600 p-10 pl-20 text-white duration-300 ease-in-out md:hidden ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex h-4/5 w-full flex-col items-center justify-start'>
        <Link to={'/login'}>
          <button>login</button>
        </Link>

        <button
          onClick={async () => {
            return await authApi.logout();
          }}
        >
          logout
        </button>

        <ul className='flex flex-col items-center justify-center gap-y-5'>
          {HeaderMenuList.map((item) => (
            <li key={item.id}>
              <Link className={pathname === item.to ? 'font-bold text-black' : ''} to={item.to}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import client from '@/utils/client';
import { Link } from 'react-router-dom';

export default function Drawer({
  showSidebar,
  handleShowSlider,
}: {
  showSidebar: boolean;
  handleShowSlider: () => void;
}) {
  return (
    <div
      onClick={handleShowSlider}
      className={`fixed right-0 top-0 z-40 block h-full w-2/3 bg-blue-600 p-10 pl-20 text-white duration-300 ease-in-out md:hidden ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='flex flex-col items-center justify-center'>
        <Link to={'/login'}>
          <button>login</button>
        </Link>

        <button
          onClick={async () => {
            const res = (await client.post('/user/logout')).data;
            console.log(res);
          }}
        >
          logout
        </button>
      </div>
    </div>
  );
}

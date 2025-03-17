import { myWordListInfo } from '@/constants/constants';
import { MyWordListMenuType } from '@/types/types';

export default function TutorialModalBody({ menu }: { menu: MyWordListMenuType }) {
  return (
    <div className='mx-auto flex flex-col items-center md:my-[34px]'>
      <img src={myWordListInfo[menu].icon} alt={menu} className='mb-2 h-5 w-5' />
      <h3 className='mb-1 font-bold'>{myWordListInfo[menu].title}</h3>
      <div className='text-center text-sm leading-160 text-gray-070'>
        <p dangerouslySetInnerHTML={{ __html: myWordListInfo[menu].description }} />
        {menu === '북마크' ? <p className='font-bold'>퀴즈에서 우선 출제돼요!</p> : ''}
      </div>
    </div>
  );
}

import { myWordListInfo } from '@/constants/constants';
import { MyWordListMenuType } from '@/types/types';

export default function TutorialModalBody({ menu }: { menu: MyWordListMenuType }) {
  return (
    <div className='mx-auto flex flex-col items-center md:my-[34px]'>
      <img src={myWordListInfo[menu].icon} alt={menu} className='mb-2 h-[30px] w-[30px]' />
      <h3 className='mb-1 font-bold'>{myWordListInfo[menu].title}</h3>
      <div className='text-center text-sm leading-160 text-gray-070'>
        <p dangerouslySetInnerHTML={{ __html: myWordListInfo[menu].description }} />
        {menu === '핵심노트' ? <p className='font-bold'>3개 이상 모이면 퀴즈가 출제돼요.</p> : ''}
      </div>
    </div>
  );
}

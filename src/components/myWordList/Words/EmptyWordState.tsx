import { MyWordListMenuType } from '@/types/types';
import emptyScrapIcon from '@/assets/p2/P2 에셋_2차전달/word_empty.png';
import Button from '@/components/myScrap/Button';
import { myWordListInfo } from '@/constants/constants';
import { useNavigate } from 'react-router-dom';

export default function EmptyWordState({ activeMenu }: { activeMenu: MyWordListMenuType }) {
  const navigate = useNavigate();

  if (activeMenu === '스크랩') {
    return (
      <div className='mb-[71px] mt-[30px] flex h-[270px] w-full flex-col items-center justify-between'>
        <h3 className='text-sm leading-170 text-custom-gray-dark'>단어장이 비었어요!</h3>
        <img src={emptyScrapIcon} alt='빈 스크랩 단어장' className='h-[120px] w-[200px]' />
        <Button text='단어 모으러 가기' onClick={() => navigate('/news-list')} />
      </div>
    );
  }
  return (
    <div className='mb-[71px] mt-[30px] h-[270px] w-full text-center text-custom-gray-dark'>
      <p className='font-bold'>{myWordListInfo[activeMenu].title}</p>
      <div className='mt-1 text-sm leading-160 text-gray-070'>
        <p dangerouslySetInnerHTML={{ __html: myWordListInfo[activeMenu].description }} />
        {activeMenu === '핵심노트' ? (
          <p className='font-bold'>3개 이상 모이면 퀴즈가 출제돼요.</p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

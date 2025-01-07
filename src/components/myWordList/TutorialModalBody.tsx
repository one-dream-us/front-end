import scrapIcon from '@/assets/p2/icon_bookmark_grey.png';
import bookMarkIcon from '@/assets/p2/icon_bookmark_dark.png';
import reviewNoteIcon from '@/assets/p2/icon_X_dark.png';
import graduationIcon from '@/assets/p2/icon_grad.png';
import { MyWordListMenuType } from '@/types/types';

export default function TutorialModalBody({ activeMenu }: { activeMenu: MyWordListMenuType }) {
  const info = {
    스크랩: {
      icon: scrapIcon,
      title: '콘텐츠에서 가져온 스크랩',
      description: '콘텐츠에서 스크랩한<br/>단어들이 모여있어요.',
    },
    핵심노트: {
      icon: bookMarkIcon,
      title: '중요한 단어는 핵심노트',
      description: '중요한 단어는 핵심노트에서 관리하고,',
    },
    오답노트: {
      icon: reviewNoteIcon,
      title: '틀린 단어는 오답노트',
      description: '진행한 퀴즈에서 틀린 단어들을<br/>모아보고 학습해요.',
    },
    졸업노트: {
      icon: graduationIcon,
      title: '열심히 공부한 졸업노트',
      description: '퀴즈에서 3번 이상 맞추면<br/>단어가 졸업노트로 이동해요!',
    },
  };

  return (
    <div className='mx-auto mb-[43px] mt-8 flex flex-col items-center md:my-[34px]'>
      <img src={info[activeMenu].icon} alt={activeMenu} className='mb-2 h-[30px] w-[30px]' />
      <h3 className='mb-1 font-bold'>{info[activeMenu].title}</h3>
      <div className='text-gray-070 text-center text-sm leading-160'>
        <p dangerouslySetInnerHTML={{ __html: info[activeMenu].description }} />
        {activeMenu === '핵심노트' ? (
          <p className='font-bold'>3개 이상 모이면 퀴즈가 출제돼요.</p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

import ScrapIcon from '@/assets/icons/icon_scrap_circle.svg';
import BookMarkIcon from '@/assets/icons/icon_bookmark.svg';
import ReviewNoteIcon from '@/assets/icons/icon_X_Pink.svg';
import GraduationIcon from '@/assets/icons/icon_graduation.svg';
import { MyWordListMenuType } from '@/types/types';

export default function TutorialModalBody({ activeMenu }: { activeMenu: MyWordListMenuType }) {
  const info = {
    스크랩: {
      icon: ScrapIcon,
      title: '콘텐츠에서 가져온 스크랩',
      description: '콘텐츠에서 스크랩한<br/>단어들이 모여있어요.',
    },
    북마크: {
      icon: BookMarkIcon,
      title: '중요한 단어는 북마크',
      description: '중요한 단어는 북마크해서 관리하고,',
    },
    오답노트: {
      icon: ReviewNoteIcon,
      title: '틀린 단어는 오답노트',
      description: '진행한 퀴즈에서 틀린 단어들을<br/>모아보고 학습해요.',
    },
    졸업노트: {
      icon: GraduationIcon,
      title: '열심히 공부한 졸업노트',
      description: '퀴즈에서 3번 이상 맞추면<br/>단어가 졸업노트로 이동해요!',
    },
  };

  return (
    <div className='mx-auto mb-[43px] mt-8 flex flex-col items-center md:my-[34px]'>
      <img src={info[activeMenu].icon} alt={activeMenu} className='mb-2 h-[30px] w-[30px]' />
      <h3 className='mb-1 font-bold'>{info[activeMenu].title}</h3>
      <div className='text-center text-sm leading-160 text-03'>
        <p dangerouslySetInnerHTML={{ __html: info[activeMenu].description }} />
        {activeMenu === '북마크' ? (
          <p className='font-bold'>3개 이상 모이면 퀴즈가 출제돼요.</p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

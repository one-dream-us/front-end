import { myScrapMenu } from './types/types';
import { MyWordListMenuType } from './types/types';
import scrapIcon from '@/assets/p2/icon_bookmark_grey.png';
import bookMarkIcon from '@/assets/p2/icon_bookmark_dark.png';
import reviewNoteIcon from '@/assets/p2/icon_X_dark.png';
import graduationIcon from '@/assets/p2/icon_grad.png';

export const HeaderMenuList = [
  { id: 1, title: '홈', to: '/' },
  { id: 2, title: '머니뉴스', to: '/contents', sub: '/content/' },
  { id: 3, title: '나의 단어장', to: '/my-word-list' },
];

export const FooterMenuList = [
  {
    id: 1,
    title: '이용약관',
    to: 'https://myinsightbox.notion.site/a30746d5882d4a74b7a964e79a0035df',
  },
  {
    id: 2,
    title: '개인정보처리방침',
    to: 'https://myinsightbox.notion.site/2b2b6555fe1e47f790e5f67985ec4b33',
  },
  {
    id: 3,
    title: '오류 접수',
    to: 'https://docs.google.com/forms/d/1S3zvVSBDCl1KLhwG1BnoTslwrsYx9ix_wR-COsu2Eac/viewform?edit_requested=true',
  },
  {
    id: 4,
    title: 'FAQ',
    to: 'https://myinsightbox.notion.site/bb74ba586e68401ebcc2b97e093bbc1d#157c62d9c5ed81ec885bed86e46de407',
  },
];

export const ProfileLabels = ['스크랩', '키워드', '본 콘텐츠'];

export const MenuItems: myScrapMenu[] = ['콘텐츠', '단어장'];

export const adminMenuList = [
  { id: 1, title: '홈', to: '/admin/home' },
  { id: 2, title: '콘텐츠 등록', to: '/admin/link-upload' },
];

export const adminTableHeader = [
  { id: 1, title: 'No', width: '60px' },
  { id: 2, title: '생성일', width: '120px' },
  { id: 3, title: '업로드일', width: '120px' },
  { id: 4, title: '콘텐츠 ID', width: '160px' },
  { id: 5, title: '제목', width: '360px' },
  { id: 6, title: '태그', width: '200px' },
  { id: 7, title: '상세보기', width: '160px' },
];

export const myWordListMenu: MyWordListMenuType[] = ['스크랩', '핵심노트', '오답노트', '졸업노트'];

export const myWordListInfo = {
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

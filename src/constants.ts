import { myScrapMenu } from './types/types';
export const HeaderMenuList = [
  { id: 1, title: '홈', to: '/' },
  { id: 2, title: '콘텐츠', to: '/contents', sub: '/content/' },
  { id: 3, title: 'MY 스크랩', to: '/my-scrap' },
];

export const FooterMenuList = [
  {
    id: 1,
    title: '이용약관',
    to: 'https://www.notion.so/myinsightbox/a573a3c5ac4348359c0c57b4d2fffdf6?pvs=4',
  },
  {
    id: 2,
    title: '개인정보처리방침',
    to: 'https://www.notion.so/myinsightbox/c7373b3c905043c2903d91c298d6b106?pvs=4',
  },
  {
    id: 3,
    title: '오류 접수',
    to: 'https://docs.google.com/forms/d/1S3zvVSBDCl1KLhwG1BnoTslwrsYx9ix_wR-COsu2Eac/viewform?edit_requested=true',
  },
  {
    id: 4,
    title: 'FAQ',
    to: 'https://www.notion.so/myinsightbox/FAQ-08fc451084994c0891c76580c339f93c',
  },
];

export const ProfileLabels = ['스크랩', '키워드', '본 콘텐츠'];

export const MenuItems: myScrapMenu[] = ['콘텐츠', '단어장'];

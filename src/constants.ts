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
    to: 'https://www.notion.so/myinsightbox/FAQ-08fc451084994c0891c76580c339f93c',
  },
];

export const ProfileLabels = ['스크랩', '키워드', '본 콘텐츠'];

export const MenuItems: myScrapMenu[] = ['콘텐츠', '단어장'];

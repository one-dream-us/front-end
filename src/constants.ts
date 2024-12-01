import { myScrapMenu } from './types/types';
export const HeaderMenuList = [
  { id: 1, title: '서비스 소개', to: '/' },
  { id: 2, title: '컨텐츠', to: '/' },
  { id: 3, title: 'MY스크랩', to: '/my-scrap' },
];

export const FormLink =
  'https://docs.google.com/forms/u/3/d/1S3zvVSBDCl1KLhwG1BnoTslwrsYx9ix_wR-COsu2Eac/edit';

export const FooterMenuList = [
  { id: 1, title: '이용약관', to: '/terms' },
  { id: 2, title: '개인정보처리방침', to: '/privacy-policy' },
  { id: 3, title: '오류 접수', to: FormLink },
];

export const ProfileLabels = ['스크랩', '키워드', '본 콘텐츠'];

export const MenuItems: myScrapMenu[] = ['스크랩', '단어장'];

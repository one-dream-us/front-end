import { myScrapMenu } from './types/types';
export const HeaderMenuList = [
  { id: 1, title: '홈', to: '/' },
  { id: 2, title: '콘텐츠', to: '/contents' },
  { id: 3, title: 'MY 스크랩', to: '/my-scrap' },
];

export const FormLink =
  'https://docs.google.com/forms/u/3/d/1S3zvVSBDCl1KLhwG1BnoTslwrsYx9ix_wR-COsu2Eac/edit';

export const FooterMenuList = [
  { id: 1, title: '이용약관', to: '/terms' },
  { id: 2, title: '개인정보처리방침', to: '/privacy-policy' },
  { id: 3, title: '오류 접수', to: FormLink },
];

export const ProfileLabels = ['스크랩', '키워드', '본 콘텐츠'];

export const MenuItems: myScrapMenu[] = ['콘텐츠', '단어장'];

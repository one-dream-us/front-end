import { myScrapMenu } from '@/types/types';

export function handleDelete(
  activeMenu: myScrapMenu,
  deleteScrapContent: () => void,
  deleteScrapTerm: () => void,
) {
  switch (activeMenu) {
    case '콘텐츠':
      return deleteScrapContent();
    case '단어장':
      return deleteScrapTerm();
  }
}

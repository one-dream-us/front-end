import closeIcon from '@/assets/icons/X=Grey 30.svg';
import checkIcon from '@/assets/icons/icon_check_Active.svg';

export function getToastStyles(type: string) {
  switch (type) {
    case 'deleteScrap':
    case 'deleteTerm':
      return {
        icon: closeIcon,
        textColor: 'text-custom-gray-300',
        alt: '삭제하기 아이콘',
        size: 'w-[11px] h-[15px]',
      };
    case 'addScrap':
    case 'addTerm':
      return {
        icon: checkIcon,
        textColor: 'text-primary',
        alt: '추가하기 아이콘',
        size: 'w-[15px] h-[15px]',
      };
    case 'copy':
      return {
        icon: checkIcon,
        textColor: 'text-primary',
        alt: '추가하기 아이콘',
        size: 'w-[15px] h-[15px]',
      };
  }
}
export function formatReadCount(n: string) {
  const number = Number(n);
  if (number < 10000) {
    return `${number.toLocaleString()}`;
  } else {
    const formatted = (number / 10000).toFixed(1);
    return `${formatted}만`;
  }
}

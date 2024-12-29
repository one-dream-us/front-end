import useImagePreloader from '@/hooks/common/useImagePreloader';
import useShareModal from '../useShareModal';
import useToastStore from '@/store/useToastStore';
import copyLinkIcon from '@/assets/icons/copy-link.svg';
import kakaoTalkIcon from '@/assets/imgs/카카오톡.jpg';
import facebookIcon from '@/assets/imgs/페이스북.jpg';
import XIcon from '@/assets/imgs/X 트위터.jpg';

export default function useShareModalLogic() {
  const currentUrl = window.location.href;
  useShareModal();
  const showToast = useToastStore((state) => state.showToast);
  useImagePreloader([copyLinkIcon, kakaoTalkIcon, facebookIcon, XIcon]);

  return { currentUrl, showToast, copyLinkIcon, kakaoTalkIcon, facebookIcon, XIcon };
}

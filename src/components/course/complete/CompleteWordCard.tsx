import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import { IDescription } from '@/types/interface';
import scrapActive from '@/assets/p2/P2 에셋_2차전달/icon_scrap.png';
import scrapDisable from '@/assets/p2/P2 에셋_2차전달/icon_scrap_greyline.png';
import useIsBookmarkable from '@/hooks/newDetail/useIsBookmarkable';
import useBookmarkWord from '@/hooks/newDetail/useBookmarkWord';
import useRemoveBookmark from '@/hooks/newDetail/useRemoveBookmarkWord';

export default function CompleteWordCard({
  dictionaryId,
  term,
}: Pick<IDescription, 'term' | 'dictionaryId'>) {
  const bookmark = useBookmarkWord();
  const bookmarkCancel = useRemoveBookmark();
  const { data: isLogin } = useAuthCheckQuery();
  const { setIsOpen, setIsNavigate } = useLoginConfirmModalState();
  const { alreadyBookmark } = useIsBookmarkable(dictionaryId);

  const handleScrap = () => {
    if (!isLogin) {
      // 비로그인 시 로그인 모달 띄우기
      setIsOpen(true);
      setIsNavigate(false);
    } else {
      // 로그인 시
      if (alreadyBookmark) {
        bookmarkCancel.mutate(alreadyBookmark.bookmarkId);
        console.log('북마크 취소 : ', term);
      } else {
        console.log('북마크', term);
        bookmark.mutate(dictionaryId);
      }
    }
  };
  return (
    <div
      className={`box-border flex h-[56px] w-full items-center justify-between rounded-[4px] bg-white px-6 py-4 ${alreadyBookmark ? 'todays-word-card-shadow border-[2px] border-[#5BBF6A]' : 'border-[2px] border-quiz-bg'}`}
    >
      <h1 className='line-clamp-1 text-[16px] font-medium text-custom-gray-dark'>{term}</h1>

      <button
        onClick={handleScrap}
        disabled={bookmark.isPending || bookmarkCancel.isPending}
        className={`${!alreadyBookmark && 'word_scrap'}`}
      >
        <img
          className={`h-[19px] w-[18px]`}
          src={alreadyBookmark ? scrapActive : scrapDisable}
          alt='scrap img'
        />
      </button>
    </div>
  );
}

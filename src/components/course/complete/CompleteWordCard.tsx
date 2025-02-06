import { useAuthCheckQuery } from '@/hooks/auth/useAuthCheckQuery';
import useRemoveScrapWord from '@/hooks/newDetail/useRemoveScrapWord';
import useScrapWord from '@/hooks/newDetail/useScrapWord';
import useLoginConfirmModalState from '@/store/login/useLoginConfirmModalStore';
import { IDescription } from '@/types/interface';
import scrapActive from '@/assets/p2/P2 에셋_2차전달/icon_scrap.png';
import scrapDisable from '@/assets/p2/P2 에셋_2차전달/icon_scrap_greyline.png';
import useIsScrapable from '@/hooks/newDetail/useIsScrapable';

export default function CompleteWordCard({
  dictionaryId,
  term,
}: Pick<IDescription, 'term' | 'dictionaryId'>) {
  const scrap = useScrapWord();
  const scrapCancel = useRemoveScrapWord();
  const { data } = useAuthCheckQuery();
  const { setIsOpen, setIsNavigate } = useLoginConfirmModalState();
  const { alreadyGraduation, alreadyInCorrect, alreadyKeynote, alreadyScrapped } =
    useIsScrapable(dictionaryId);

  const handleScrap = () => {
    if (!data) {
      // 비로그인 시 로그인 모달 띄우기
      setIsOpen(true);
      setIsNavigate(false);
    } else {
      // 로그인 시
      if (alreadyScrapped) {
        // 스크랩 삭제
        scrapCancel(alreadyScrapped.scrapId);
        console.log('스크랩 취소 : ', term);
      } else if (alreadyGraduation) {
        return alert('이미 졸업노트에 등록 된 단어입니다.');
      } else if (alreadyInCorrect) {
        return alert('이미 오답노트에 등록 된 단어입니다.');
      } else if (alreadyKeynote) {
        return alert('이미 핵심노트에 등록 된 단어입니다.');
      } else {
        // 스크랩 추가
        console.log('스크랩', term);
        scrap(dictionaryId);
      }
    }
  };
  return (
    <div
      className={`box-border flex h-[56px] w-full items-center justify-between rounded-[4px] bg-white px-6 py-4 ${alreadyScrapped ? 'todays-word-card-shadow border-[2px] border-[#5BBF6A]' : 'border-[2px] border-quiz-bg'}`}
    >
      <h1 className='line-clamp-1 text-[16px] font-medium text-custom-gray-dark'>{term}</h1>

      <button onClick={handleScrap}>
        <img
          className={`h-[19px] w-[18px]`}
          src={alreadyScrapped ? scrapActive : scrapDisable}
          alt='scrap img'
        />
      </button>
    </div>
  );
}

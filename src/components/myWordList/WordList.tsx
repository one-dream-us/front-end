import { WordListProps } from '@/types/interface';
import useGetWordListData from '@/hooks/myWordList/api/useGetWordListData';
import EmptyWordState from './Words/EmptyWordState';
import WordListContent from './Words/WordListContent';

export default function WordList({
  activeMenu,
  setShowTooltip,
  setShowModal,
  showModal,
  showTutorial,
}: WordListProps) {
  const { wordList, isLoading } = useGetWordListData(activeMenu);
  const wordNum = wordList.length;

  if (isLoading) return <div />;

  return (
    <div className='relative box-content w-[343px] px-4 md:w-[353px] md:px-0 desktop:w-[812px]'>
      <p
        className={`${activeMenu === '북마크' && wordNum < 3 ? '' : 'mb-[23px]'} text-xs font-medium text-custom-gray-700`}
      >
        단어 수<span className='ml-2 font-bold'>{wordNum}</span>
      </p>
      {activeMenu === '북마크' && wordNum < 3 && wordNum > 0 ? (
        <p className='my-5 text-center text-sm leading-170 text-custom-gray-500'>
          퀴즈를 풀기 위해서는 북마크가 더 필요해요.
        </p>
      ) : null}
      {wordList.length > 0 ? (
        <WordListContent
          activeMenu={activeMenu}
          wordList={wordList}
          showTutorial={showTutorial}
          setShowTooltip={setShowTooltip}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : (
        <EmptyWordState activeMenu={activeMenu} />
      )}
    </div>
  );
}

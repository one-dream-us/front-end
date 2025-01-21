import { WordListProps } from '@/types/interface';
import useWordList from '@/hooks/myWordList/useWordList';
import EmptyWordState from './Words/EmptyWordState';
import Toast from '../common/Toast';
import WordListContent from './Words/WordListContent';

export default function WordList({
  activeMenu,
  showTooltip,
  setShowTooltip,
  setShowModal,
  showModal,
  showTutorial,
}: WordListProps) {
  const { title, wordList, wordNum, isLoading } = useWordList(activeMenu);

  if (isLoading) return <div />;

  return (
    <div className='relative'>
      <p
        className={`${activeMenu === '핵심노트' && wordNum < 3 ? '' : 'mb-[23px]'} text-xs font-medium text-custom-gray-700`}
      >
        {title}
        <span className='ml-2 font-bold'>{wordNum}</span>
      </p>
      {activeMenu === '핵심노트' && wordNum < 3 && wordNum > 0 ? (
        <p className='my-5 text-center text-sm leading-170 text-custom-gray-500'>
          퀴즈를 풀기 위해서는 핵심노트가 더 필요해요.
        </p>
      ) : null}
      {wordList.length > 0 ? (
        <WordListContent
          activeMenu={activeMenu}
          wordList={wordList}
          wordNum={wordNum}
          showTutorial={showTutorial}
          showTooltip={showTooltip}
          setShowTooltip={setShowTooltip}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      ) : (
        <EmptyWordState activeMenu={activeMenu} />
      )}
      <Toast />
    </div>
  );
}

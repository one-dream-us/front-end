import {
  HistoryDictionary,
  BookmarkDictionary,
  WordInterface,
  WordListContentProps,
} from '@/types/interface';
import History from './History';
import Bookmark from './Bookmark';
import WordNote from './WordNote';
import ExplanationModal from '../ExplanationModal';

export default function WordListContent({
  activeMenu,
  wordList,
  showModal,
  setShowModal,
}: WordListContentProps) {
  const renderContent = () => {
    return wordList.map((word, index) => {
      const key = `${activeMenu}-${index}`;

      switch (activeMenu) {
        case '히스토리':
          return <History word={word as HistoryDictionary} key={key} setShowModal={setShowModal} />;
        case '북마크':
          return (
            <Bookmark word={word as BookmarkDictionary} key={key} setShowModal={setShowModal} />
          );
        case '졸업노트':
        case '오답노트':
          return (
            <WordNote
              activeMenu={activeMenu}
              word={word as WordInterface}
              key={key}
              setShowModal={setShowModal}
            />
          );
        default:
          return null;
      }
    });
  };
  return (
    <div
      className={`md:gap-y-4.5 mb-12 flex h-96 flex-col gap-y-3 overflow-y-auto pr-2 desktop:h-[340px] desktop:gap-y-4`}
    >
      {renderContent()}
      {showModal && <ExplanationModal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

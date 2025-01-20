import {
  ScrapDictionary,
  KeyNoteDictionary,
  WordInterface,
  WordListContentProps,
} from '@/types/interface';
import ScrapWord from './ScapWord';
import KeyNote from './KeyNote';
import WordNote from './WordNote';
import useWordListContentLogic from '@/hooks/myWordList/useWordListContentLogic';
import ExplanationModal from '../ExplanationModal';

export default function WordListContent({
  activeMenu,
  wordList,
  wordNum,
  showTutorial,
  showTooltip,
  setShowTooltip,
  showModal,
  setShowModal,
}: WordListContentProps) {
  const handleScroll = useWordListContentLogic({ activeMenu, showTutorial, setShowTooltip });
  const renderContent = () => {
    switch (activeMenu) {
      case '스크랩':
        return wordList.map((word) => (
          <ScrapWord
            activeMenu={activeMenu}
            word={word as ScrapDictionary}
            key={(word as ScrapDictionary).dictionaryId}
            setShowModal={setShowModal}
          />
        ));
      case '핵심노트':
        return wordList.map((word) => (
          <KeyNote
            activeMenu={activeMenu}
            word={word as KeyNoteDictionary}
            key={(word as KeyNoteDictionary).keyNoteId}
            setShowModal={setShowModal}
          />
        ));
      case '졸업노트':
      case '오답노트':
        return wordList.map((word) => (
          <WordNote
            activeMenu={activeMenu}
            word={word as WordInterface}
            key={(word as WordInterface).dictionary.id}
            setShowModal={setShowModal}
          />
        ));
      default:
        return null;
    }
  };
  return (
    <div
      className={`md:gap-y-4.5 mb-12 flex h-96 flex-col gap-y-3 overflow-y-auto pr-2 desktop:h-[340px] desktop:gap-y-4`}
      onScroll={handleScroll}
    >
      {renderContent()}
      {activeMenu === '스크랩' && showTooltip && wordNum < 3 && !showTutorial && (
        <div className="absolute right-[18px] top-3.5 z-[999] rounded bg-custom-gray-dark px-2.5 py-2 text-xs text-primary drop-shadow-xl after:absolute after:-bottom-2 after:right-3 after:border-x-[6px] after:border-t-[8px] after:border-transparent after:border-t-custom-gray-dark after:content-['']">
          중요한 단어를 핵심노트에 추가하고 퀴즈를 풀어보세요!
        </div>
      )}
      {showModal && <ExplanationModal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

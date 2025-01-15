import { WordListProps } from '@/types/interface';
import useWordList from '@/hooks/myWordList/useWordList';
import KeyNote from './Words/KeyNote';
import emptyScrapIcon from '@/assets/p2/P2 에셋_2차전달/word_empty.png';
import Button from '../myScrap/Button';
import { myWordListInfo } from '@/constants';
import Toast from '../common/Toast';
import { KeyNoteDictionary, ScrapDictionary, WordInterface } from '@/types/interface';
import ScrapWord from './Words/ScapWord';
import WordNote from './Words/WordNote';
import ExplanationModal from './ExplanationModal';

export default function WordList({
  activeMenu,
  showTooltip,
  setShowTooltip,
  setShowModal,
  showModal,
  showTutorial,
}: WordListProps) {
  const { title, wordList, wordNum, navigate, listRef, handleScroll } = useWordList(
    activeMenu,
    setShowTooltip,
    showTutorial,
  );

  return (
    <div className='relative'>
      <p className='mb-[23px] text-xs font-medium text-custom-gray-700'>
        {title}
        <span className='ml-2 font-bold'>{wordNum}</span>
      </p>
      {activeMenu === '핵심노트' && wordNum < 3 && wordNum > 0 ? (
        <p className='my-5 text-center text-sm leading-170 text-custom-gray-500'>
          퀴즈를 풀기 위해서는 핵심노트가 더 필요해요.
        </p>
      ) : null}
      {wordList.length > 0 ? (
        <div
          ref={listRef}
          className={`md:gap-y-4.5 mb-12 flex h-96 flex-col gap-y-3 overflow-y-auto pr-2 desktop:h-[340px] desktop:gap-y-4 ${activeMenu === '스크랩' && showTooltip && 'pt-1'}`}
          onScroll={handleScroll}
        >
          {activeMenu === '스크랩' &&
            wordList.map((word: ScrapDictionary) => (
              <ScrapWord
                activeMenu={activeMenu}
                word={word}
                key={activeMenu + word.dictionaryId}
                setShowModal={setShowModal}
              />
            ))}
          {activeMenu === '핵심노트' &&
            wordList.map((word: KeyNoteDictionary) => (
              <KeyNote
                activeMenu={activeMenu}
                word={word}
                key={word.keyNoteId}
                setShowModal={setShowModal}
              />
            ))}
          {activeMenu === '졸업노트' ||
            (activeMenu === '오답노트' &&
              wordList.map((word: WordInterface) => (
                <WordNote
                  activeMenu={activeMenu}
                  word={word}
                  key={activeMenu + word.dictionary.id}
                  setShowModal={setShowModal}
                />
              )))}
          {activeMenu === '스크랩' && showTooltip && wordNum < 3 && !showTutorial && (
            <div className="absolute right-[18px] top-[18px] z-[999] rounded bg-custom-gray-dark px-2.5 py-2 text-xs text-primary drop-shadow-xl after:absolute after:-bottom-2 after:right-3 after:border-x-[6px] after:border-t-[8px] after:border-transparent after:border-t-custom-gray-dark after:content-['']">
              중요한 단어를 핵심노트에 추가하고 퀴즈를 풀어보세요!
            </div>
          )}
          {showModal && <ExplanationModal showModal={showModal} setShowModal={setShowModal} />}
        </div>
      ) : activeMenu === '스크랩' ? (
        <div className='mb-[71px] mt-[30px] flex h-[270px] w-full flex-col items-center justify-between'>
          <h3 className='text-sm leading-170 text-custom-gray-dark'>단어장이 비었어요!</h3>
          <img src={emptyScrapIcon} alt='빈 스크랩 단어장' className='h-[120px] w-[200px]' />
          <Button text='단어 모으러 가기' onClick={() => navigate('/news')} />
        </div>
      ) : (
        <div className='mb-[71px] mt-[30px] h-[270px] w-full text-center text-custom-gray-dark'>
          <p className='font-bold'>{myWordListInfo[activeMenu].title}</p>
          <div className='mt-1 text-sm leading-160 text-gray-070'>
            <p dangerouslySetInnerHTML={{ __html: myWordListInfo[activeMenu].description }} />
            {activeMenu === '핵심노트' ? (
              <p className='font-bold'>3개 이상 모이면 퀴즈가 출제돼요.</p>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
      <Toast />
    </div>
  );
}

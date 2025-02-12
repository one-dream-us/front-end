import { DictionarySentenceList } from '@/types/interface';
import { create } from 'zustand';

interface newContentState {
  newsContents: DictionarySentenceList[];
  setNewsContents: (newsContents: DictionarySentenceList, index: number) => void;
}
const newsContentState = create<newContentState>((set) => ({
  newsContents: [
    {
      dictionaryDefinition: '',
      dictionaryDescription: '',
      dictionaryId: 0,
      dictionaryTerm: '',
      endIdx: 0,
      startIdx: 0,
      sentenceValue: '',
    },
    {
      dictionaryDefinition: '',
      dictionaryDescription: '',
      dictionaryId: 0,
      dictionaryTerm: '',
      endIdx: 0,
      startIdx: 0,
      sentenceValue: '',
    },
    {
      dictionaryDefinition: '',
      dictionaryDescription: '',
      dictionaryId: 0,
      dictionaryTerm: '',
      endIdx: 0,
      startIdx: 0,
      sentenceValue: '',
    },
  ],
  // 새로운 데이터 or 수정된 데이터를 기존 인덱스 값에 교체
  setNewsContents: (newsContents: DictionarySentenceList, index: number) =>
    set((prev) => ({
      newsContents: prev.newsContents.map((item, i) => {
        if (i === index) {
          return newsContents;
        } else {
          return item;
        }
      }),
    })),
}));

export default newsContentState;

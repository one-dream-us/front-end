import ReactPlayer from 'react-player';
import { RefObject } from 'react';
import { MyWordListMenuType } from './types';
import { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';

export interface ContentCardTypes {
  id: number;
  thumbnailSrc: string;
  keywords: string[];
  title: string;
  description: string;
  date: string;
  scrapCount: string;
}

// Common
export interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface ToastProps {
  src: string;
  altText: string;
  text: string;
  setIsComModalOpen: (isComModalOpen: boolean) => void;
}

type Tag = {
  tagValue: string;
  sequence: number | null;
};

// My Scrap
export interface ScrapedContentData {
  scrapId: number;
  contentId: number;
  contentTitle: string;
  thumbnailUrl: string;
  createdAt: string;
  summaryText: string;
  tags: Tag[];
}

export interface ScrapedTermData {
  id: number;
  scrapId: number;
  dictionaryId: number;
  term: string;
  details: string;
  contentId: number;
}

export interface UserInfoData {
  name: string;
  nickname: string;
  email: string;
  role: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

// Content Detail
export interface ContentDetail {
  id: number;
  title: string;
  contentUrl: string;
  thumbnailUrl: string;
  createdAt: string;
  viewCount: string;
  scrapCount: string;
  tags: string[];
  summaryText: string;
  author: string;
  scriptParagraphs: ScriptParagraph[];
  videoId: string;
}

export interface ScriptParagraph {
  id: number;
  timestamp: string;
  paragraphText: string;
  dictionaries: Dictionary[];
}

export interface Dictionary {
  id: number;
  term: string;
  details: string;
  scrapped: boolean;
}

export interface ScrapClickProps {
  isScrapped: boolean;
  reloadContentDetails: () => void;
  deleteScrapTerm: () => void;
  addScrapTerm: () => void;
}

export interface ScriptNTimeProps {
  id: string;
  time: string;
  script: string;
  onClick: () => void;
  dictionaries: Dictionary[];
}

export interface ContentCardData extends Omit<ContentDetail, 'author' | 'scriptParagraphs'> {
  videoId: string;
}

export interface ContentListData {
  contents: ContentCardData[];
  hasNext: boolean;
  nextCursor: any;
  totalElements: number;
}

export interface ImgData {
  webp: string;
  png: string;
}

export interface TooltipProps {
  tooltip: {
    content: string;
    term: string;
    isScrapped: boolean;
    index: number | null;
  };
  setTooltip: (value: {
    content: string;
    term: string;
    isScrapped: boolean;
    index: number | null;
  }) => void;
  dictionary: Dictionary;
}

export interface ScrappedItem {
  dictionaryId: number;
  dictionaryScrapId: number | null;
  scrapped: boolean;
}

export interface VideoPlayerProps {
  youtubeId: string;
  playerRef: RefObject<ReactPlayer>;
  setPlaying: (playing: boolean) => void;
  playing: boolean;
  scriptParagraphs: ScriptParagraph[];
}

export interface ScrapDictionary {
  dictionaryId: number;
  term: string;
  definition: string;
  description: string;
}

export interface WordDictionary {
  id: number;
  term: string;
  definition: string;
  description: string;
}

export interface KeyNoteDictionary {
  keyNoteId: number;
  dictionary: WordDictionary;
}

export interface KeyNoteWord {
  keyNoteList: KeyNoteDictionary[];
}

export interface WordInterface {
  dictionary: WordDictionary;
}

export interface WordListProps {
  activeMenu: MyWordListMenuType;
  showTooltip: boolean;
  setShowTooltip: Dispatch<SetStateAction<boolean>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  showTutorial: boolean;
}

// quiz
export interface IQuiz {
  question: string;
  answerNum: number;
  choices: IChoice[];
}

export interface IChoice {
  dictionaryId: number;
  term: string;
  detail: string;
  quizNum: number;
  status: string;
}

export interface IQuestionResult extends Pick<IChoice, 'dictionaryId' | 'status'> {
  isCorrect: boolean;
}

export interface IQuizResult {
  graduationCnt: number;
  totalWrong: number;
  accuracyRate: number;
  resultDetails: ResultDetail[];
}

export interface ResultDetail {
  status: string;
  term: string;
  correctCnt: number;
  wrongCnt: number;
  isCorrect: boolean;
}

export interface IHandlePick extends Pick<IChoice, 'dictionaryId' | 'status'> {
  item: IChoice;
  answer: string;
}

export interface HandleBannerClickProps extends HandleQBannerClickProps {
  index: number;
  latestNewsId: number;
}

export interface HandleQBannerClickProps {
  isLogin: boolean;
  isFirstQuizAttempt: boolean;
  keyNoteListLen: number;
  navigate: NavigateFunction;
  setIsOpen: (open: boolean) => void;
  setModalOpen: (open: boolean) => void;
}

export interface News {
  newsId: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  viewCount: string;
  tags: string[];
}

export interface INewsDetail {
  title: string;
  newsAgency: string;
  fullSentence: string;
  descriptions: IDescription[];
  link: string;
}

export interface IDescription {
  sentence: string;
  description: string;
  definition: string;
  dictionaryId: number;
  term: string;
}

export interface IScrapList {
  scrapCnt: number;
  dictionaryScraps: IScrapWord[];
}

export interface IScrapWord {
  scrapId: number;
  dictionaryId: number;
  term: string;
  definition: string;
  description: string;
}

export interface WordListContentProps {
  activeMenu: MyWordListMenuType;
  wordList: ScrapDictionary[] | KeyNoteDictionary[] | WordInterface[];
  wordNum: number;
  showTutorial: boolean;
  showTooltip: boolean;
  setShowTooltip: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export interface IWholeNote {
  scrap: IScrapList | undefined;
  keynote: Keynote | undefined;
  inCorrect: InCorrect | undefined;
  graduation: Graduation | undefined;
}

export interface Keynote {
  keyNoteCount: number;
  keyNoteList: {
    keyNoteId: number;
    createdAt: string;
    dictionary: Dictionary;
  }[];
}

export interface InCorrect {
  wrongAnswerNoteSize: number;
  wrongAnswerNotes: {
    wrongAnswerNoteId: number;
    createdAt: string;
    dictionary: {
      id: number;
      term: string;
      definition: string;
      description: string;
    };
  }[];
}

export interface Graduation {
  graduationNoteSize: number;
  graduationNotes: {
    graduationNoteId: number;
    createdAt: string;
    dictionary: {
      id: number;
      term: string;
      definition: string;
      description: string;
    };
  }[];
}
/////

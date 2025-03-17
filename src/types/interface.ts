import ReactPlayer from 'react-player';
import { ChangeEvent, RefObject } from 'react';
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

export interface HistoryDictionary {
  dictionaryId: number;
  term: string;
  definition: string;
  description: string;
  isBookmarked: boolean | null;
}

export interface WordDictionary {
  id: number;
  term: string;
  definition: string;
  description: string;
}

export interface BookmarkDictionary {
  bookmarkId: number;
  dictionary: WordDictionary;
}

export interface KeyNoteWord {
  keyNoteList: BookmarkDictionary[];
}

export interface WordInterface {
  dictionary: WordDictionary;
}

export interface WordListProps {
  activeMenu: MyWordListMenuType;
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
  setIsNavigate: (isNavigate: boolean) => void;
}

export interface News {
  newsId: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  viewCount: string;
  tags: string[];
}
export interface INewsList {
  contents: News[];
  hasNext: boolean;
  totalElements: number;
  nextCursor: number;
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
  wordList: HistoryDictionary[] | BookmarkDictionary[] | WordInterface[];
  showTutorial: boolean;
  setShowTooltip: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export interface IWholeNote {
  history: History | undefined;
  bookmark: BookMark | undefined;
  inCorrect: InCorrect | undefined;
  graduation: Graduation | undefined;
}

export interface BookMark {
  bookmarkCount: number;
  bookmarkList: BookmarkList[];
}

export interface BookmarkList {
  bookmarkId: number;
  createdAt: string;
  dictionary: DictionaryInfo;
}

export interface DictionaryInfo {
  id: number;
  term: string;
  definition: string;
  description: string;
}

export interface History {
  historyCnt: number;
  dictionaryHistory: DictionaryHistory[];
}

export interface DictionaryHistory {
  historyId: number;
  dictionaryId: number;
  term: string;
  definition: string;
  description: string;
  isBookmarked: boolean;
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

export interface UploadFormState {
  uploadForm: {
    title: string;
    newsCompany: string;
    newsLink: string;
    imgLink: string;
  };
  onChange: (newValue: string, type: keyof UploadFormState['uploadForm']) => void;
  setNewsCompanyValue: (newValue: string) => void;
}

export type UploadFormChangeType = keyof UploadFormState['uploadForm'];

export interface UploadFormReqestBody {
  title: string;
  thumbnailUrl: string;
  originalLink: string;
  newsAgency: string;
  dictionarySentenceList: DictionarySentenceList[];
}

export interface DictionarySentenceList {
  dictionaryId: number | null;
  dictionaryTerm: string;
  dictionaryDefinition: string;
  dictionaryDescription: string;
  sentenceValue: string;
  startIdx: number;
  endIdx: number;
}

export interface NewsContent {
  id: number;
  sentence: string;
  word: string;
  wordSearch: string;
  definition: string;
  desc: string;
}

export interface SearchWordResult {
  id: number;
  term: string;
  definition: string;
  description: string;
}

export type CurrentTabType = 'uploaded' | 'scheduled' | 'draft';
export interface AdminUploadListResult<T> {
  content: T[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: Sort2;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Sort2 {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface UploadedListContent {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: string;
  newsAgency: string;
  link: string;
}

export interface ScheduledListContent {
  id: number;
  newsContent: NewsRequest;
  scheduledAt: string;
}

export interface NewsRequest {
  title: string;
  thumbnailUrl: string;
  originalLink: string;
  newsAgency: string;
  dictionarySentenceList: DictionarySentenceList[];
}

export interface DictionarySentenceList {
  dictionaryId: number | null;
  dictionaryTerm: string;
  dictionaryDefinition: string;
  dictionaryDescription: string;
  sentenceValue: string;
  startIdx: number;
  endIdx: number;
}

export interface AdminContentDetailType {
  title: string;
  newsAgency: string;
  fullSentence: string;
  link: string;
  descriptions: Description[];
  thumbnailUrl: string | null;
  scheduledAt?: string;
}

export interface Description {
  sentence: string;
  description: string;
  definition: string;
  dictionaryId: number;
  term: string;
}

export interface AdminInputProps {
  id: string;
  label: string;
  value: string;
  type?: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface AdminImgUploadeerProps {
  imagePreview: string | null;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export type InputState = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

export interface MissionStatus {
  date: string;
  missionStatus: {
    quiz: boolean;
    news: boolean;
  };
}

export interface DraftListContent {
  id: number;
  newsContent: NewsRequest;
  scheduledAt: string;
  createdAt: string;
}

export interface AddHistoriesPayload {
  dictionaryIds: number[];
}

import ReactPlayer from 'react-player';
import { RefObject } from 'react';

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
  details: string;
}

export interface WordDictionary {
  id: number;
  term: string;
  details: string;
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

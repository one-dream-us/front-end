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

// My Scrap
export interface ScrapedContentData {
  scrapId: number;
  content: {
    id: number;
    title: string;
    contentUrl: string;
    thumbnailUrl: string;
    createdAt: string;
    author: 'string';
  };
}

export interface ScrapedTermData {
  scrapId: number;
  dictionary: {
    id: number;
    term: string;
    details: string;
  };
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

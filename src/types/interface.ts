export interface ContentCardTypes {
  id: number;
  thumbnailSrc: string;
  keywords: {
    id: number;
    title: string;
  }[];
  title: string;
  description: string;
  date: string;
  scrapCount: number;
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
  id: number;
  keywords: {
    id: number;
    title: string;
  }[];
  title: string;
  date: string;
  thumbnailSrc: string;
}

export interface ScrapedTermData {
  id: number;
  term: string;
  definition: string;
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
  contentId: string;
  summary_text: string;
  full_text: {
    time: string;
    text: string;
  }[];
}

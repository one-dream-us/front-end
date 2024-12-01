export interface ContentCardTypes {
  id: number;
  thumbnail: string;
  tag: {
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

// My Scrap
export interface ScrapedContentData {
  id: number;
  keywords: string[];
  title: string;
  date: string;
  thumbnailSrc: string;
}

export interface ScrapedTermData {
  id: number;
  term: string;
  definition: string;
}

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

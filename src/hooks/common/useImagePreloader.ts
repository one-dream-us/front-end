import { useEffect } from 'react';

const useImagePreloader = (imageSrcs: string[]) => {
  useEffect(() => {
    const links: HTMLLinkElement[] = [];

    imageSrcs.forEach((src) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      links.push(link);
    });

    return () => {
      links.forEach((link) => {
        document.head.removeChild(link);
      });
    };
  }, [imageSrcs]);
};

export default useImagePreloader;

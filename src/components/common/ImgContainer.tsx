import { ImgData } from '@/types/interface';

export default function ImgContainer({ imgs, className }: { imgs: ImgData; className: string }) {
  return (
    <picture>
      <source srcSet={imgs.webp} type='image/webp' />
      <source srcSet={imgs.png} type='image/png' />
      <img className={className} loading='lazy' src={imgs.png} alt='img' />
    </picture>
  );
}

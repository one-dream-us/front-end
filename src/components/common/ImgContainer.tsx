import { ImgData } from '@/types/interface';

export default function ImgContainer({
  imgs,
  className,
  alt,
}: {
  imgs: ImgData;
  className: string;
  alt: string;
}) {
  return (
    <picture>
      <source srcSet={imgs.webp} type='image/webp' />
      <source srcSet={imgs.png} type='image/png' />
      <img className={className} loading='lazy' src={imgs.png} alt={alt} />
    </picture>
  );
}

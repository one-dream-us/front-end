import { useInView } from 'react-intersection-observer';

export default function LazyImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const { ref, inView } = useInView();
  return <img ref={ref} src={inView ? src : ''} alt={alt} className={className} />;
}

import useMyScrapStore from '@/store/useMyScrapStore';
import Checkbox from '../Checkbox';
import playIcon from '@/assets/icons/hover=false.svg';

export default function Thumbnail({ src, alt, id }: { src: string; alt: string; id: number }) {
  const isEditing = useMyScrapStore((state) => state.isEditing);

  return (
    <div className='relative h-full w-[168px] md:w-[260px] desktop:w-[343px]'>
      {isEditing && (
        <div className='absolute left-[2px] top-[3px]'>
          <Checkbox id={id} />
        </div>
      )}
      <img src={src} alt={alt} className='h-full w-full rounded-[4px]' />
      {!isEditing && (
        <img
          src={playIcon}
          className='absolute right-1 top-1 flex w-6'
          alt='영상 다시보기 아이콘'
        />
      )}
    </div>
  );
}

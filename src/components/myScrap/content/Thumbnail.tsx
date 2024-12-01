import { Link } from 'react-router-dom';
import { isEditingAtom } from '@/store/atom';
import Checkbox from '../Checkbox';
import { useAtomValue } from 'jotai';

export default function Thumbnail({ src, alt, id }: { src: string; alt: string; id: number }) {
  const isEditing = useAtomValue(isEditingAtom);

  return (
    <div className='relative h-full w-[168px]'>
      {isEditing && (
        <div className='absolute left-[2px] top-[3px]'>
          <Checkbox id={id} />
        </div>
      )}
      <img src={src} alt={alt} className='h-full w-full rounded-[4px]' />
      <Link
        to={''}
        className='absolute right-2.5 top-2.5 flex h-[28px] w-[28px] items-center justify-center whitespace-pre-wrap'
      >
        i
      </Link>
    </div>
  );
}

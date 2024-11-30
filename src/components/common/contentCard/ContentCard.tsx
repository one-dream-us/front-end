import { ContentCardTypes } from '@/types/interface';

export default function ContentCard({
  date,
  description,
  scrapCount,
  tag,
  thumbnail,
  title,
}: ContentCardTypes) {
  return (
    <div className='h-96 max-w-96 px-4'>
      <img
        className='mb-5 h-48 w-full rounded-lg bg-custom-gray-light'
        src={thumbnail}
        alt='content thumbnail'
      />

      <div className='flex w-full flex-col items-start justify-start gap-y-2'>
        {/* tag */}
        <div className='line-clamp-1 flex items-center justify-normal gap-x-1'>
          {tag.map((item) => (
            <span key={item.id} className='rounded-lg border px-2 py-1 text-xs'>
              #{item.title}
            </span>
          ))}
        </div>

        {/* content title */}
        <h1 className='line-clamp-2 text-xl font-extrabold'>{title}</h1>

        {/* content desc */}
        <span className='line-clamp-2 text-sm'>{description}</span>

        {/* date */}
        <span className='text-xs text-custom-gray-400'>
          {date}, 스크랩 {scrapCount}
        </span>
      </div>
    </div>
  );
}

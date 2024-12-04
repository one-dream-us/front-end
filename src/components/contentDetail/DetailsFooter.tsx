import ScrapAndShare from '@/components/contentDetail/ScrapAndShare';

export default function DetailsFooter({
  reference,
  contentId,
}: {
  reference: string;
  contentId: number;
}) {
  return (
    <div className='mb-[45px] flex items-center justify-between desktop:hidden'>
      <span className='text-xs'>{reference}</span>
      <ScrapAndShare contentId={contentId} />
    </div>
  );
}

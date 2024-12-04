export default function VideoPlayer({
  youtubeId,
  videoTime,
}: {
  youtubeId: string;
  videoTime: number;
}) {
  return (
    <iframe
      className='fixed left-0 top-[52px] z-50 h-custom-video-md w-full md:h-[424px] desktop:static desktop:h-[294px] desktop:w-[533px]'
      src={`https://www.youtube.com/embed/${youtubeId}?start=${videoTime}&autoplay=1`}
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    />
  );
}

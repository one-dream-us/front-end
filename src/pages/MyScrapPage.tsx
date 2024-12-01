import MenuWithUnderbar from '@/components/myScrap/MenuWithUnderbar';

export default function MyScrapPage() {
  return (
    <section className='flex min-h-full w-full flex-col gap-y-5 px-4'>
      <h1 className='text-[22px] font-bold text-custom-black'>MY 스크랩</h1>
      <MenuWithUnderbar />
    </section>
  );
}

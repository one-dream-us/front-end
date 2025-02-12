import NewsContentForm from './NewsContentForm';

export default function NewsContentFormContainer() {
  return (
    <div className='space-y-4'>
      <NewsContentForm index={0} />
      <NewsContentForm index={1} />
      <NewsContentForm index={2} />
    </div>
  );
}

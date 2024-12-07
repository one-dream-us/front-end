import ScrapedContents from './content/ScrapedContents';
import ScrapedTerms from './keyword/ScrapedTerms';
import EditSection from './edit/EditSection';
import { myScrapMenu } from '@/types/types';

export default function ContentDisplay({ activeMenu }: { activeMenu: myScrapMenu }) {
  return (
    <div className='mb-[60px] flex w-full flex-col'>
      <EditSection />
      {activeMenu === '콘텐츠' && <ScrapedContents activeMenu={activeMenu} />}
      {activeMenu === '단어장' && <ScrapedTerms activeMenu={activeMenu} />}
    </div>
  );
}

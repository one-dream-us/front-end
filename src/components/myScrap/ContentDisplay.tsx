import { useContentDisplay } from '@/hooks/myScrap/useContentDisplay';
import ScrapedContents from './content/ScrapedContents';
import ScrapedTerms from './keyword/ScrapedTerms';
import EmptyState from './EmptyState';
import EditSection from './edit/EditSection';
import { myScrapMenu } from '@/types/types';

export default function ContentDisplay({ activeMenu }: { activeMenu: myScrapMenu }) {
  const { data: contents, isLoading } = useContentDisplay(activeMenu);

  if (isLoading) return <div />;

  const renderContent = (menu: myScrapMenu) => {
    if (contents.length === 0) {
      return <EmptyState activeMenu={menu} />;
    }

    return (
      <>
        <EditSection />
        {menu === '스크랩' && <ScrapedContents scrapedItems={contents} />}
        {menu === '단어장' && <ScrapedTerms scrapedItems={contents} />}
      </>
    );
  };

  return <div className='mb-[60px] flex w-full flex-col'>{renderContent(activeMenu)}</div>;
}

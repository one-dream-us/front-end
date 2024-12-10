import Thumbnail from './Thumbnail';
import ScrapInfo from './ScrapInfo';
import { useAllScrapedIds } from '@/hooks/myScrap/useAllScrapedIds';
import { ScrapedContentData } from '@/types/interface';
import { formatDate } from '@/utils/myScrapUtils';
import EditSection from '../edit/EditSection';
import useMyScrapStore from '@/store/useMyScrapStore';
import { Link } from 'react-router-dom';
import ScrapedItemModals from '../ScrapItemModals';
import KeywordTags from '@/components/common/contentCard/KeywordTags';

export default function ScrapedContents({ contentList }: { contentList: ScrapedContentData[] }) {
  const isEditing = useMyScrapStore((state) => state.isEditing);
  useAllScrapedIds(contentList);

  return (
    <div className='mb-[60px] flex w-full flex-col desktop:ml-auto desktop:w-[811px]'>
      {contentList.length > 0 && <EditSection />}
      <div className='mt-5 flex flex-col justify-center gap-y-5'>
        {contentList.map((content: ScrapedContentData) => (
          <Link key={content.scrapId} to={isEditing ? '' : `/content/${content.contentId}`}>
            <article
              key={content.scrapId}
              className='flex h-[94px] gap-x-2.5 md:h-[145px] md:gap-x-[15px] desktop:h-[190px] desktop:gap-x-7'
            >
              <Thumbnail
                src={content.thumbnailUrl}
                alt={content.contentTitle}
                id={content.scrapId}
              />
              <div className='flex flex-1 flex-col justify-center gap-y-1 text-custom-black md:gap-y-0 md:text-sm'>
                <div className='hidden md:block'>
                  <KeywordTags tags={content.tags.map((tag) => tag.tagValue)} />
                </div>
                <p className='line-clamp-2 font-medium leading-170 md:mb-2 md:text-lg'>
                  {content.contentTitle}
                </p>
                <div className='hidden md:mb-2 md:block'>
                  <div
                    dangerouslySetInnerHTML={{ __html: content.summaryText }}
                    className='line-clamp-2 desktop:line-clamp-3'
                  />
                </div>
                <ScrapInfo date={formatDate(content.createdAt)} />
              </div>
            </article>
          </Link>
        ))}
        <ScrapedItemModals activeMenu='콘텐츠' />
      </div>
    </div>
  );
}

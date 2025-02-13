import adminApi from '@/services/adminApi';
import { AdminContentDetailType, CurrentTabType } from '@/types/interface';
import { highlightedDesc } from '@/utils/contentDetail/highlightedDesc';
import { useQuery } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';

export default function AdminContentDetail() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status') as CurrentTabType;

  const { data, isLoading, isError } = useQuery<AdminContentDetailType>({
    queryKey: ['admin-detail', id, status],
    queryFn: async () => await adminApi.getDetailInfo(Number(id)),
  });

  if (isLoading || !data) return <h1>loading...</h1>;
  if (isError) {
    return <h1>에러 :(</h1>;
  }
  return (
    <div className='m-auto max-w-6xl p-6'>
      <ul className='flex flex-col gap-y-5'>
        <li>제목 : {data?.title}</li>
        <li>뉴스사 : {data.newsAgency}</li>
        <li>
          전체 문장 :{' '}
          <span
            dangerouslySetInnerHTML={{
              __html: highlightedDesc(data.fullSentence, '', 'highlight_underline'),
            }}
          />
        </li>
        <li>
          뉴스 원문 :{' '}
          <a href={data.link} target='_blank' className='text-blue-700 hover:text-red-700'>
            바로가기
          </a>
        </li>
        <li>
          {data.descriptions.map((item, index) => (
            <div key={item.term} className='mb-2 flex flex-col gap-y-5 border-2'>
              <span>요약 {index + 1}</span>
              <div className='mb-5 px-3'>
                <h1 className='mb-2'>
                  기사 :{' '}
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightedDesc(item.sentence, '', 'highlight_text'),
                    }}
                  />
                </h1>
                <h1 className='mb-2'>단어 : {item.term}</h1>
                <h1 className='mb-2'>
                  정의 :
                  <span
                    dangerouslySetInnerHTML={{
                      __html: highlightedDesc(item.definition, '', 'highlight_underline'),
                    }}
                  />
                </h1>
                <h1 className='mb-2'>해설 : {item.description}</h1>
              </div>
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
}

import useNewsDetail from '@/hooks/newDetail/useNewsDetail';
import CompleteWordCard from './CompleteWordCard';

export default function CardContainer() {
  const { news, isLoading } = useNewsDetail((data) => data.descriptions);

  return (
    <>
      {isLoading ? (
        <>
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className={`skeleton box-border flex h-[56px] w-full items-center justify-between rounded-[4px] px-6 py-4`}
            ></div>
          ))}
        </>
      ) : (
        <>
          {news?.map((item, index) => (
            <CompleteWordCard key={item.dictionaryId} {...item} index={index} />
          ))}
        </>
      )}
    </>
  );
}

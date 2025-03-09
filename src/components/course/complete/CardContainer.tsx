import useNewsDetail from '@/hooks/newDetail/useNewsDetail';
import CompleteWordCard from './CompleteWordCard';
// import { useEffect } from 'react';
// import { useMutation } from '@tanstack/react-query';
// import axios from 'axios';

// interface PayloadTypes {
//   dictionaryIds: {
//     id: number;
//   }[];
// }

export default function CardContainer() {
  const { news, isLoading } = useNewsDetail((data) => data.descriptions);

  // const { mutate: addHistory } = useMutation({
  //   mutationFn: async (payload: PayloadTypes) => (await axios.post('/history', payload)).data,
  // });

  // useEffect(() => {
  //   if (!isLoading) {
  //     const res = news?.map(({ dictionaryId }) => ({ id: dictionaryId }));
  //     addHistory({ dictionaryIds: res! });
  //   }
  // }, [isLoading]);

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
        <>{news?.map((item) => <CompleteWordCard key={item.dictionaryId} {...item} />)}</>
      )}
    </>
  );
}

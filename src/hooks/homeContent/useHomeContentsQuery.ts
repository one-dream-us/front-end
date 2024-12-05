import { useQuery } from '@tanstack/react-query';

export const useHomeContentsQuery = <T,>(queryKey: string, queryFn: () => Promise<any>) => {
  return useQuery<T>({
    queryKey: ['home', queryKey],
    queryFn,
  });
};

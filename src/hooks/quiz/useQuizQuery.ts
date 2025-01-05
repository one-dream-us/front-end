import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface IQuiz {
  problem: string;
  id: number;
  done: boolean;
  answer: string;
  options: {
    id: number;
    option: string;
    desc: string;
  }[];
}
const useQuizQuery = () => {
  return useQuery<IQuiz[]>({
    queryKey: ['quizs'],
    queryFn: async () => (await axios.get('/quizs')).data,
  });
};
export default useQuizQuery;

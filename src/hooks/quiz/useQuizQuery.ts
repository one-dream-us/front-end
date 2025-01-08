import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface IQuiz {
  question: string;
  id: number;
  done: boolean;
  answer: string;
  options: IOPtions[];
}

export interface IOPtions {
  id: number;
  option: string;
  desc: string;
}
const useQuizQuery = () => {
  return useQuery<IQuiz[]>({
    queryKey: ['quizs'],
    queryFn: async () => (await axios.get('/quizs')).data,
  });
};
export default useQuizQuery;

import { contentCardDataList } from './data/contentCard';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/contents', () => {
    return HttpResponse.json(contentCardDataList);
  }),
];

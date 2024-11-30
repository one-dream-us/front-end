import { HttpResponse } from './../../node_modules/msw/src/core/HttpResponse';
import { http } from './../../node_modules/msw/src/core/http';
import { contentCardDataList } from './data/contentCard';

export const handlers = [
  http.get('/contents', () => {
    return HttpResponse.json(contentCardDataList);
  }),
];

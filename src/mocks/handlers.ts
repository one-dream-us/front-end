import contents from './data/contents';
import scrapedTerms from '@/mocks/data/scrapedTerms.json';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/contents', () => {
    return HttpResponse.json(contents);
  }),

  http.get('/scrap/content', () => {
    return HttpResponse.json(contents);
  }),

  http.get('/scrap/term', () => {
    return HttpResponse.json(scrapedTerms);
  }),
  http.post('/history', async ({ request }) => {
    const res = await request.json();
    console.log(res);
    return HttpResponse.json(res);
  }),
  http.post(`/bookmark/dictionaries/:dictionaryId`, async ({ params }) => {
    console.log(params);
    return HttpResponse.json(params.dictionaryId);
  }),

  // server mocking
  http.get(
    `${import.meta.env.VITE_BACKEND_SERVER_URL}v1/back-office/contents/news?page=${0}&size=${5}`,
    ({ request }) => {
      const url = new URL(request.url);
      if (url.searchParams.get('page') === '0' && url.searchParams.get('size') === '5') {
        return HttpResponse.json({ totalElements: 10 });
      }
      return HttpResponse.json({ totalElements: 0 });
    },
  ),
];

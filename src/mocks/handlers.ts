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
];

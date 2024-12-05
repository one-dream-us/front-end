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

  http.delete('/delete/scraped-contents', async ({ request }) => {
    const ids = await request.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return new HttpResponse(null, { status: 400, statusText: 'Invalid or missing ids array' });
    }
    const updatedScrapedContents = [...contents].filter((content) => !ids.includes(content.id));
    return HttpResponse.json(updatedScrapedContents);
  }),

  http.delete('/delete/scraped-terms', async ({ request }) => {
    const ids = await request.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return new HttpResponse(null, { status: 400, statusText: 'Invalid or missing ids array' });
    }
    const updatedScrapedTerms = [...scrapedTerms].filter((term) => !ids.includes(term.id));
    return HttpResponse.json(updatedScrapedTerms);
  }),
];

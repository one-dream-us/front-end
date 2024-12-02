import { contentCardDataList } from './data/contentCard';
import scrapedContents from '@/mocks/data/scrapedContents.json';
import scrapedTerms from '@/mocks/data/scrapedTerms.json';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/contents', () => {
    return HttpResponse.json(contentCardDataList);
  }),

  http.get('/scraped-contents', () => {
    return HttpResponse.json(scrapedContents);
  }),

  http.get('/scraped-terms', () => {
    return HttpResponse.json(scrapedTerms);
  }),

  http.delete('/delete/scraped-contents', async ({ request }) => {
    const ids = await request.json();
    if (!Array.isArray(ids) || ids.length === 0) {
      return new HttpResponse(null, { status: 400, statusText: 'Invalid or missing ids array' });
    }
    const updatedScrapedContents = [...scrapedContents].filter(
      (content) => !ids.includes(content.id),
    );
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

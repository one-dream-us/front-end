import { server } from '@/mocks/server';
import '@testing-library/jest-dom';
// vitest.setup.js
import { beforeAll, afterEach, afterAll } from 'vitest';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

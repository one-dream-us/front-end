import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@/assets/fonts/font.css';

const enableMocking = async () => {
  // if (process.env.NODE_ENV !== 'development') {
  //   return;
  // }
  // const { worker } = await import('./mocks/browser');
  // return worker.start({
  //   serviceWorker: {
  //     url: '/mockServiceWorker.js',
  //   },
  // });
};

(async () => {
  try {
    await enableMocking();
    createRoot(document.getElementById('root')!).render(<App />);
  } catch (e) {
    console.log(e);
  }
})();

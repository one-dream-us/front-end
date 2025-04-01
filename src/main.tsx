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

window.GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;

const insertGTM = () => {
  const gtmId = import.meta.env.VITE_GTM_ID;

  if (gtmId) {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', '${gtmId}');
    `;
    document.head.appendChild(script);
  }
};

window.addEventListener('DOMContentLoaded', insertGTM);

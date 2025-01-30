export default function createLoginUrl(provider: 'kakao' | 'google') {
  let prev;
  if (history.state && history.state.usr) {
    const prevPage = history.state.usr.prevPage;
    prev = String(prevPage).includes('withdraw') ? location.origin : prevPage;
  } else {
    prev = location.origin;
  }
  return `${import.meta.env.VITE_BACKEND_SERVER_URL}oauth2/authorization/${provider}?redirectUrl=${prev}&joinUrl=${location.origin}/login`;
}

import { useEffect } from 'react';

export default function useShareModal() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized())
      window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
  });
}

import { useEffect } from 'react';
import useContentStore from '@/store/useContentStore';
import { useParams } from 'react-router-dom';

export default function useContentId() {
  const { id } = useParams();
  const { contentId, setContentId } = useContentStore();

  useEffect(() => {
    if (id) {
      const numericId = Number(id);
      setContentId(numericId);
    }
  }, [id, setContentId]);

  return contentId;
}

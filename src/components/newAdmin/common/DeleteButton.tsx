import adminApi from '@/services/adminApi';
import { useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DeleteButton({ id }: { id: number }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const isScheduledPage = pathname.includes('content');
  const handleRemoveContents = async () => {
    if (!confirm('컨텐츠를 삭제합니다.')) return;

    try {
      if (isScheduledPage) {
        await adminApi.deleteScheduledContents(id);
      } else {
        await adminApi.deleteDraftContents(+id);
      }
      navigate('/admin/home');
      queryClient.invalidateQueries({ queryKey: ['uploaded-list'] });
      queryClient.invalidateQueries({ queryKey: ['scheduled-upload-list'] });
      queryClient.invalidateQueries({ queryKey: ['draft-upload-list'] });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <button
      onClick={handleRemoveContents}
      className='mb-5 ml-auto flex w-fit rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700'
    >
      삭제
    </button>
  );
}

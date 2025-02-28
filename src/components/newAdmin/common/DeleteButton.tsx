import adminApi from '@/services/adminApi';

export default function DeleteButton({ id }: { id: number }) {
  const handleRemoveContents = async () => {
    if (!confirm('컨텐츠를 삭제합니다.')) return;

    try {
      await adminApi.deleteDraftContents(+id);
      location.pathname = '/admin/home';
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

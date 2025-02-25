import useDetailInfo from '@/hooks/newAdmin/useDetailInfo';

export default function UpdateFormContainer() {
  const { data, id, isError, isLoading, status } = useDetailInfo();

  return <div>{id} update page</div>;
}

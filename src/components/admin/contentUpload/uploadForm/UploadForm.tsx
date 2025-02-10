import { FormEvent } from 'react';
import FormSubmitButtons from './FormSubmitButtons';
import { useUploadFormStore } from '@/store/admin/uploadFormState';
import LabelInput from './LabelInput';
import NewsContentForm from './NewsContentForm';
import SelectDateForm from './SelectDateForm';

const UploadForm = () => {
  console.log('rerender');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uploadForm = useUploadFormStore.getState().uploadForm;

    console.log(uploadForm);
    console.log('바로 업로드');

    alert('업로드 완료');
  };

  return (
    <form onSubmit={handleSubmit} className='mx-auto w-full space-y-6 p-6'>
      <div className='space-y-4'>
        <LabelInput id='title' label='제목' placeholder='제목을 입력하세요' />
        <LabelInput id='newsCompany' label='뉴스사' placeholder='뉴스사를 입력하세요' />
        <LabelInput
          id='newsLink'
          label='뉴스 원문 링크'
          placeholder='뉴스 원문 링크를 입력하세요'
        />
        <LabelInput id='imgLink' label='이미지 링크' placeholder='이미지 링크를 입력하세요' />

        <div className='space-y-4'>
          {[0, 1, 2].map((item) => (
            <NewsContentForm key={item} id={item} />
          ))}
        </div>

        <SelectDateForm />
      </div>
      <FormSubmitButtons />
    </form>
  );
};

export default UploadForm;

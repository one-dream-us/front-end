import { FormEvent } from 'react';
import FormSubmitButtons from './FormSubmitButtons';
import { useUploadFormStore } from '@/store/admin/uploadFormState';
import LabelInput from './LabelInput';
import SelectDateForm from './SelectDateForm';
import NewsContentFormContainer from './NewsContentFormContainer';
import newsContentState from '@/store/admin/newsContentState';
import { UploadFormReqestBody } from '@/types/interface';
import adminApi from '@/services/adminApi';

const UploadForm = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { imgLink, newsCompany, newsLink, title } = useUploadFormStore.getState().uploadForm;
    const newsContents = newsContentState.getState().newsContents;
    console.log('바로 업로드');

    const payload: UploadFormReqestBody = {
      title,
      newsAgency: newsCompany,
      originalLink: newsLink,
      thumbnailUrl: imgLink,
      dictionarySentenceList: newsContents,
    };

    try {
      await adminApi.uploadImmediately(payload);
      location.pathname = '/admin/home';
      alert('업로드 완료');
    } catch (e) {
      console.log(e);
    }
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

        <NewsContentFormContainer />

        <SelectDateForm />
      </div>
      <FormSubmitButtons />
    </form>
  );
};

export default UploadForm;

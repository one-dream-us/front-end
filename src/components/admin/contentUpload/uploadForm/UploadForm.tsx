import { FormEvent, KeyboardEvent } from 'react';
import FormSubmitButtons from './FormSubmitButtons';
import { useUploadFormStore } from '@/store/admin/uploadFormState';
import LabelInput from './LabelInput';
import SelectDateForm from './SelectDateForm';
import NewsContentFormContainer from './NewsContentFormContainer';
import newsContentState from '@/store/admin/newsContentState';
import adminApi from '@/services/adminApi';
import adminState from '@/store/admin/adminState';
import { useNavigate } from 'react-router-dom';
import ImgUploader from './ImgUploader';
import imgState from '@/store/admin/imageState';
import { AxiosError } from 'axios';

const UploadForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { newsCompany, newsLink, title } = useUploadFormStore.getState().uploadForm;
    const newsContents = newsContentState.getState().newsContents;
    const img = imgState.getState().img;
    const { date, scheduled } = adminState.getState();

    const formData = new FormData();

    const newsRequestData = {
      title,
      originalLink: newsLink,
      newsAgency: newsCompany,
    };
    const newsRequestBlob = new Blob([JSON.stringify(newsRequestData)], {
      type: 'application/json',
    });
    const dictionarySentenceListBlob = new Blob([JSON.stringify(newsContents)], {
      type: 'application/json',
    });

    formData.append('newsRequest', newsRequestBlob);

    formData.append('dictionarySentenceList', dictionarySentenceListBlob);
    if (img) {
      formData.append('thumbnailImage', img);
    }
    try {
      if (!confirm('문장을 모두 저장 해야 업로드 가능해요! 모두 저장하셨나요??')) return;

      if (scheduled) {
        await adminApi.uploadScheduled(formData, date);
        alert(`${date} 오전 6시 업로드 예정`);
      } else {
        await adminApi.uploadImmediately(formData);
        alert('업로드 완료');
      }
      navigate('/admin/home');
    } catch (e) {
      console.log(e);
      if (e instanceof AxiosError) {
        console.log(e.response?.data[0]);
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <form
      onKeyDown={handleKeyDown}
      onSubmit={handleSubmit}
      className='mx-auto w-full space-y-6 p-6'
    >
      <div className='space-y-4'>
        <LabelInput id='title' label='제목' placeholder='제목을 입력하세요' />
        <LabelInput
          id='newsLink'
          label='뉴스 원문 링크'
          placeholder='뉴스 원문 링크를 입력하세요'
        />
        <LabelInput id='newsCompany' label='뉴스사' placeholder='뉴스사를 입력하세요' />

        <ImgUploader />

        <NewsContentFormContainer />

        <SelectDateForm />
      </div>
      <FormSubmitButtons />
    </form>
  );
};

export default UploadForm;

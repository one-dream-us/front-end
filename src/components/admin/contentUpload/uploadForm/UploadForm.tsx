import { FormEvent, KeyboardEvent } from 'react';
import FormSubmitButtons from './FormSubmitButtons';
import { useUploadFormStore } from '@/store/admin/uploadFormState';
import LabelInput from './LabelInput';
import SelectDateForm from './SelectDateForm';
import NewsContentFormContainer from './NewsContentFormContainer';
import newsContentState from '@/store/admin/newsContentState';
import { UploadFormReqestBody } from '@/types/interface';
import adminApi from '@/services/adminApi';
import adminState from '@/store/admin/adminState';
import { useNavigate } from 'react-router-dom';

const UploadForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { imgLink, newsCompany, newsLink, title } = useUploadFormStore.getState().uploadForm;
    const newsContents = newsContentState.getState().newsContents;
    const { date, scheduled } = adminState.getState();

    const payload: UploadFormReqestBody = {
      title,
      newsAgency: newsCompany,
      originalLink: newsLink,
      thumbnailUrl: imgLink,
      dictionarySentenceList: newsContents,
    };

    try {
      if (!confirm('문장을 모두 저장 해야 업로드 가능해요! 모두 저장하셨나요??')) return;
      if (!scheduled) {
        await adminApi.uploadImmediately(payload);
        alert('업로드 완료');
      } else {
        await adminApi.uploadScheduled(payload, date);
        alert(`${date} 오전 6시 업로드 예정`);
      }
      navigate('/admin/home');
    } catch (e) {
      console.log(e);
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

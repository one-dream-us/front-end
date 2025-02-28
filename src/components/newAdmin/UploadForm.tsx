import AutoSuggestionInputContainer from '@/containers/AutoSuggestionInputContainer';
import ImgUploaderContainer from '@/containers/ImgUploaderContainer';
import InputContainer from '@/containers/InputContainer';
import NewsBoxContainer from '@/containers/NewsBoxContainer';
import ScheduleFormContainer from '@/containers/ScheduleFormContainer';
import SubmitButtonContainer from '@/containers/SubmitButtonContainer';
import UpdateFormButtonsContainer from '@/containers/UpdateFormButtonsContainer';
import { AdminDict } from '@/store/newAdmin/useFormStore';
import { InputState } from '@/types/interface';
import { FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function UploadForm({
  handleSubmitForm,
  title,
  originalLink,
  newsAgency,
  handleImageChange,
  imagePreview,
  dictList,
}: {
  handleSubmitForm: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  title: InputState;
  originalLink: InputState;
  newsAgency: InputState;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | null;
  dictList: AdminDict[];
}) {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status');
  return (
    <form
      onSubmit={handleSubmitForm}
      onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
      className='mx-auto w-full space-y-6 p-6'
    >
      <div className='space-y-4'>
        <InputContainer
          id='title'
          label='제목'
          placeholder='제목을 입력하세요'
          value={title.value}
          onChange={title.handleInputChange}
        />
        <InputContainer
          id='originalLink'
          label='뉴스 원문 링크'
          placeholder='뉴스 원문 링크를 입력하세요'
          value={originalLink.value ?? ''}
          onChange={originalLink.handleInputChange}
        />
        <AutoSuggestionInputContainer
          id='newsAgency'
          label='뉴스사'
          placeholder='뉴스사를 입력하세요'
          value={newsAgency.value}
          onChange={newsAgency.handleInputChange}
          setValue={newsAgency.setValue}
        />
        <ImgUploaderContainer handleImageChange={handleImageChange} imagePreview={imagePreview} />
      </div>

      <div className='space-y-4'>
        {dictList.map((item) => (
          <NewsBoxContainer key={item.id} index={item.id} />
        ))}
      </div>

      <ScheduleFormContainer />

      {status !== 'scheduled' ? <SubmitButtonContainer /> : <UpdateFormButtonsContainer />}
    </form>
  );
}

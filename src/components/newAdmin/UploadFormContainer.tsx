import { FormEvent } from 'react';
import useInput from '@/hooks/admin/useInput';
import ImgUploaderContainer from '@/containers/ImgUploaderContainer';
import InputContainer from '@/containers/InputContainer';
import useImgUpload from '@/hooks/newAdmin/useImgUpload';
import NewsBoxContainer from '@/containers/NewsBoxContainer';
import { useNewsListStore, useScheduleStore } from '@/store/newAdmin/useFormStore';
import SubmitButtonContainer from '@/containers/SubmitButtonContainer';
import ScheduleFormContainer from '@/containers/ScheduleFormContainer';
import { useShallow } from 'zustand/shallow';
import adminApi from '@/services/adminApi';
import AutoSuggestionInputContainer from '@/containers/AutoSuggestionInputContainer';
import { DictionarySentenceList } from '@/types/interface';

export default function UploadFormContainer() {
  const title = useInput();
  const originalLink = useInput();
  const newsAgency = useInput();
  const { handleImageChange, imagePreview, file } = useImgUpload();
  const dictList = useNewsListStore(useShallow((s) => s.dictList));

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    const newsRequestData = {
      title: title.value,
      originalLink: originalLink.value,
      newsAgency: newsAgency.value,
    };
    const dictionarySentenceList: DictionarySentenceList[] = dictList.map(
      ({ definition, desc, endIndex, sentence, startIndex, word, wordId }) => ({
        dictionaryDefinition: definition,
        dictionaryDescription: desc,
        endIdx: endIndex!,
        sentenceValue: sentence,
        startIdx: startIndex!,
        dictionaryTerm: word,
        dictionaryId: wordId,
      }),
    );
    const newsRequestBlob = new Blob([JSON.stringify(newsRequestData)], {
      type: 'application/json',
    });
    const dictionarySentenceListBlob = new Blob([JSON.stringify(dictionarySentenceList)], {
      type: 'application/json',
    });

    formData.append('newsRequest', newsRequestBlob);
    formData.append('dictionarySentenceList', dictionarySentenceListBlob);
    if (file) {
      formData.append('thumbnailImage', file);
    }
    const isSchedule = useScheduleStore.getState().isSchedule;
    const date = useScheduleStore.getState().date;

    try {
      if (isSchedule) {
        console.log(date);
        await adminApi.uploadScheduled(formData, date);
        alert(`${date} 예약 완료`);
      } else {
        await adminApi.uploadImmediately(formData);
        alert(`업로드 완료`);
      }
    } catch (e) {
      console.log(e);
      alert('오류입니다. 다시 시도해주세요');
    } finally {
      location.pathname = '/admin/home';
    }
  };
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
          value={originalLink.value}
          onChange={originalLink.handleInputChange}
        />
        {/* <InputContainer
          id='newsAgency'
          label='뉴스사'
          placeholder='뉴스사를 입력하세요'
          value={newsAgency.value}
          onChange={newsAgency.handleInputChange}
        /> */}
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
      <SubmitButtonContainer />
    </form>
  );
}

import { FormEvent } from 'react';
import useInput from '@/hooks/admin/useInput';
import useImgUpload from '@/hooks/newAdmin/useImgUpload';
import { useNewsListStore, useScheduleStore } from '@/store/newAdmin/useFormStore';
import { useShallow } from 'zustand/shallow';
import adminApi from '@/services/adminApi';
import { DictionarySentenceList } from '@/types/interface';
import UploadForm from './UploadForm';

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
    <UploadForm
      dictList={dictList}
      handleImageChange={handleImageChange}
      handleSubmitForm={handleSubmitForm}
      imagePreview={imagePreview}
      newsAgency={newsAgency}
      originalLink={originalLink}
      title={title}
    />
  );
}

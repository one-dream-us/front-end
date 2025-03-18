import UploadForm from '@/components/newAdmin/UploadForm';
import useInput from '@/hooks/admin/useInput';
import useDetailInfo from '@/hooks/newAdmin/useDetailInfo';
import useImgUpload from '@/hooks/newAdmin/useImgUpload';
import {
  useNewsListStore,
  useScheduleStore,
  useUplodTypeStore,
} from '@/store/newAdmin/useFormStore';
import { getMarkingWord, removeMarkTag } from '@/utils/admin/adminUtils';
import { FormEvent, useEffect } from 'react';
import adminApi from '@/services/adminApi';
import { DictionarySentenceList } from '@/types/interface';
import DeleteButton from '@/components/newAdmin/common/DeleteButton';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

export default function UpdateFormContainer() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data, isLoading, id, status } = useDetailInfo();

  const title = useInput();
  const originalLink = useInput();
  const newsAgency = useInput();

  const { dictList, setDictList } = useNewsListStore();
  const { handleImageChange, imagePreview, file, setImagePreview, fileUpdated } = useImgUpload(); // 서버에서 썸네일 링크 받아서 useEffect내에서 setImagePreview

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();

    const uploadType = useUplodTypeStore.getState().uploadType;
    const date = useScheduleStore.getState().date;

    if (uploadType === 'draft') {
      const draftNewsRequest = {
        title: title.value,
        originalLink: originalLink.value,
        newsAgency: newsAgency.value,
        draftNewsId: +id!,
      };
      const dictionarySentenceList: DictionarySentenceList[] = dictList.map(
        ({ definition, desc, endIndex, sentence, startIndex, word, wordId }) => ({
          dictionaryDefinition: definition,
          dictionaryDescription: desc,
          endIdx: endIndex ?? 0,
          sentenceValue: sentence,
          startIdx: startIndex ?? 0,
          dictionaryTerm: word,
          dictionaryId: wordId,
        }),
      );
      const draftNewsRequestBlob = new Blob([JSON.stringify(draftNewsRequest)], {
        type: 'application/json',
      });
      const dictionarySentenceListBlob = new Blob([JSON.stringify(dictionarySentenceList)], {
        type: 'application/json',
      });

      formData.append('draftNewsRequest', draftNewsRequestBlob);
      formData.append('dictionarySentenceList', dictionarySentenceListBlob);
      if (fileUpdated && file) {
        formData.append('thumbnailImage', file);
      } else {
        formData.append('thumbnailImage', JSON.stringify(null));
      }
    } else {
      const newsRequestData = {
        title: title.value,
        originalLink: originalLink.value,
        newsAgency: newsAgency.value,
        thumbnailUrl: fileUpdated ? '' : data?.thumbnailUrl,
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
      if (fileUpdated) {
        formData.append('thumbnailImage', file!);
      }
    }

    try {
      switch (uploadType) {
        case 'scheduled':
          console.log(date);
          console.log('예약');
          await adminApi.uploadScheduled(formData, date, id);
          alert(`${date} 예약 완료`);
          break;
        case 'immediately':
          console.log('즉시');
          await adminApi.uploadImmediately(formData, id);
          alert(`업로드 완료`);
          break;
        case 'draft':
          console.log('임시 저장');
          await adminApi.updateDraftContents(formData);
          alert(`임시 저장 완료`);
          break;
        case 'Updatescheduled':
          console.log('예약 수정');
          await adminApi.updateScheduledContent(+id!, data?.scheduledAt as string, formData);
          alert(`예약 수정 완료`);
      }
      queryClient.invalidateQueries({ queryKey: ['uploaded-list'] });
      queryClient.invalidateQueries({ queryKey: ['scheduled-upload-list'] });
      queryClient.invalidateQueries({ queryKey: ['draft-upload-list'] });
      queryClient.invalidateQueries({ queryKey: ['admin-detail', id, status] });
      navigate('/admin/home');
    } catch (e) {
      let msg;
      if (e instanceof AxiosError) {
        msg = e.response?.data?.errorMessage ?? '오류 ㅜ';
      }
      alert(msg);
    } finally {
      // location.pathname = '/admin/home';
    }
  };
  useEffect(() => {
    if (!isLoading && data) {
      title.setValue(data?.title);
      originalLink.setValue(data.link);
      newsAgency.setValue(data?.newsAgency);
      setImagePreview(data.thumbnailUrl ?? '');

      data.descriptions.forEach((item, index) => {
        const normalizedSentence = removeMarkTag(item.sentence);
        const normalizedDefinition = removeMarkTag(item.definition);
        setDictList({ key: 'definition', value: normalizedDefinition, index });
        setDictList({ key: 'desc', value: item.description, index });
        setDictList({ key: 'sentence', value: normalizedSentence, index });
        setDictList({ key: 'wordId', value: item.dictionaryId, index });
        setDictList({ key: 'word', value: item.term, index });

        if (item.sentence.includes('<mark>')) {
          const markedWord = getMarkingWord(item.sentence);
          const startIndex = normalizedSentence.indexOf(markedWord);
          const endIndex = startIndex + markedWord?.length - 1;
          // const draggedWord = getDraggedWord(normalizedSentence, startIndex, endIndex);

          console.log('normalizedSentence', normalizedSentence);
          console.log('markedWord', markedWord);
          console.log('startIndex', startIndex);
          console.log('endIndex', endIndex);

          setDictList({ key: 'draggedWord', value: markedWord, index });
          setDictList({ key: 'startIndex', value: startIndex, index });
          setDictList({
            key: 'endIndex',
            value: endIndex,
            index,
          });
        } else {
          setDictList({ key: 'startIndex', value: 0, index });
          setDictList({
            key: 'endIndex',
            value: 0,
            index,
          });
        }
      });
    }
  }, [data, isLoading]);

  if (isLoading) return <h1>loading...</h1>;
  return (
    <>
      {status === 'draft' && (
        <div className='px-6'>
          <DeleteButton id={+id!} />
        </div>
      )}
      <UploadForm
        title={title}
        originalLink={originalLink}
        newsAgency={newsAgency}
        dictList={dictList}
        handleSubmitForm={handleSubmitForm}
        handleImageChange={handleImageChange}
        imagePreview={imagePreview}
      />
    </>
  );
}

import UploadForm from '@/components/newAdmin/UploadForm';
import useInput from '@/hooks/admin/useInput';
import useDetailInfo from '@/hooks/newAdmin/useDetailInfo';
import useImgUpload from '@/hooks/newAdmin/useImgUpload';
import {
  useNewsListStore,
  useScheduleStore,
  useUplodTypeStore,
} from '@/store/newAdmin/useFormStore';
import { getDraggedWord, getMarkingWord, removeMarkTag } from '@/utils/admin/adminUtils';
import { FormEvent, useEffect } from 'react';
import adminApi from '@/services/adminApi';
import { DictionarySentenceList } from '@/types/interface';
import DeleteButton from '@/components/newAdmin/common/DeleteButton';

export default function UpdateFormContainer() {
  const { data, isLoading, id, status } = useDetailInfo();
  console.log(data);

  const title = useInput();
  const originalLink = useInput();
  const newsAgency = useInput();

  const { dictList, setDictList } = useNewsListStore();
  const { handleImageChange, imagePreview, file, setImagePreview } = useImgUpload(); // 서버에서 썸네일 링크 받아서 useEffect내에서 setImagePreview

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
        // scheduledAt: '2025-03-02',
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
      formData.append('thumbnailImage', file ?? '');
    } else {
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
    }

    try {
      switch (uploadType) {
        case 'scheduled':
          console.log(date);
          console.log('예약');
          await adminApi.uploadScheduled(formData, date);
          alert(`${date} 예약 완료`);
          break;
        case 'immediately':
          console.log('즉시');
          await adminApi.uploadImmediately(formData);
          alert(`업로드 완료`);
          break;
        case 'draft':
          console.log('임시 저장');
          await adminApi.updateDraftContents(formData);
          alert(`임시 저장 완료`);
      }
    } catch (e) {
      console.log(e);
      alert('오류입니다. 다시 시도해주세요');
    } finally {
      location.pathname = '/admin/home';
    }
  };
  useEffect(() => {
    if (!isLoading && data) {
      title.setValue(data?.title);
      originalLink.setValue(data.link);
      newsAgency.setValue(data?.newsAgency);
      setImagePreview(data.thumbnailUrl ?? '');

      data.descriptions.forEach((item, index) => {
        setDictList({ key: 'definition', value: item.definition, index });
        setDictList({ key: 'desc', value: item.description, index });
        setDictList({ key: 'sentence', value: item.sentence, index });
        setDictList({ key: 'wordId', value: item.dictionaryId, index });
        setDictList({ key: 'word', value: item.term, index });

        if (item.sentence.includes('<mark>')) {
          const normalizedSentence = removeMarkTag(item.sentence);
          const markedWord = getMarkingWord(item.sentence);
          const startIndex = normalizedSentence.indexOf(markedWord);
          const endIndex = startIndex + markedWord?.length - 1;
          const draggedWord = getDraggedWord(normalizedSentence, startIndex, endIndex);

          setDictList({ key: 'draggedWord', value: draggedWord, index });
          setDictList({ key: 'startIndex', value: startIndex, index });
          setDictList({
            key: 'endIndex',
            value: endIndex,
            index,
          });
        }
        setDictList({ key: 'startIndex', value: 0, index });
        setDictList({
          key: 'endIndex',
          value: 0,
          index,
        });
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

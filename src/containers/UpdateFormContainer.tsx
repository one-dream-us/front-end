import UploadForm from '@/components/newAdmin/UploadForm';
import useInput from '@/hooks/admin/useInput';
import useDetailInfo from '@/hooks/newAdmin/useDetailInfo';
import useImgUpload from '@/hooks/newAdmin/useImgUpload';
import { useNewsListStore } from '@/store/newAdmin/useFormStore';
import { getDraggedWord, getMarkingWord, removeMarkTag } from '@/utils/admin/adminUtils';
import { FormEvent, useEffect } from 'react';

export default function UpdateFormContainer() {
  const { data, isLoading } = useDetailInfo();

  const title = useInput();
  const originalLink = useInput();
  const newsAgency = useInput();

  const { dictList, setDictList } = useNewsListStore();
  const { handleImageChange, imagePreview } = useImgUpload(); // 서버에서 썸네일 링크 받아서 useEffect내에서 setImagePreview

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('아직');
    console.log(dictList);

    // const isSchedule = useScheduleStore.getState().isSchedule;
    // const date = useScheduleStore.getState().date;

    // if (isSchedule) {
    //   console.log('예약');
    //   console.log(date);
    //   return;
    // } else {
    //   console.log('즉시');
    // }
  };

  useEffect(() => {
    if (!isLoading && data) {
      title.setValue(data?.title);
      originalLink.setValue(data.link);
      newsAgency.setValue(data?.newsAgency);

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
      });
    }
  }, [data, isLoading]);

  if (isLoading) return <h1>loading...</h1>;
  return (
    <UploadForm
      title={title}
      originalLink={originalLink}
      newsAgency={newsAgency}
      dictList={dictList}
      handleSubmitForm={handleSubmitForm}
      handleImageChange={handleImageChange}
      imagePreview={imagePreview}
    />
  );
}

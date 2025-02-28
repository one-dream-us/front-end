import Input from '@/components/newAdmin/common/Input';
import { useNewsListStore, useUplodTypeStore } from '@/store/newAdmin/useFormStore';
import { AdminInputProps } from '@/types/interface';
import { SyntheticEvent, TouchEvent } from 'react';
import { useShallow } from 'zustand/shallow';

export default function DragSentenseContainer(props: AdminInputProps & { index: number }) {
  const setDictList = useNewsListStore(useShallow((s) => s.setDictList));
  const { uploadType } = useUplodTypeStore();

  const handleSelect = (e: SyntheticEvent<HTMLInputElement>) => {
    const start = e.currentTarget.selectionStart as number;
    const end = e.currentTarget.selectionEnd as number;

    const draggedWord = props?.value
      .split('')
      .filter((item, index) => {
        if (index >= Number(start) && index <= Number(end) - 1) {
          return item;
        }
      })
      .join('');
    setDictList({ key: 'startIndex', value: start, index: props.index });
    setDictList({ key: 'endIndex', value: end - 1, index: props.index });
    setDictList({ key: 'draggedWord', value: draggedWord, index: props.index });
  };

  const handleTouchEnd = (e: TouchEvent<HTMLInputElement>) => {
    const start = e.currentTarget.selectionStart as number;
    const end = e.currentTarget.selectionEnd as number;

    const draggedWord = props?.value
      .split('')
      .filter((item, index) => {
        if (index >= Number(start) && index <= Number(end) - 1) {
          return item;
        }
      })
      .join('');
    setDictList({ key: 'startIndex', value: start, index: props.index });
    setDictList({ key: 'endIndex', value: end - 1, index: props.index });
    setDictList({ key: 'draggedWord', value: draggedWord, index: props.index });
  };

  return (
    <Input
      {...props}
      onSelect={handleSelect}
      onTouchEnd={handleTouchEnd}
      required={uploadType !== 'draft'}
    />
  );
}

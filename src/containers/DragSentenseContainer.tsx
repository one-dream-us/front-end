import { useNewsListStore, useUplodTypeStore } from '@/store/newAdmin/useFormStore';
import { AdminInputProps } from '@/types/interface';
import { SyntheticEvent, TouchEvent } from 'react';
import { useShallow } from 'zustand/shallow';

export default function DragSentenseContainer(props: AdminInputProps & { index: number }) {
  const setDictList = useNewsListStore(useShallow((s) => s.setDictList));
  const { uploadType } = useUplodTypeStore();

  const handleSelect = (e: SyntheticEvent<HTMLTextAreaElement>) => {
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
    console.log('selected : ', draggedWord);
    setDictList({ key: 'startIndex', value: start, index: props.index });
    setDictList({ key: 'endIndex', value: end - 1, index: props.index });
    setDictList({ key: 'draggedWord', value: draggedWord, index: props.index });
  };

  const handleTouchEnd = (e: TouchEvent<HTMLTextAreaElement>) => {
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
    console.log('touchend : ', draggedWord);
    setDictList({ key: 'startIndex', value: start, index: props.index });
    setDictList({ key: 'endIndex', value: end - 1, index: props.index });
    setDictList({ key: 'draggedWord', value: draggedWord, index: props.index });
  };

  return (
    // <Input
    //   {...props}
    //   onSelect={handleSelect}
    //   onTouchEnd={handleTouchEnd}
    //   required={uploadType !== 'draft'}
    // />
    <div>
      <label htmlFor={props.id} className='mb-1 block text-sm font-medium text-gray-700'>
        {props.label}
      </label>
      <textarea
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className='w-full resize-none rounded-md border p-2'
        rows={3}
        required={uploadType !== 'draft'}
        onSelect={handleSelect}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
}

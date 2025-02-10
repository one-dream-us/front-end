import { useUploadFormStore } from '@/store/admin/uploadFormState';
import { UploadFormChangeType } from '@/types/interface';
import { useShallow } from 'zustand/shallow';

export default function LabelInput({
  id,
  type = 'text',
  placeholder,
  label,
}: {
  id: UploadFormChangeType;
  type?: string;
  placeholder: string;
  label: string;
}) {
  console.log(label, 'rerender');

  const { onChange, value } = useUploadFormStore(
    useShallow((state) => ({ value: state.uploadForm[id], onChange: state.onChange })),
  );

  return (
    <div>
      <label htmlFor={id} className='mb-1 block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value, id)}
        type={type}
        id={id}
        className='w-full rounded-md border p-2'
        placeholder={placeholder}
      />
    </div>
  );
}

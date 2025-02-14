import useAutoComplete from '@/hooks/admin/useAutoComplete';
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

  const { onChange, value, setNewsCompanyValue } = useUploadFormStore(
    useShallow((state) => ({
      value: state.uploadForm[id],
      onChange: state.onChange,
      setNewsCompanyValue: state.setNewsCompanyValue,
    })),
  );

  const { searchIndex, handleNavigateSearchResult, searchResults } = useAutoComplete(
    id,
    id === 'newsCompany' ? value : '',
    setNewsCompanyValue,
  );

  return (
    <div className='relative'>
      <label htmlFor={id} className='mb-1 block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        required
        value={value}
        onChange={(e) => onChange(e.target.value, id)}
        type={type}
        id={id}
        className='w-full rounded-md border p-2'
        placeholder={placeholder}
        onKeyDown={handleNavigateSearchResult}
        autoComplete={id === 'newsCompany' ? 'off' : 'on'}
      />
      {id === 'newsCompany' && searchResults.length > 0 && value && (
        <div className='absolute mt-1 w-full rounded-md border bg-white py-1 shadow-lg'>
          {searchResults.map((item, index) => (
            <button
              key={item.id}
              type='button'
              className={`w-full px-4 py-2 text-left transition-colors hover:bg-gray-100 ${index === searchIndex && 'bg-gray-100'}`}
              onClick={() => setNewsCompanyValue(item.term)}
            >
              {item.term}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

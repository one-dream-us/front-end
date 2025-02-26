import { AdminInputProps } from '@/types/interface';
import { KeyboardEvent, SyntheticEvent } from 'react';

export default function Input({
  id,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  disabled,
  onSelect,
  onkeydown,
  autoComplete,
}: AdminInputProps & {
  onSelect?: (e: SyntheticEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  onkeydown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  autoComplete?: 'on' | 'off';
}) {
  return (
    <div className='relative'>
      <label htmlFor={id} className='mb-1 block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <input
        required
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        className='w-full rounded-md border p-2'
        placeholder={placeholder}
        disabled={disabled}
        onSelect={onSelect}
        onKeyDown={onkeydown}
        autoComplete={autoComplete}
      />
    </div>
  );
}

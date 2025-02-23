import Input from '@/components/newAdmin/common/Input';
import { AdminInputProps } from '@/types/interface';
import { KeyboardEvent } from 'react';

export default function InputContainer({
  id,
  label,
  placeholder,
  onChange,
  value,
  onkeydown,
}: AdminInputProps & { onkeydown?: (e: KeyboardEvent<HTMLInputElement>) => void }) {
  return (
    <Input
      id={id}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onkeydown={onkeydown}
    />
  );
}

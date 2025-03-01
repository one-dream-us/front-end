import Input from '@/components/newAdmin/common/Input';
import { useUplodTypeStore } from '@/store/newAdmin/useFormStore';
import { AdminInputProps } from '@/types/interface';
import { KeyboardEvent } from 'react';

export default function InputContainer({
  id,
  label,
  placeholder,
  onChange,
  value,
  onkeydown,
  autoComplete,
}: AdminInputProps & {
  onkeydown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  autoComplete?: 'on' | 'off';
}) {
  const { uploadType } = useUplodTypeStore();
  return (
    <Input
      id={id}
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onkeydown={onkeydown}
      autoComplete={autoComplete}
      required={uploadType !== 'draft'}
    />
  );
}

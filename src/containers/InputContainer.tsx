import Input from '@/components/newAdmin/common/Input';
import { AdminInputProps } from '@/types/interface';

export default function InputContainer({
  id,
  label,
  placeholder,
  onChange,
  value,
}: AdminInputProps) {
  return (
    <Input id={id} label={label} placeholder={placeholder} value={value} onChange={onChange} />
  );
}

import { ButtonProps } from '@/types/interface';

export default function Button({ text, onClick, type = 'button', className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-12 w-full max-w-[343px] rounded-[10px] bg-gray-100 text-sm font-bold ${className}`}
    >
      {text}
    </button>
  );
}

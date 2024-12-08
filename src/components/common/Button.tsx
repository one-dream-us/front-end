import { ButtonProps } from '@/types/interface';

export default function Button({ text, onClick, type = 'button', className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-12 w-[343px] rounded-[10px] bg-custom-gray-dark text-sm font-bold -tracking-[0.01em] text-primary ${className} transition`}
    >
      {text}
    </button>
  );
}

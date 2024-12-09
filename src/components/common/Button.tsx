import { ButtonProps } from '@/types/interface';

export default function Button({ text, onClick, type = 'button', className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-12 w-full max-w-[343px] rounded-[10px] bg-custom-gray-dark font-bold text-primary transition hover:bg-hover-80 hover:text-green-hover md:text-sm ${className}`}
    >
      {text}
    </button>
  );
}

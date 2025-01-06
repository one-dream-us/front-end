import { ButtonProps } from '@/types/interface';

export default function Button({ text, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      id={`${text === '콘텐츠 모으러 가기' ? 'btn-content-collect' : 'btn-term-collect'}`}
      type={type}
      onClick={onClick}
      className='h-12 w-full max-w-[343px] rounded-[10px] bg-custom-gray-dark font-medium text-primary transition hover:bg-hover-80 hover:text-green-hover md:text-sm'
    >
      {text}
    </button>
  );
}

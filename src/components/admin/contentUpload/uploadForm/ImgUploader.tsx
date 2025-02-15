import imgState from '@/store/admin/imageState';
import React, { useState } from 'react';

export default function ImgUploader() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const setImg = imgState((s) => s.setImg);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setImg(file);
    }
  };

  return (
    <div className='rounded-md border-2 border-dashed p-4 text-center'>
      <input
        type='file'
        id='image'
        accept='image/*'
        className='hidden'
        onChange={handleImageChange}
      />
      <label htmlFor='image' className='flex cursor-pointer flex-col items-center justify-center'>
        {imagePreview ? (
          <img src={imagePreview} alt='Preview' className='mb-2 max-h-48 object-contain' />
        ) : (
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='mb-2 h-8 w-8 text-gray-400'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15'
              />
            </svg>

            <span className='text-sm text-gray-500'>클릭하여 이미지를 업로드하세요</span>
          </>
        )}
      </label>
    </div>
  );
}

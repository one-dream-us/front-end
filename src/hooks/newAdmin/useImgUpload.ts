import { useState } from 'react';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2mb, (1024*1024 === 1mb)
const useImgUpload = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | undefined>();
  // const setImg = imgState((s) => s.setImg);
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert('2mb 이하만 가능해용');
        setFile(undefined);
        e.target.value = '';
        return;
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        setFile(file);
      }
    }
  };

  return { imagePreview, handleImageChange, file, setImagePreview };
};
export default useImgUpload;

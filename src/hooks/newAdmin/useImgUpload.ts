import { useState } from 'react';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2mb, (1024*1024 === 1mb)
const useImgUpload = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | undefined>();
  const [fileUpdated, setFileUpdated] = useState(false);

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
      setFileUpdated(true);
    }
  };

  return { imagePreview, handleImageChange, file, setImagePreview, setFile, fileUpdated };
};
export default useImgUpload;

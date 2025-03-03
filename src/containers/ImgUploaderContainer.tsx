import ImgUploader from '@/components/newAdmin/ImgUploader';
import { useUplodTypeStore } from '@/store/newAdmin/useFormStore';
import { AdminImgUploadeerProps } from '@/types/interface';
import { useEffect, useRef } from 'react';
import { useMatch } from 'react-router-dom';

export default function ImgUploaderContainer({
  handleImageChange,
  imagePreview,
}: AdminImgUploadeerProps) {
  const { uploadType } = useUplodTypeStore();
  const updateMatch = useMatch('/admin/update/:id');
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!updateMatch) return;
    if (!fileRef.current) return;

    // DataTransfer 객체 생성
    const dataTransfer = new DataTransfer();

    // 기본 파일 생성: 파일 내용은 빈 문자열(""), 파일명은 'default.jpg', MIME 타입은 필요에 따라 지정
    const defaultFile = new File([''], 'default.jpg', { type: 'image/jpeg' });

    // DataTransfer에 기본 파일 추가
    dataTransfer.items.add(defaultFile);

    // file input의 files에 할당 (일부 최신 브라우저에서는 허용됨)
    fileRef.current.files = dataTransfer.files;
  }, [updateMatch]);
  return (
    <ImgUploader
      handleImageChange={handleImageChange}
      imagePreview={imagePreview}
      required={uploadType !== 'draft'}
      fileRef={fileRef}
    />
  );
}

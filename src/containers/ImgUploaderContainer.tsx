import ImgUploader from '@/components/newAdmin/ImgUploader';
import { useUplodTypeStore } from '@/store/newAdmin/useFormStore';
import { AdminImgUploadeerProps } from '@/types/interface';

export default function ImgUploaderContainer({
  handleImageChange,
  imagePreview,
}: AdminImgUploadeerProps) {
  const { uploadType } = useUplodTypeStore();
  return (
    <ImgUploader
      handleImageChange={handleImageChange}
      imagePreview={imagePreview}
      required={uploadType !== 'draft'}
    />
  );
}

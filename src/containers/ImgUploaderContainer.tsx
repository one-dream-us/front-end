import ImgUploader from '@/components/newAdmin/ImgUploader';
import { AdminImgUploadeerProps } from '@/types/interface';

export default function ImgUploaderContainer({
  handleImageChange,
  imagePreview,
}: AdminImgUploadeerProps) {
  return <ImgUploader handleImageChange={handleImageChange} imagePreview={imagePreview} />;
}

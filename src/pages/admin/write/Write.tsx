// import UploadForm from '@/components/admin/contentUpload/uploadForm/UploadForm';
// import UploadForm from '@/components/admin/contentUpload/uploadForm/UploadForm';
import UploadFormContainer from '@/components/newAdmin/UploadFormContainer';

export default function Write() {
  return (
    <div className='mt-[40px] overflow-x-hidden'>
      <div className='m-auto max-w-[1182px]'>
        {/* <UploadForm /> */}
        <UploadFormContainer />
      </div>
    </div>
  );
}
